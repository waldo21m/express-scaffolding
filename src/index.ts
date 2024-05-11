import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import morgan from 'morgan';
import helmet from 'helmet';
import router from './routes';
import http from 'http';

dotenv.config();

const app = express();
const port = process.env.PORT;

// Enable CORS.
app.use(
  cors({
    allowedHeaders: [
      'Origin',
      'X-Requested-With',
      'Content-Type',
      'Accept',
      'Accept-Language',
      'Authorization',
    ],
  }),
);

// JSON body parse.
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Protect the app with some middlewares.
app.use(helmet());

// Register HTTP requests.
app.use(morgan('dev'));

// Using the main router for handling requests.
app.use(router);

let server: http.Server;

export const startServer = (callback: () => void) => {
  server = app.listen(port, () => {
    console.log(`Servidor corriendo en http://localhost:${port}`);
    callback();
  });
};

export const stopServer = (callback: () => void) => {
  server.close(callback);
};

// Start the server when this module is run directly.
if (require.main === module) {
  startServer(() => {});
}

export default app;
