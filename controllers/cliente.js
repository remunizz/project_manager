module.exports = function(app){
	var clienteModel = app.models.cliente;
	var ObjectId = require('mongoose').Types.ObjectId;

	var clienteController = {
		get: function(req, res){
			if(typeof(req.params.id) != "undefined"){

				clienteModel.find({_id: req.params.id}).exec(function(err,cliente){
					var data = {
						title: "Cliente " + cliente[0].nome,
						cliente: cliente[0]
					};

					res.render('cliente/form', data);
				});
			}else{
				var data = {
					title: "Novo Cliente",
					cliente: {nome: '', data_inicio: ''}
				};

				res.render('cliente/form', data);
			}
		},
		getAll: function(req, res){
			clienteModel.find().exec(function(err, clientes){

				var data = {
					title: "Clientes",
					clientes: clientes
				};

				res.render('cliente/lista', data);
			});
		},
		create: function(req, res){
			var cliente = new clienteModel(req.body.cliente);
			cliente.save(function(err){ console.error(err); });

			req.flash('success', "Cliente criado com sucesso!");
			res.redirect('/clientes/');
		},
		update: function(req, res){
			if(typeof(req.params.id) != "undefined"){
				clienteModel.findByIdAndUpdate(req.params.id, req.body.cliente, function(err, cliente){
					if(err) throw err;

					req.flash('success', "Cliente alterado com sucesso!");
					res.redirect('/clientes/');
				});
			}
		},
		delete: function(req, res){
			if(typeof(req.params.id) != "undefined"){
				clienteModel.remove({_id: req.params.id}, function(err){
					if(err) throw err;
					
					req.flash('success', "Cliente excluído com sucesso!");
					res.redirect('/clientes/');
				});
			}
		}
	}

	return clienteController
}