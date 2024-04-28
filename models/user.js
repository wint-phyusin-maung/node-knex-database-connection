const knex = require('knex');
const knexConfig = require('../knexfile');

const environment = process.env.NODE_ENV || 'development';
const config = knexConfig[environment];

const db = knex(config);

module.exports = {
    createUser: async (name, email) => {
        try {
            const result = await db('users').insert({ name, email });
            return result;
        } catch (error) {
            throw error;
        }
    },

    getAllUsers: async () => {
        try {
            const users = await db('users').select('*');
            return users;
        } catch (error) {
            throw error;
        }
    }


};