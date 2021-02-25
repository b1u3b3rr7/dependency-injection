
const UsersRepository = require('./users-repository');
const UsersService = require('./users');
const sinon = require('sinon');
const assert = require('assert');
const { isMainThread } = require('worker_threads');

describe('Users service', () => {
    it('get users', async () => {
        const users = [{
            id: 1,
            firstname: 'Joe',
            lastname: 'Doe'
        }];

        sinon.stub(UsersRepository, 'findAll', () => {
            return Promise.resolve(users);
        });

        assert.deepEqual(await UsersService.getUsers(), users);
    })
});