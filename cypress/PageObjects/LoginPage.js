class LoginPage
{
    
    fillInEmailAddress()
    {
        cy.get('#email').type("ljzerohh@gmail.com")
        cy.get("#passwd").type("password1")
        cy.get("#SubmitLogin").click()
    }

    verifyLogin(){
        cy.get(".logout")
    }


}


export default LoginPage;