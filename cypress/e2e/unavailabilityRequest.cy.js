import LoginPage from '../support/pages/LoginPage'
import SchedulesPage from '../support/pages/SchedulesPage'
import unavailability from '../support/pages/unavailabilityPage'

describe('New unavailability requests tests', () => {
  beforeEach(() => {
    LoginPage.visit()
    LoginPage.login('ametawea+gabr@bizimply.com','Pa$$w0rd')
  })

  it('Create a new unavailability ', () => {
    const today = new Date(); // Ensure today is defined
    const todayDate = `${today.getDate().toString().padStart(2, '0')}/${(today.getMonth() + 1).toString().padStart(2, '0')}/${today.getFullYear()}`;
    const futureDate = new Date(today);
    futureDate.setDate(today.getDate() + 3);
    const formattedFutureDate = `${futureDate.getDate().toString().padStart(2, '0')}/${(futureDate.getMonth() + 1).toString().padStart(2, '0')}/${futureDate.getFullYear()}`;
    SchedulesPage.visitUnavailabilityPage();
    unavailability.createUnavailabilityRequest(
      'Recurring',
      todayDate,
      formattedFutureDate,
      '01:00',
      '03:00',
      'Test unavailbilty'
    );

  })
})
