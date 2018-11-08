export enum TxType {
  PUBLIC = 'part',
  BLIND = 'blind',
  ANON = 'anon'
}

export enum payType {
  sendPayment = 'sendpayment'
}

export enum typeOfAddresses {
  Send = 'send',
  Receive = 'receive'
}

export enum categories {
  Send = 'send',
  Receive = 'receive',
  Node = 'node'
}

export enum message {
  walletMessage = 'Failed to get wallet information',
  recentTransactionMessage = 'Failed to get recent transaction',
  transactionMessage = 'Failed to get transaction', 
  bitcoinpriceMessage  = 'Failed to get bit coin price',
  AddressAddedMessage = 'Failed to add address!',
  AddressEditedMessage = 'Failed to edit address!',
  AddressDeletedMessage = 'Failed to delete address!',
  EnterData= 'Please enter the data!',
  SendAmount = 'Wallet Failed to get balance!',
  GetNewAddress = 'Failed to get new address',
  ReceiveNIXtoWallet = 'Wallet Failed Receive NIX to Wallet!',
  GetAddress = 'Failed to get addresses',
  SendAmountToVaultMessage = 'Ghost vault Failed to get balance!',
  SaveCurrencyMessage = 'Failed to save currency',
  PasswordValidationMessage = 'Re-Entry password must be same to the new password',
  ChangePasswordMessage = 'Failed to change password',
  CurrencyChangeMessage = 'Your settings have been saved',
  CopiedAddress = 'The address has been copied to clipboard',
  DepositMessage = 'Failed to deposit amount',
  PassphraseNotMatch = 'Password does not match. Please check if the password is correct!',
  PassphraseChanged = 'Passphrase was successfully changed! Please restart the wallet after it is closed',
  WalletEncrypted = 'Nix Core will restart now due to password/wallet encryption',
  GetAllAddresses = 'Failed to get address book addresses',
  GetFeeForAmount = 'Failed to get fee for the amount!',
  ListTransactions = 'Failed to get the transactions!',
  UnGhostAmount = 'Failed to unghost the amount!',
  GhostnodeListConf = 'Failed to get list of Ghostnodes!',
  GhostnodeList = 'Failed to get list of all Ghostnodes!'
}

export enum ApiEndpoints {
  SendToAddress = 'sendtoaddress',
  ListStealthAddresses = 'liststealthaddresses',
  FilterTransactions = 'filtertransactions',
  ListTransactions = 'listtransactions',
  GetWalletInfo = 'getwalletinfo',
  ReceivedNix = 'getaddressesbyaccount',
  AddNode = 'addnode',
  GetTransaction = 'gettransaction',
  GetBalance = 'getbalance',
  AddressBook = 'manageaddressbook',
  ValidadeAddress = 'validateaddress',
  Filteraddresses = 'filteraddresses',
  Filtertransactions  = 'filtertransactions',
  Encryptwallet = 'encryptwallet',
  Walletpassphrase = 'walletpassphrase',
  Walletpassphrasechange = 'walletpassphrasechange' ,
  Mnemonic = 'mnemonic',
  Extkeygenesisimport = 'extkeygenesisimport',
  GetBtc = 'https://api.coinmarketcap.com/v2/ticker/2991/?convert=BTC',
  GetEur = 'https://api.coinmarketcap.com/v2/ticker/2991/?convert=EUR',
  NIXHitoryUrl = 'https://api.coingecko.com/api/v3/coins/nix-platform/market_chart?',
  GetMarketInfo = 'https://api.coingecko.com/api/v3/coins/markets?',
  Getblockchaininfo = 'getblockchaininfo',
  Getstakinginfo = 'getstakinginfo',
  Getnewaddress = 'getnewaddress',
  Setaccount = 'setaccount',
  GhostnodeListConf = 'ghostnode list-conf',
  Ghostnode = 'ghostnode',
  GhostnodeList = 'ghostnodelist',
  Torstatus  = 'torstatus',
  EnableTor  = 'enabletor',
  SaveCurrency = 'https://api.coinmarketcap.com/v2/ticker/2991',
  GetPriceinfo = 'getpriceinfo',
  GhostAmount = 'ghostamount',
  ListReceivedbyAddress = 'listreceivedbyaddress',
  GetAccountAddress = 'getaccountaddress',
  ListAccounts = 'listaccounts',
  GetAddressesbyAccount = 'getaddressesbyaccount',
  GetFeeForAmount = 'getfeeforamount',
  GetNetworkInfo = 'getnetworkinfo',
  GetAllAddresses = 'getalladdresses',
  ManageAddressbook = 'manageaddressbook',
  UnGhostAmount = 'unghostamount',
  WalletLock = 'walletlock',
  StopNixd = 'stop'
}
