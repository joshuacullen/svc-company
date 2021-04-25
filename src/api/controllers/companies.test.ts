import request from 'supertest';
import app from '../app';

describe('API: Controller: Companies', () => {
  it('should return an array of companies with a snowflake score', async () => {
    const response = await request(app)
      .get('/api/companies');

    expect(response.status).toEqual(200);
    expect(response.body.status).toEqual(200);
    expect(response.body.result.length).toBeGreaterThan(0);

    const requiredScoreFields = [
      'dividend',
      'future',
      'health',
      'past',
      'value',
      'total',
    ];

    requiredScoreFields.forEach((field) => {
      expect(response.body.result[0].score[field]).toBeGreaterThanOrEqual(0);
    });

    expect(response.body.result[0].latestClosePrice.price).toEqual(expect.any(Number));
    expect(response.body.result[0].latestClosePrice.date.length).toBeGreaterThan(0);
    expect(response.body.result[0].score.sentence.length).toBeGreaterThan(0);
  });

  it('should return an error with invalid params', async () => {
    const response = await request(app)
      .get('/api/companies?page=asdf&includePrices=true');

    expect(response.status).toEqual(400);
    expect(response.body.errors.length).toBeGreaterThan(0);
  });

  it('should return an array of companies with prices', async () => {
    const response = await request(app)
      .get('/api/companies?includePrices=true');

    expect(response.status).toEqual(200);
    expect(response.body.result.length).toBeGreaterThan(0);
    expect(response.body.result[0].closePrices.length).toBeGreaterThan(0);
  });

  it('should return an array of companies without prices', async () => {
    const response = await request(app)
      .get('/api/companies?includePrices=false');

    expect(response.status).toEqual(200);
    expect(response.body.result.length).toBeGreaterThan(0);
    expect(response.body.result[0].closePrices).toBeUndefined();
  });
});
