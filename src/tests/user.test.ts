import request from 'supertest';
import dotenv from 'dotenv';
import app, { startServer, stopServer } from '../index';
import { mockUsers } from '../controllers/userController';

dotenv.config();

const prefix = `${process.env.APP_URI}${process.env.APP_VERSION}`

describe('User router /users', () => {
  beforeAll((done) => {
    startServer(done);
  });

  afterAll((done) => {
    stopServer(done);
  });

  it('GET / Find all users', async () => {
    const response = await request(app).get(prefix + '/users');
    expect(response.status).toBe(200);
    expect(response.body).toEqual(mockUsers);
  });

  it('POST / Create a new user', async () => {
    const response = await request(app).post(prefix + '/users').send(mockUsers);
    expect(response.status).toBe(200);
    expect(response.body).toEqual(mockUsers);
  });
});
