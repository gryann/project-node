import { getCustomRepository } from "typeorm";

import AppError from "@shared/errors/AppError";
import Product from "../typeorm/entities/Product";
import ProductRepository from "../typeorm/repositories/ProductsRepository";

interface IRequest {
  id: string;
}

class ShowProductService {
  public async execute({id}: IRequest): Promise<Product> {
    const productsRepository = getCustomRepository(ProductRepository);

    const product = await productsRepository.findOne(id);

    if (!product) {
       throw new AppError('Este Produto não existe!')
    }
    return product;
  }
}

export default ShowProductService;
