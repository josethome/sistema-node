const Sequelize = require('sequelize')
const sequelize = new Sequelize('test', 'root', '', {
	host: "localhost",
	dialect: 'mysql'
})

const Postagem = sequelize.define('postagens', {
	titulo: {
		type: Sequelize.STRING
	},
	conteudo: {
		type: Sequelize.TEXT
	}
})

// Postagem.create({
// 	titulo: "UM TITULO PARA POSTAGEM",
// 	conteudo: "WQEURPOEROERKREKERKREKRKERKEMEMMEMEMENEWENEWNENENFRNERNENEWNDSNDSNDSNN"
// })

const Usuario = sequelize.define('usuarios', {
	nome: {
		type: Sequelize.STRING
	},
	sobrenome: {
		type: Sequelize.STRING
	},
	data_nascimento: {
		type: Sequelize.DATE
	},
	email: {
		type: Sequelize.STRING
	}
})

Usuario.create({
	nome: "José",
	sobrenome: "Thomé",
	data_nascimento: "1998-01-21",
	email: "josethome.band@bol.com"
})

//Usuario.sync({force: true})
// Postagem.sync({force: true})
