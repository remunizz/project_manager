module.exports = function(app){

	app.all('/*', verificaLogin, function(req,res,next){
		next();
	});

	app.get('/', app.controllers.projeto.getAll);

	app.get('/projetos/', 		app.controllers.projeto.getAll);
	app.get('/projeto/', 		app.controllers.projeto.get);
	app.get('/projeto/:id/', 	app.controllers.projeto.get);
	app.post('/projeto/', 		app.controllers.projeto.create);
	app.put('/projeto/:id/', 	app.controllers.projeto.update);
	app.delete('/projeto/:id/', app.controllers.projeto.delete);
	
	app.get('/projeto/:id/tarefas/',app.controllers.terafa.getAll);
	
	app.get('/clientes/', 		app.controllers.cliente.getAll);
	app.get('/cliente/', 		app.controllers.cliente.get);
	app.get('/cliente/:id/', 	app.controllers.cliente.get);
	app.post('/cliente/', 		app.controllers.cliente.create);
	app.put('/cliente/:id/', 	app.controllers.cliente.update);
	app.delete('/cliente/:id/', app.controllers.cliente.delete);

	app.get('/login/', 	app.controllers.usuario.login);
	app.post('/login/', app.controllers.usuario.loginAction);
	app.get('/logout/', app.controllers.usuario.logoutAction);
}

function verificaLogin(req,res,next){
	if(req.session.email || req.url == '/login/'){
		next();
	}else{
		res.redirect("/login/");
	}
	
}