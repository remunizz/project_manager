module.exports = function(app){
	var Schema = require('mongoose').Schema;

	var projetoSchema = Schema({
		nome: {type: String, required: true},
		// status: {type: String, required: true},
		data_inicio: {type: Date, required: true},
		// data_termino: {type: Date, required: false}
		tarefas: [
			{
				titulo: {type: String, required: true},
				descricao: {type: String}
			}
		]
	});

	return db.model('projetos', projetoSchema);
}