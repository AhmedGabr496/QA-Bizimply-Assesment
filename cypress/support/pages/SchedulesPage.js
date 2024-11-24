import BasePage from './BasePage'

class SchedulesPage extends BasePage {
  constructor() {
    super()
    this.url = '/schedules'
    this.selectors = {
      profileTab: 'Your Profile',
      timeOffTab: 'Time Off',
      UnavailabilityTab: 'Unavailability',
    }
  }
  
  visitProfilePage() {
    cy.contains('a',this.selectors.profileTab)
    .click({force: true})
  }

  visitTimeOffPage() {
    cy.contains('a',this.selectors.timeOffTab)
    .click({force: true})
  }
  
  visitUnavailabilityPage() {
    cy.contains('a',this.selectors.UnavailabilityTab)
    .click({force: true})
  }
}
export default new SchedulesPage()
