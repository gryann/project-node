import { getCustomRepository } from "typeorm";

import AppError from "@shared/errors/AppError";
import ProductRepository from "../typeorm/repositories/ProductsRepository";

interface IRequest {
  id: string;
}

class DeleteProductService {
  public async execute({id}: IRequest): Promise<void> {
    const productsRepository = getCustomRepository(ProductRepository);

    const product = await productsRepository.findOne(id);

    if (!product) {
       throw new AppError('Este Produto não existe!')
    }
    await productsRepository.remove(product);
  }
}

export default DeleteProductService;
