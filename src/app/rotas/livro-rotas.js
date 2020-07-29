const LivroController = require('../controller/livroController')
const livroController = new LivroController()

const Livro = require('../models/livro');
const BaseController = require('../controller/baseController');

module.exports = (app) => {

    const rotasLivro = LivroController.rotas();
    const livroValidacoes = Livro.validacoes();
    
    app.use(rotasLivro.autenticadas, function(req, res, next) {
        if(req.isAuthenticated())
            next();
        else res.redirect(BaseController.rotas().login)
    });

    
    app.get(rotasLivro.lista, livroController.lista());

    app.route(rotasLivro.cadastro)
        .get(livroController.formulario())
        .post(livroValidacoes, livroController.enviaLivro())
        .put(livroController.editaLivro());

    app.get(rotasLivro.edicao, livroController.formBuscaPorId());


    app.delete(rotasLivro.delecao, livroController.deletarLivro());
};