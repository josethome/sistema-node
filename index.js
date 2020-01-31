const express = require("express");
const app = express();
const handlebars = require("express-handlebars")
const Sequelize = require('sequelize')

// Config
	// Template Engine
		app.engine('handlebars', handlebars({defaultLayout: 'main'}))
		app.set('view engine', 'handlebars')

// Conexão com banco de dados MySql
const sequelize = new Sequelize('test', 'root', '', {
	host: "localhost",
	dialect: 'mysql'
})

// Rotas
app.get('/cadastro', function(req, res) {
	res.render('formulario')
})

app.post('/add', function(req, res) {
	res.send('FORMULÁRIO RECEBIDO!')
})

// Linha de código deve sempre estar na última para executar o servidor 
app.listen(8081, function() {
	console.log("Servidor executando na url http://localhost:8081");
});