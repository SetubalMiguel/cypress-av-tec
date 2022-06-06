import loc from '../support/locators'
const chance = new Chance();
const buttons = [
    { button: loc.BTN.ButtonOne, name: 'Botão One' },
    { button: loc.BTN.ButtonTwo, name: 'Botão Two' },
    { button: loc.BTN.ButtonFour, name: 'Botão Four' }
]
class HomePage {

    go() {
        cy.visit('/')
    }

    fillYourFirstNamefield() {
        it("o campo \"YourFirstName\" deve ser preenchido com um texto qualquer", function () {
            cy.get(loc.FIELDS.FirstName).type(chance.name());
        })
    }

    clickOneButton() {
        it("deve-se clicar no botão \"One\"", function () {
            cy.get(loc.BTN.ButtonOne).click()
        })
    }

    checkOptionThree() {
        it("marcar cheque na opção \"OptionThree\"", function () {
            cy.get(loc.BTN.CheckboxOptionThree).check()
        })
    }

    selectBoxExampleTwo() {
        it("selecionar a opção \"ExampleTwo\" dentro da select box", function () {
            cy.get('select').select('ExampleTwo')
        })
    }

    confirmImage() {
        it("confirmar a presença da imagem do logo do \"Selenium Webdriver\"", function () {
            cy.get(loc.IMG.ImageSelenium).should('be.visible')
        })
    }

    clickButtons() {
        buttons.forEach(function (btn) {
            it(`ao clicar no ${btn.name} `, function () {
                cy.get(`${btn.button}`).click()
            })

            it(`espera-se que após o clique o ${btn.name} não esteja visivel`, function () {
                cy.get(`${btn.button}`).should('not.be.visible')
            })
        })
    }

    clickIframeButtons() {
        before(function () {
            cy.frameLoaded(loc.IFRAME.IFrameButtons)
        })

        buttons.forEach(function (btn) {
            it(`ao clicar no ${btn.name} `, function () {
                cy.iframe(loc.IFRAME.IFrameButtons).find(`${btn.button}`).click()
            })

            it(`espera-se que após o clique o ${btn.name} do IFrame Buttons não esteja visivel`, function () {
                cy.iframe(loc.IFRAME.IFrameButtons).find(`${btn.button}`).should('not.be.visible')
            })
        })
    }

}

export default new HomePage;