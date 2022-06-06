/// <reference types="cypress"/>
import homePage from '../pages/HomePage'
import loc from '../support/locators'

describe("Dado a home da página", function () {

    before(function () {
        homePage.go()
    })    

    const buttons = [
        { button: loc.BTN.ButtonOne, name: 'Botão One' },
        { button: loc.BTN.ButtonTwo, name: 'Botão Two' },
        { button: loc.BTN.ButtonFour, name: 'Botão Four' }
    ]

    context("Quando clicar nos botões", function () {

        buttons.forEach(function (btn) {
            it(`ao clicar no ${btn.name} `, function () {
                cy.get(`${btn.button}`).click()
            })

            it(`espera-se que após o clique o ${btn.name} não esteja visivel`, function () {
                cy.get(`${btn.button}`).should('not.be.visible')
            })
        })

    })

    context("Quando clicar nos botões dentro do IFrame Buttons", function () {

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
    })

    context("dado o cenário solicitado", function () {

        before(function () {
            homePage.go()
        })  
        
        homePage.fillYourFirstNamefield()
        homePage.clickOneButton()
        homePage.checkOptionThree()
        homePage.selectBoxExampleTwo()
        homePage.confirmImage()    
    })

})