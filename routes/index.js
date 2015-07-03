module.exports = function(app){
	app.get('/', app.controllers.projeto.novo);
	app.get('/projetos/novo/', app.controllers.projeto.novo);
	app.post('/projetos/novo/', app.controllers.projeto.novoAction);
	app.get('/projetos/', app.controllers.projeto.lista);
	app.get('/projeto/:id/', app.controllers.projeto.getProjeto);
}