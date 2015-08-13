module.exports = function(app){
	var usuarioModel = app.models.usuario;

	var usuarioController = {
		login: function(req, res){
			res.render('usuario/login');
		}
	}

	return usuarioController;
}