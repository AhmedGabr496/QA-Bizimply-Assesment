import BasePage from './BasePage'

class PersonalProfilePage extends BasePage {
  constructor() {
    super()
    this.selectors = {
      employeeTitleDropDown: '#select2-employee_title-container',
      empolyeeTitles:'.select2-results__option',
      employeePhoneNumber:'#employee_phone_number',
      employeeCountryDropDown:'#employee_address_record_attributes_country-button',
      employeeCountires:'#employee_address_record_attributes_country-menu',
      employeeDateBirth:'#employee_date_of_birth',
      employeeEthnicityDropDown:'#select2-employee_ethnicity-container',
      employeeEthnicityOptions:'.select2-results__option',
      employeePassportExpiryDate:'#employee_passport_expiry'
    }
  }
  updateEmployeeTitle(newTitle) {
    cy.get(this.selectors.employeeTitleDropDown).click();
    cy.get(this.selectors.empolyeeTitles).contains(newTitle).click();
    cy.get(this.selectors.employeeTitleDropDown).should('have.text', newTitle);
    } 

   updatePhoneNumber(newPhoneNumber){
    cy.get(this.selectors.employeePhoneNumber).clear().type(newPhoneNumber);
    cy.get(this.selectors.employeePhoneNumber).should('have.value', newPhoneNumber);
    }

    updateCountry(countryName){
        cy.get(this.selectors.employeeCountryDropDown).click();
        cy.get(this.selectors.employeeCountires).contains('li',countryName).click();
        cy.get(this.selectors.employeeCountryDropDown).should('have.text', countryName);
        }

    updateEthnicity(newEthnicity){
        cy.get(this.selectors.employeeEthnicityDropDown).click();
        cy.get(this.selectors.employeeEthnicityOptions).contains(newEthnicity).click();
        cy.get(this.selectors.employeeEthnicityDropDown).should('have.text', newEthnicity);
    }

    updateDateOfBirth(newDateOfBirth){
        cy.get(this.selectors.employeeDateBirth).clear().type(newDateOfBirth);
        cy.get(this.selectors.employeeDateBirth).should('have.value', newDateOfBirth);
        cy.get('body').click(0, 0);
    }

    updatePassportExpiry(newPassportExpiry){
        cy.get(this.selectors.employeePassportExpiryDate).clear().type(newPassportExpiry);
        cy.get(this.selectors.employeePassportExpiryDate).should('have.value', newPassportExpiry);
        cy.get('body').click(0, 0);
    }
}  
export default new PersonalProfilePage()
