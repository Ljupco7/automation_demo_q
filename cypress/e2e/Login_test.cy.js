import LandingPage from "../PageObjects/LandingPage";
import LoginPage from "../PageObjects/LoginPage";

const landing_page = new LandingPage();
const login_page = new LoginPage();


describe('Search Button Test', () => {
    before(() => {
        cy.visit('http://www.automationpractice.pl/index.php');

    });

    it('Log into the web app', () => {

        landing_page.sign_in()
        login_page.fillInEmailAddress()
        login_page.verifyLogin()

    });



});