import LoginPage from '../support/pages/LoginPage'
import SchedulesPage from '../support/pages/SchedulesPage'
import PersonalProfilePage from '../support/pages/PersonalProfilePage'
import utilsMethods from '../../scripts/utilsMethods'
describe('Profile employee personlan data Tests', () => {
  beforeEach(() => {
    LoginPage.visit()
    LoginPage.login(Cypress.env('USER_EMAIL'), Cypress.env('USER_PASSWORD'))
  })

  it('Update employee personal data', () => {
    SchedulesPage.visitProfilePage();
    PersonalProfilePage.updateEmployeeTitle('Mr');
    PersonalProfilePage.updatePhoneNumber(Math.floor(100000 + Math.random() * 900000).toString());
    PersonalProfilePage.updateCountry('United States of America');
    PersonalProfilePage.updateDateOfBirth(utilsMethods.generateRandomDate('1970-01-01', '2008-01-01'));
    PersonalProfilePage.updateEthnicity('British');
    PersonalProfilePage.updatePassportExpiry(utilsMethods.generateRandomDate('2024-01-01', '2040-01-01'));
  })
})
