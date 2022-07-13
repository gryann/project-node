import { Router } from "express";
import productsRouter from "@modules/products/routes/products";

const routes = Router();

routes.use('/products', productsRouter)

export default routes;
