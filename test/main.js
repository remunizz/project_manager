var app = require("../app");
var request = require('supertest')(app);

describe("CRUD de projetos", function(){
	
	it("Acessando form de novo projeto", function(done){
		request.get('/projeto/').expect('Content-Type', 'text/html; charset=utf-8').expect(200).end(function(err,res){
			if(err) throw(err);

			done();
		});
	});

	it("Criando projeto", function(done){
		var mock_projeto = {projeto: {'nome': 'Projeto 01', 'data_inicio': '01/07/2015'}};
		request.post('/projeto/').send(mock_projeto).expect(200, done);
	});

	it("Alterando projeto", function(done){
		var mock_projeto = {projeto: {'nome': 'Projeto 01 [ATUALIZADO]', 'data_inicio': '31/07/2015'}};
		request.put('/projeto/').send(mock_projeto).expect(200, done);
	});

	it("Excluindo projeto", function(done){
		var mock_projeto = {projeto: {'nome': 'Projeto 01 [ATUALIZADO]', 'data_inicio': '01/07/2015'}};
		request.delete('/projeto/').send(mock_projeto).expect(200, done);
	});

});