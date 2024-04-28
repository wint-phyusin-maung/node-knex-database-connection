const knex = require('knex');

module.exports = {
    async createUser(name, email) {
        return knex('users').insert({ name, email });
    }
}