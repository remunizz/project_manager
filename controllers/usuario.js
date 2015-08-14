module.exports = function(app){
	var usuarioModel = app.models.usuario;

	var usuarioController = {
		login: function(req, res){

			res.render('usuario/login');
		},

		loginAction: function(req, res){
			usuarioModel.findOne({email: req.body.usuario.email, senha: req.body.usuario.senha})
			.exec(function(err, usuario){
				if(usuario != null){
					req.session.email = usuario.email;
					res.redirect('/');
				}else{
					req.flash('danger', "E-mail de acesso ou senha inválidos");
					res.redirect('/login/');
				}
			});
		},

		logoutAction: function(req,res){
			req.session.destroy(function(){
				res.redirect('/login/');
			});

		}
	}

	return usuarioController;
}