module.exports = function(app){
	var projetoModel = app.models.projeto;
	var ObjectId = require('mongoose').Types.ObjectId;
	var moment = require("moment");

	var projetoController = {
		create: function(req,res){
			var projeto = new projetoModel(req.body.projeto);
			projeto.save(function(err){ console.error(err); });

			//req.flash('success', "Projeto gravado");
			res.send('/projetos/');
		},

		delete: function(req,res,next){
			if(typeof(req.params.id) != "undefined"){
				projetoModel.remove({_id: req.params.id}, function(err){
					if(err) throw err;
					next();
				});
			}
		},

		getAll: function(req,res){
			projetoModel.find().exec(function(err, projetos){

				var data = {
					title: "Projetos",
					projetos: projetos,
					moment: moment
				};

				res.render('projeto/lista', data);
			});
		},

		get: function(req,res){
			if(typeof(req.params.id) != "undefined"){

				projetoModel.find({_id: req.params.id}).exec(function(err,projeto){
					var data = {
						title: "Projeto " + projeto[0].nome,
						projeto: projeto[0],
						moment: moment
					};

					res.render('projeto/form', data);
				});
			}else{
				var data = {
					title: "Novo Projeto",
					projeto: {nome: '', data_inicio: ''},
					moment: moment
				};

				res.render('projeto/form', data);
			}
		},

		update: function(req,res,next){
			if(typeof(req.params.id) != "undefined"){
				projetoModel.findByIdAndUpdate(req.params.id, req.body.projeto, function(err, projeto){
					if(err) throw err;
					next();
				});
			}
		}
	}

	return projetoController;
}
