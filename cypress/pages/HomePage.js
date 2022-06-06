import loc from '../support/locators'
const chance = new Chance();
class HomePage {

    
    go() {
        cy.visit('/')
    } 

    fillYourFirstNamefield(){
        it("o campo \"YourFirstName\" deve ser preenchido com um texto qualquer", function () {
            cy.get(loc.FIELDS.FirstName).type(chance.name());
        })
    }

    clickOneButton(){
        it("deve-se clicar no botão \"One\"", function () {
            cy.get(loc.BTN.ButtonOne).click()
        })
    }

    checkOptionThree(){
        it("marcar cheque na opção \"OptionThree\"", function () {
            cy.get(loc.BTN.CheckboxOptionThree).check()
        })
    }

    selectBoxExampleTwo(){
        it("selecionar a opção \"ExampleTwo\" dentro da select box", function () {
            cy.get('select').select('ExampleTwo')
        })
    }

    confirmImage(){
        it("confirmar a presença da imagem do logo do \"Selenium Webdriver\"", function () {
            cy.get(loc.IMG.ImageSelenium).should('be.visible')
        })
    }

}

export default new HomePage;