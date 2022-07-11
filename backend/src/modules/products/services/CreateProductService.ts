import { getCustomRepository } from "typeorm";

import AppError from "@shared/errors/AppError";
import Product from "../typeorm/entities/Product";
import ProductRepository from "../typeorm/repositories/ProductsRepository";

interface IRequest {
  nome: string;
  preco: number;
  quantidade: number;
}

class CreateProductService {
  public async execute({nome, preco, quantidade}: IRequest): Promise<Product> {
    const productsRepository = getCustomRepository(ProductRepository);
    const productsExists = await productsRepository.findByName(nome);

    if (productsExists) {
      throw new AppError('Já existe um produto com este nome!');
    }
    const product = productsRepository.create({nome, preco, quantidade});

    await productsRepository.save(product);

    return product;
  }
}

export default CreateProductService;
