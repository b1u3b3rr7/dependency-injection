const User = require('./User');

function UsersService(usersRepository) {
    async function getUsers() {
        return usersRepository.findAll();
    }

    async function addUser(userData) {
        const user = new User(userData);

        return usersRepository.addUser(user);
    }

    return {
        getUsers,
        addUser
    }
}

module.exports = UsersService;