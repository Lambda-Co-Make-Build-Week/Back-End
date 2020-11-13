const server = require('../api/server')
const request = require('supertest')
const User = require('../users/users-model')


describe('[POST] /api/auth/register', () => {
    it('registering a new user', async () => {
        request(server)
            .post('/api/auth/register', {username: 'will', password: 'password' })
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
        const user = await User.find()
        await expect(user).toHaveLength(1)
    });
});