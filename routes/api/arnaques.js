const arnaquecontroller = require("../../controllers/arnaque");

module.exports.setup = function (app) {
    app.post('/api/clients/inscription', arnaquecontroller.validate);

}