const Users = require('./users-model')
const db = require('../database/db-config')


beforeEach(async () => {
    await db("users").truncate();
  });
  
  
describe('sanity test', () => {
    it('can add two numbers', () => {
        expect(2 + 2).toEqual(4)
    })
})

describe('can add a new user', () => {
    it('gets an empty array', async () => {
        const users = await Users.find()
        expect(users).toHaveLength(0)
    })
    it('gets all the users', async () => {
        await Users.add({ username:"mike", password: "password" })
        let users = await db('users')
        expect(users).toHaveLength(1)
    })
})