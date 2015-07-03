module.exports = function(app){
	var Schema = require('mongoose').Schema;

	var projetoSchema = Schema({
		nome: {type: String, required: true},
		data_inicio: {type: Date, required: true}
	});

	return db.model('projetos', projetoSchema);
}