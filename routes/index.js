module.exports = function(app){

	app.get('/', app.controllers.projeto.getAll);

	app.get('/projetos/', 		app.controllers.projeto.getAll);
	app.get('/projeto/', 		app.controllers.projeto.get);
	app.get('/projeto/:id/', 	app.controllers.projeto.get);
	app.post('/projeto/', 		app.controllers.projeto.create);
	app.put('/projeto/:id/', 	app.controllers.projeto.update);
	app.delete('/projeto/:id/', app.controllers.projeto.delete);

	app.get('/login/', 		app.controllers.usuario.login);
}