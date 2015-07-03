module.exports = function(app){
	var projetoModel = app.models.projeto;
	var ObjectId = require('mongoose').Types.ObjectId; 

	var projetoController = {
		novo: function(req,res){
			var data = {
				title: "Novo Projeto"
			};
			res.render('projeto/form', data);
		},

		novoAction: function(req,res){
			var nome = req.body.projeto.nome;
			var data_inicio = req.body.projeto.data_inicio;
			var projeto = new projetoModel({nome: nome, data_inicio: data_inicio});

			projeto.save(function(err){ console.error(err); });

			var data = {
				title: "Novo Projeto",
				success: "Projeto gravado!"
			};

			res.render('projeto/form', data);
		},

		lista: function(req,res){
			projetoModel.find().exec(function(err, projetos){

				var data = {
					title: "Projetos",
					projetos: projetos
				};

				res.render('projeto/lista', data);
			});
		},

		getProjeto: function(req,res){
			projetoModel.find({_id: req.params.id}).exec(function(err,projeto){
				var data = {
					title: "Projeto " + projeto[0].nome,
					projeto: projeto[0]
				};

				res.render('projeto/projeto', data);
			});
		}
	}

	return projetoController;
}
