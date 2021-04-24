import request from 'supertest';
// import { Response } from 'express';
import app from '../app';

describe('API: Controller: Companies', () => {
  it('should return an array of companies with a snowflake score', async () => {
    const response = await request(app)
      .get('/companies');

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

    expect(response.body.result[0].score.sentence.length).toBeGreaterThan(0);
  });

  it('should return an array of companies with prices', async () => {
    const response = await request(app)
      .get('/companies?includePrices=true');

    expect(response.status).toEqual(200);
    expect(response.body.result.length).toBeGreaterThan(0);
    expect(response.body.result[0].closePrices.length).toBeGreaterThan(0);
  });

  it('should return an array of companies without prices', async () => {
    const response = await request(app)
      .get('/companies?includePrices=false');

    expect(response.status).toEqual(200);
    expect(response.body.result.length).toBeGreaterThan(0);
    expect(response.body.result[0].closePrices).toBeUndefined();
  });
});
