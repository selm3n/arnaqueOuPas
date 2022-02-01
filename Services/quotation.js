const price = (vehicule) => {
    return 35000


}
exports.quotation = (vehicule) => new Promise((resolve, reject) => setTimeout(resolve, 50, price(vehicule)))
