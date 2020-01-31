const db = require('./db')

const Post = db.sequelize.define('postagens', {
	titulo: {
		type: db.Sequelize.STRING
	},
	conteudo: {
		type: db.Sequelize.TEXT
	}
})

module.exports = Post

// Executado o camando apague ou comente para não recriar a tabela
//Post.sync({force: true})