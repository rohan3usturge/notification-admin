import { UserAgentApplication, Configuration } from 'msal'

export class AuthService {
  private userAgentApplication: UserAgentApplication
  private graphScopes = [
    'api://d7815eca-f2fe-418a-8368-3af50e381ed9/eventTypes.read',
  ]

  private config: Configuration = {
    auth: {
      clientId: 'cb16a5ba-747e-4809-b198-86f4fe03b07b',
      authority: 'https://login.windows.net/microsoft.onmicrosoft.com',
    },
    cache: {
      cacheLocation: 'localStorage',
    },
  }
  /**
   *
   */
  constructor() {
    this.userAgentApplication = new UserAgentApplication(this.config)
    this.userAgentApplication.handleRedirectCallback((error, response) => {
      console.log({ error })
      console.log({ response })
    })
  }

  public login = async (): Promise<boolean> => {
    try {
      await this.userAgentApplication.loginPopup({
        scopes: this.graphScopes,
      })
      return true
    } catch (error) {
      console.log({ error })
      return false
    }
  }
}
