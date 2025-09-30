import { elements as el} from "./elements"

class Login {
    visitarPagina(){
        cy.visit('https://www.saucedemo.com/')
    }

    preencherCredenciaisValidas(){
        cy.get(el.username).type(Cypress.env('username'))

        cy.get(el.password).type(Cypress.env('password'))

        cy.get(el.loginButton).click()     
    }

    preencherCredenciaisInvalidas(){
        cy.get(el.username).type('user_invalid')

        cy.get(el.password).type('password_invalid')

        cy.get(el.loginButton).click() 
    }

    validarErroCredenciaisInvalidas(){
        cy.get(el.errorMessage).should('contain.text','Username and password do not match any user in this service')

        cy.url().should('eq', 'https://www.saucedemo.com/')

        cy.screenshot('erro credênciais inválidas')
    }
}

export default new Login()