/// <reference types="cypress"/>
import homePage from '../pages/HomePage'
import loc from '../support/locators'

describe("Dado a home da página", function () {

    before(function () {
        homePage.go()
    })

    context("Quando clicar nos botões", function () {
        homePage.clickButtons()
    })

    context("Quando clicar nos botões dentro do IFrame Buttons", function () {
        homePage.clickIframeButtons()
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