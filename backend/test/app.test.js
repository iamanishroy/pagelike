const { StatusCodes, ReasonPhrases } = require("http-status-codes");
const request = require('supertest');
const app = require('../index');


describe('Add a like', () => {
    it('POST /like --> should give error for Invalid User Agent', () => {
        return request(app)
            .post('/api/like')
            .set('validate-agent', true)
            .expect('Content-Type', /json/)
            .expect(StatusCodes.FORBIDDEN)
            .then(response => {
                expect(response.body).toEqual(
                    expect.objectContaining({
                        success: false,
                        error: ReasonPhrases.FORBIDDEN,
                        message: "Invalid User Agent",
                        code: "FORBIDDEN",
                    })
                );
            });
    });

    it('POST /like --> should add a like', () => {
        return request(app)
            .post('/api/like')
            .expect('Content-Type', /json/)
            .expect(StatusCodes.ACCEPTED)
            .then(response => {
                expect(response.body).toEqual(
                    expect.objectContaining({
                        success: true,
                        message: ReasonPhrases.ACCEPTED,
                        totalLike: expect.any(Number)
                    })
                );
            });
    }, 10000);

    it('GET /like --> should add a like', () => {
        return request(app)
            .get('/api/like')
            .expect('Content-Type', /json/)
            .expect(StatusCodes.OK)
            .then(response => {
                expect(response.body).toEqual(
                    expect.objectContaining({
                        success: true,
                        message: ReasonPhrases.OK,
                        totalLike: expect.any(Number)
                    })
                );
            });
    }, 10000);
})