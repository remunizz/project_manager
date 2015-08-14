module.exports = function(app){
	var Schema = require('mongoose').Schema;

	var clienteSchema = Schema({
		nome: String,
		endereco: {
			rua: String,
			numero: String,
			cep: String
		},
		telefone: [{
			ddd: String,
			numero: String
		}]
	});

	return db.model('clientes', clienteSchema);
}