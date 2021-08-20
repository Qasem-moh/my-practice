'use sttrict';

const server=require('../server.js')
const supertest=require('supertest')
const request=supertest(server.app)
describe('API Server', () => {

    it('handles invalid request not found', () => {
        const response = request.get('/asd');
        expect(response.status).toEqual(404)
    })

    it('handles my internail server errors', () => {

    })

    it('get data from /data', () => {

    })
    it('/route works', () => {

    })
})
