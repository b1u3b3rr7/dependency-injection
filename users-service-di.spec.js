const UsersService = require('./users');
const assert = require('assert');
const { iteratee } = require('lodash');

describe('Users service', () => {
    it('gets users', async () => {
        const users = [{
            id: 1,
            firstname: 'Joe',
            lastname: 'Doe'
        }];

        const usersRepository = {
            findAll: async () => {
                return users
            }
        };

        const usersService = new UsersService(usersRepository);
        assert.deepEqual(await usersService.getUsers(), users);
    });
});