import BasePage from './BasePage'

class LoginPage extends BasePage {
  constructor() {
    super()
    this.url = '/'
    this.selectors = {
      usernameInput: '#user_user_name',
      passwordInput: '#user_password',
      loginButton: '#sign-in-button',
    }
  }
  login(username, password) {
    this.typeText(this.selectors.usernameInput, username)
    this.typeText(this.selectors.passwordInput, password)
    this.clickElement(this.selectors.loginButton)
  }
}
export default new LoginPage()
