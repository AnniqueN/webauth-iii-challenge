const knex = require('knex');
const knexConfig = require('../knexfile.js');

const db = knex(knexConfig.development)

module.exports = {
    find,
    findBy,
    findById,
    add
}

function find() {
    return db("users")
    
}

function findBy(body) {
    return db('users').where(body)
}

function findById(id){
return db('users')
.where({id})
.first()
}

function add(users) {
    return db('users')
        .insert(users)
        .then(ids => ({
            id: ids[0]
        }))
}