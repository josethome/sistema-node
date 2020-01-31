const Sequelize = require('sequelize')

// Conexão com banco de dados MySql
const sequelize = new Sequelize('sistema_node', 'root', '', {
	host: "localhost",
	dialect: 'mysql'
})

module.exports = {
	Sequelize: Sequelize,
	sequelize: sequelize
}