class Login
{
    AivanteLogo="img[alt='logo']";
    EMailUserID='[id="email"]';
    Password='[id="password"]';
    Login='[id="submit"]';
    PlannerPage='[id="logged_in_user_name"]'
    
setAivanteLogo(AivanteLogo)
    {
cy.get(this.AivanteLogo).should("be.visible");
    }
setEMailUserID(EMailUserID)
{
cy.get(this.EMailUserID).should("be.visible").and("not.be.disabled").type("newteamfp@gmail.com");
}
setPassword(Password)
{
cy.get(this.Password).should("be.visible").and("not.be.disabled").type("test");
}
clickLogin(Login)
{
    cy.get(this.Login).should("be.visible").and("not.be.disabled").click()
}
verifyPlannerPage()
{
    cy.get(this.PlannerPage).should("be.visible").and('have.text', "Welcome, Financial Planner");
}
}

export default Login;