import LoginPage from '../support/pages/LoginPage'
import SchedulesPage from '../support/pages/SchedulesPage'
import TimeOffRequestsPage from '../support/pages/TimeOffRequestsPage'
describe('New time off requests tests', () => {
  beforeEach(() => {
    LoginPage.visit()
    LoginPage.login('ametawea+gabr@bizimply.com','Pa$$w0rd')
  })

  it('Create a new time off request', () => {

    SchedulesPage.visitTimeOffPage();
    TimeOffRequestsPage.createTimeOffRequest('Other' , '10/12/2024' , '15/12/2024' , 'vacation test test');
  })


  
})
