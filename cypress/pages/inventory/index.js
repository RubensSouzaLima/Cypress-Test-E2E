import { elements as el} from "./elements"
class Inventory {
    validarAcessoAPagina(){
        cy.url().should('eq', 'https://www.saucedemo.com/inventory.html')

        cy.screenshot('acesso a pagina de invetário')
    }

    adicionarProduto(itemName){
        cy.get(el.addToCar(itemName)).click()
    }

    removerProduto(itemName){
        cy.get(el.removeFromCart(itemName)).click()
    }
}

export default new Inventory()