import { response, Router } from "express";
import { request } from "http";


export const routes = Router();

routes.get('/', (request, response) => {
  return response.json({ message: 'Hello Dev' });
});
