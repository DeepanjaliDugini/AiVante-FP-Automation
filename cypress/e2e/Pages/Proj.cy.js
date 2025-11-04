
import Login from "../../PageObjects/Proj.js";

describe("Login POM", () => {
  let login;
  let data;

  before(() => {
    cy.fixture("Proj").then((d) => { data = d; });
    
  });

  beforeEach(() => {
    login = new Login();  // ✅ assign to the outer variable
    cy.visit("https://publicplan.aivante.net/New_FP/Dzee/financial_planner/login");
  });

   it("TC_FP_Login_01: Verify Aivante logo is visible", () => {

  login.setAivanteLogo()
  })
    it("TC_FP_Login_02: Verify email input field", () => {
    login.setEMailUserID(data.UserID)
    })
   it("TC_FP_Login_03: Verify password input field", () => {    
   login.setPassword(data.Password)
   })
    it("TC_FP_Login_04: Verify login button is clickable", () => {
    login.setEMailUserID(data.UserID);
    login.setPassword(data.Password);
    login.clickLogin();
    login.verifyPlannerPage(data.FirstName);
    })
   })