class Inventory {
    validarAcessoAPagina(){
        cy.url().should('eq', 'https://www.saucedemo.com/inventory.html')

        cy.screenshot('acesso a pagina de invetário')
    }
}

export default new Inventory()