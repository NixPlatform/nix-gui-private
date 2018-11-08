import { Component, OnInit } from '@angular/core';
import { Log } from 'ng2-logger';
import { Router } from '@angular/router';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { FAQ } from '../shared/faq.model';

@Component({
  selector: 'app-ghost',
  templateUrl: './ghost.component.html',
  styleUrls: ['./ghost.component.scss']
})
export class GhostComponent implements OnInit {
  faEyeSlash: any = faEyeSlash;
  faEye: any = faEye;
  walletNewPassword: string;
  walletRepeatPassword: string;
  showPassword: boolean = false;
  termsChecked: boolean = false;
  showSidebarError: boolean = false;
  showContentError: boolean = false;
  phraseCopied: boolean = false;
  step: number = 1;
  walletWizard: any = [
    {
      valid: (): boolean => true
    },
    {
      valid: (): boolean => true
    },
    {
      valid: (): boolean => true
    }
  ];
  private log: any = Log.create('create.component');
  private destroyed: boolean = false;

  constructor(
    private router: Router,
  ) {
  }

  ngOnInit() {
  }

  ngOnDestroy(): void {
    this.destroyed = true;
  }

  togglePassword() {
    this.showPassword = !this.showPassword;
  }

  passwordLabelText(): string {
    return this.showPassword ? 'Hide' : 'Show';
  }

  nextStep(n) {
    if (this.step === 4) {
      this.step++;
      this.goTo('main');
      return;
    }

    if (!this.walletWizard[this.step].valid()) {
      return;
    }

    this.step++;
    this.showContentError = false;
    this.showSidebarError = false;

    var i, x = document.getElementsByClassName("step");
    for (i = 0; i < x.length; i++) {
      x[i].className = x[i].className.replace(" active", "");
    }
    //... and adds the "active" class on the current step:
    x[n].className += " active";
  }

  prevStep() {
    this.showSidebarError = false;
    this.showContentError = false;
    this.step--;
  }

  stepProgress(): number {
    const step = this.step;
    if (step < 3) {
      return step * 33;
    }
    return 100;
  }

  stepTitle(): string {
    const step = this.step;
    if (step === 1) {
      return 'Set-up Ghostnode';
    } else if (step === 2) {
      return 'Transfer NIX to Ghostnode';
    }
    return 'Confirm your recovery phrase';
  }



  goTo(route: string) {
    this.router.navigate([`/${route}`]);
  }

  goToPage() {
    this.router.navigate(['./main/ghost']);
  }

}
