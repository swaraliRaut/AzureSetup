module.exports = {
    productAmount: element(by.id("amount")),
    addToCart: element(by.className("range-btn range-btn--transactional range-leading-icon fill js-purchase-add-to-cart ")),
    cartIcon: element(by.className("range-btn range-btn--filled fill range-leading-icon ")),
    addedToCart: element.all(by.xpath("//*[contains(., 'View your shopping cart')]")).first()
}