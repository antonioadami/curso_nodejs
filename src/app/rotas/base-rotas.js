const BaseController = require('../controller/baseController')
const baseController = new BaseController()

module.exports = (app) => {

    const rotasBase = BaseController.rotas();

    app.get(rotasBase.home, baseController.home());

    app.route(rotasBase.login)
        .get(baseController.login())
        .post(baseController.efetuaLogin())
    
};