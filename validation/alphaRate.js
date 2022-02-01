const isEmpty = require('./is-empty');

module.exports = function validateAlphaRate(data) {
    let alphaNumericErrors = [];

    chars = data.split('@')[0].split('');
    alphanums = 0;
    nums = 0;
    for (let i = 0; i < chars.length; i++) {
        if (/^[a-zA-Z0-9 èàùìòÈÀÒÙÌéáúíóÉÁÚÍÓëäüïöËÄÜÏÖêâûîôÊÂÛÎÔç'-]*$/.test(chars[i])) {
            alphanums++;
        }
        if (/^[0-9'-]*$/.test(chars[i])) {
            nums++;
        }

    }


    if ((100 * alphanums) / data.split('@')[0].length < 70 || chars.length == 0) {
        alphaNumericErrors.push('rule::alpha_rate');
    }
    if ((100 * nums) / data.split('@')[0].length > 30 || chars.length == 0) {
        alphaNumericErrors.push('rule::number_rate');
    }


    return {
        alphaNumericErrors,
        isAlphaNumericValid: isEmpty(alphaNumericErrors)
    };



}