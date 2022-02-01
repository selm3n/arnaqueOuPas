
const isEmpty = require('./is-empty');
const { isBlackListed } = require('../Services/isBlackListed')

module.exports = async function validateBlackListed(data) {
    let blackListedErrors = [];


    const isBlackListe = await isBlackListed(data)


    if (isBlackListe) {
        blackListedErrors.push('rule::registernumber::blackList');
    }



    return {
        blackListedErrors,
        isblackListedValid: isEmpty(blackListedErrors)
    };



}