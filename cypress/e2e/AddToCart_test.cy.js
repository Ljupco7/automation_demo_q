import LandingPage from "../PageObjects/LandingPage";
import LoginPage from "../PageObjects/LoginPage";
import ProductPage from "../PageObjects/ProductPage";
import SearchPage from "../PageObjects/SearchPage"


const landing_page = new LandingPage();
const login_page = new LoginPage();
const search_page = new SearchPage();
const product_page = new ProductPage()


describe('Search Button Test', () => {
    before(() => {

        cy.visit('http://www.automationpractice.pl/index.php');
        
        //Log into the web app
        landing_page.sign_in()
        login_page.fillInEmailAddress()
        login_page.verifyLogin()
    });



    it('Add product to the cart', () => {

        search_page.searchInputField()
        product_page.viewProduct()
        product_page.chooseColor()
        product_page.addToCart()

    });

});