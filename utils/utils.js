const utils = function () {
    var EC = protractor.ExpectedConditions;

    this.presenceOf = function (params) {
        return browser.wait(EC.presenceOf(params));
    };

    this.elementToBeClickable = function (params) {
        return browser.wait(EC.elementToBeClickable(params));
    };

    this.sendKeys = function (params, userData) {
        return params.sendKeys(userData);
    };

    this.click = function (params) {
        return browser.executeScript("arguments[0].click();", params.getWebElement());
    };

    this.switch = function (params) {
        return browser.switchTo().frame(params.getWebElement());
    };

    this.switchDefault = function () {
        return browser.switchTo().defaultContent();
    };
};

module.exports = new utils();