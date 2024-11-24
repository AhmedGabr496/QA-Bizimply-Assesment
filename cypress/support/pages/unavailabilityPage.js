import BasePage from './BasePage'

class PersonalProfilePage extends BasePage {
  constructor() {
    super()
    this.selectors = {
      newUnavailabilityRequestBttn: '#new_unavailability_btn',
      unavailabilityTypeBttn:'#employee_unavailability_kind',
      unavailabilityStartDate:'#employee_unavailability_start_date_before_conversion',
      unavailabilityEndDate:'#employee_unavailability_end_date_before_conversion',
      unavailabilityPartDay:'#employee_unavailability_all_day_false',
      unavailabilityStartTime:'#employee_unavailability_start_time_before_conversion',
      unavailabilityEndTime:'#employee_unavailability_end_time_before_conversion',
      unavailabilityReason:'#employee_unavailability_note',
      unavailabilitySubmitBttn:'.btn.btn-primary.approve',
      unavailabilityConfrimBttn:'#ok-button-unavailability',
      unavailabilityEndOn:'#employee_unavailability_open_ended_true',
      unavailabilityWorkWeek:'#employee_unavailability_work_week_attributes_monday'
    }
  }
  createUnavailabilityRequest(category , startDate , endDate , fromTime , toTime , unavailabilityReason) {
    cy.get(this.selectors.newUnavailabilityRequestBttn).click();
    cy.get(this.selectors.unavailabilityTypeBttn).select(category);
    cy.get(this.selectors.unavailabilityTypeBttn).contains(category);
    cy.get(this.selectors.unavailabilityWorkWeek).check();
    cy.get(this.selectors.unavailabilityEndOn).check();
    cy.get(this.selectors.unavailabilityEndDate).clear().type(endDate);
    cy.get('body').click(0, 0); 
    cy.get(this.selectors.unavailabilityPartDay).check();
    cy.get(this.selectors.unavailabilityStartTime).should('be.visible').clear().type(fromTime);
    cy.get(this.selectors.unavailabilityEndTime).should('be.visible').clear().type(toTime);
    cy.get(this.selectors.unavailabilityReason).type(unavailabilityReason);
    cy.get(this.selectors.unavailabilitySubmitBttn).click();
    cy.get(this.selectors.unavailabilityConfrimBttn).click();
    cy.contains(unavailabilityReason).should('be.visible');
  }
}  
export default new PersonalProfilePage()
