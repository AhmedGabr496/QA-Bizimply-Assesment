import BasePage from './BasePage'

class PersonalProfilePage extends BasePage {
  constructor() {
    super()
    this.selectors = {
      newRequestBttn: '#new_time_off_button',
      timeRequestType:'#employee_time_off_request_time_off_category_id',
      timeOffStartDate:'#employee_time_off_request_start_date',
      timeOffEndDate:'#employee_time_off_request_end_date',
      timeOffNote:'#employee_time_off_request_reason',
      timeOffSubmitBttn:'.btn.btn-primary.approve',
      timeOffConfirmBttn:'#ok-button-time-off',
      backToTimeOffBttn:'#employee_time_off_button',
      leavePageBttn:'button.btn.save-no'
    }
  }
  createTimeOffRequest(category , startDate , endDate , timeOffReason) {
    cy.get(this.selectors.newRequestBttn).click();
    cy.get(this.selectors.timeRequestType).select(category);
    cy.get(this.selectors.timeRequestType).contains(category);
    cy.get(this.selectors.timeOffStartDate).click(); 
    cy.get(this.selectors.timeOffStartDate).type(startDate); 
    cy.get(this.selectors.timeOffEndDate).type(endDate); 
    cy.get(this.selectors.timeOffNote).type(timeOffReason);
    cy.get(this.selectors.timeOffSubmitBttn).click();
    cy.get(this.selectors.timeOffConfirmBttn).click();
    cy.get(this.selectors.backToTimeOffBttn).click();
    cy.get(this.selectors.leavePageBttn).click();
    cy.contains(timeOffReason).should('be.visible');
    }
}  
export default new PersonalProfilePage()
