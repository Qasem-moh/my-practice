'use sttrict';

const server = require('../server.js')
const supertest = require('supertest')
const request = supertest(server.app)
describe('API Server', () => {

    it('handles invalid request not found', async () => {
        const response = await request.get('/asd');
        expect(response.status).toEqual(404)
    })
    it('handles my internail server errors', async () => {
        const response = await request.post('/bad');
        expect(response.status).toEqual(500)
    })
    it('handles my internail server errors', async () => {
        const response = await request.get('/data');
        expect(response.status).toEqual(200)
        expect(typeof response.body).toEqual('object')
    })

    it('/route works', async () => {
        const response = await request.get('/')
        expect(response.text).toEqual("Hello in Home Page")
    })
})
