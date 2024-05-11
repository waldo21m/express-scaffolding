import request from 'supertest';
import app, { startServer, stopServer } from '../index';
import { mockUsers } from '../controllers/userController';

describe('GET /users', () => {
  beforeAll((done) => {
    startServer(done);
  });

  afterAll((done) => {
    stopServer(done);
  });

  it('Find all users', async () => {
    const response = await request(app).get('/users');
    expect(response.status).toBe(200);
    expect(response.body).toEqual(mockUsers);
  });
});
