import { Injectable, OnDestroy } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Log } from 'ng2-logger';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';
import { map, catchError } from 'rxjs/operators';
import { IpcService } from '../ipc/ipc.service';
import { environment } from 'environments/environment';

const MAINNET_PORT = environment.nix_MainNet_Port;
const TESTNET_PORT = environment.nixPort;
const HOSTNAME = environment.nixHost;
const RPCUSER = environment.rpcUserName;
const RPCPASSWORD = environment.rpcPassword;

declare global {
  interface Window {
    electron: boolean;
  }
}

/**
 * The RPC service that maintains a single connection to the nixd daemon.
 *
 * It has two important functions: call and register.
 */

@Injectable()
export class RpcService implements OnDestroy {

  private log: any = Log.create('rpc.service');
  private destroyed: boolean = false;

  /**
   * IP/URL for daemon (default = localhost)
   */
  private hostname: String = HOSTNAME; // TODO: URL Flag / Settings

  /**
   * Port number of of daemon (default = 51935)
   */
  private port: number = MAINNET_PORT; // TODO: Mainnet / testnet flag...

  private username: string = RPCUSER;
  private password: string = RPCPASSWORD;

  public isElectron: boolean = false;

  constructor(
    private _http: HttpClient,
    private _ipc: IpcService
  ) {
    this.isElectron = window.electron;
  }

  ngOnDestroy() {
    this.destroyed = true;
  }

  /**
   * The call method will perform a single call to the particld daemon and perform a callback to
   * the instance through the function as defined in the params.
   *
   * @param {string} method  The JSON-RPC method to call, see ```./particld help```
   * @param {Array<Any>} params  The parameters to pass along with the JSON-RPC request.
   * The content of the array is of type any (ints, strings, booleans etc)
   *
   * @example
   * ```JavaScript
   * this._rpc.call('listtransactions', [0, 20]).subscribe(
   *              success => ...,
   *              error => ...);
   * ```
   */
  call(method: string, params?: Array<any> | null): Observable<any> {
    if (this.isElectron) {
      return this._ipc.runCommand('rpc-channel', null, method, params).pipe(
        map(response => response && (response.result !== undefined)
                      ? response.result
                      : response
        )
      );
    } else {
      // Running in browser, delete?
      const postData = JSON.stringify({
        method: method,
        params: params,
        id: 1
      });

      const headers = new HttpHeaders();
      headers.append('Content-Type', 'application/json');
      headers.append('Authorization', 'Basic ' + btoa(`${this.username}:${this.password}`));
      headers.append('Accept', 'application/json');

      return this._http
        .post(`http://${this.hostname}:${this.port}`, postData, { headers: headers })
        .pipe(
          map((response: any) => response.result),
          catchError(error => Observable.throw(typeof error._body === 'object'
            ? error._body
            : JSON.parse(error._body))
          )
        );
    }
  }

}
