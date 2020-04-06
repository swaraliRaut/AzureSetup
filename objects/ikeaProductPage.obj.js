const utils = require("../utils/utils");
const ikeaSpecs = require("../specs/ikeaProductPage.specs");

module.exports = class ikeaPage {

    constructor() {
        const _fields = {
            amountInput: ikeaSpecs.productAmount
        };

        const _formButtons = {
            addToCart: ikeaSpecs.addToCart
        };

        const _productFrame = {
            cartIcon: ikeaSpecs.cartIcon,
            addedToCartIcon: ikeaSpecs.addedToCart,
        };

        this.getFields = function() {
            return _fields;
        };
        this.getFormButtons = function() {
            return _formButtons;
        };
        this.getFrame = function() {
            return _productFrame;
        };
    }

    getForm() {

        return {
            fields: this.getFields(),
            buttons: this.getFormButtons(),
        };
    }

    getPageFrame() {
        return {
            buttons: {
                iconFrames: this.getFrame()
            }
        };
    }

    //Navigate for Mobile
    async navigateMobile(ikeaURL) {
        await browser.waitForAngularEnabled(false);
        await browser.get(ikeaURL);
    }

    //Navigate for Desktop
    async navigateDesktop(ikeaURL) {
        await browser.waitForAngularEnabled(false);
        await browser.manage().window().maximize();
        await browser.get(ikeaURL);
    }

    //Fill qty from globalContent.json
    async fillFormWithUserData(amountQuantity) {
        const formFields = this.getForm().fields.amountInput;
        await formFields.clear();
        await utils.sendKeys(formFields, amountQuantity);
    }

    //Check if we can add to shopping cart
    async hasAddToShoppingCart() {
        const formButton = this.getForm().buttons.addToCart;
        await utils.elementToBeClickable(formButton);
        await utils.click(formButton);
    }

    //Check if the product has been added
    async hasAddedToBag() {
        const frameCartIcon = this.getPageFrame().buttons.iconFrames.cartIcon;
        const frameAddedToCart = this.getPageFrame().buttons.iconFrames.addedToCartIcon;
        await utils.presenceOf(frameCartIcon);
        await utils.elementToBeClickable(frameAddedToCart);
    }

};