import request from 'supertest';
import app, { server } from './index';

describe('GET /', () => {
  afterAll(() => {
    server.close();
  });

  it('responde con ¡Hola mundo!', (done) => {
    request(app).get('/').expect(200, '¡Hola mundo!', done);
  });
});
