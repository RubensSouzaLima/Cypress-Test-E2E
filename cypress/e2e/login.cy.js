import Login from '../pages/login'
import Inventory from '../pages/inventory'
describe('Login', () => {

    beforeEach(() => {
        //Arrange
        Login.visitarPagina()
    });
    it('Realizar login com sucesso', () =>{       

        //Act
        Login.preencherCredenciaisValidas()

        //Assert
        Inventory.validarAcessoAPagina()
    });

    it('Realizar login com credênciais inválidas', () =>{
        
        //Act
        Login.preencherCredenciaisInvalidas()          
        
        //Assert
        Login.validarErroCredenciaisInvalidas()
    });
});