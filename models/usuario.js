module.exports = function(app){
	var Schema = require('mongoose').Schema;

	var usuarioSchema = Schema({
		nome: {type: String, required: true},
		email: {type: String, required: true},
		senha: {type: String, required: true},
	});

	return db.model('usuarios', usuarioSchema);

}