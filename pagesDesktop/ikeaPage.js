const userData = require("../globalContent.json");
const IkeaPage = require("../objects/ikeaProductPage.obj");


describe("Ikea product page", function () {

    ikeaPage = new IkeaPage();

    for (let [link, amount] of Object.entries(userData.ikeaURL)) {
        // The Ikea page is accessible by the specified URL
        it(`Is defined by the URL: ${link}`,
            async function() {
                await ikeaPage.navigateDesktop(`${link}`);
            });

        // Ikea page has a quantity label and it can be filled out with user data
        it("Has a label quantity that can receive user data",
            async function() {
                await ikeaPage.fillFormWithUserData(`${amount}`);
            });

        // Details page allows the user to add to cart
        it("Enables resolution of added to cart",
            async function() {
                await ikeaPage.hasAddToShoppingCart();
            });

        // Details page allows the user to proceed to the next stage when page has been resolved
        it("Allows the user to proceed to the next stage of add to cart",
            async function() {
                await ikeaPage.hasAddedToBag();
                await browser.sleep(1000);
            });
    }
});