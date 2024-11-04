class ProductPage
{

    viewProduct()
    {
        cy.get(".product_img_link").click()
        cy.contains('button', 'Search').click();

    }

    chooseColor()
    {
        cy.get("#color_8").click()
        
    }
    
    addToCart()
    {
        cy.get("#add_to_cart > button").click()
    }
}


export default ProductPage;


