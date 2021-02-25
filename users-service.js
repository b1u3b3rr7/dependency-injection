const User = require('./User');
const UsersRepository = require('./users-repository');

async function getUsers() {
    return UsersRepository.findAll();
}

async function addUser(userData) {
    const user = new User(userData);

    return UsersRepository.addUser(user);
}

module.exports = {
    getUsers,
    addUser
}
