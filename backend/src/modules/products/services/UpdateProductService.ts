import { getCustomRepository } from "typeorm";

import AppError from "@shared/errors/AppError";
import Product from "../typeorm/entities/Product";
import ProductRepository from "../typeorm/repositories/ProductsRepository";

interface IRequest {
  id: string;
  nome: string;
  preco: number;
  quantidade: number;
}

class UpdateProductService {
  public async execute({id, nome, preco, quantidade}: IRequest): Promise<Product> {
    const productsRepository = getCustomRepository(ProductRepository);

    const product = await productsRepository.findOne(id);

    if (!product) {
       throw new AppError('Este Produto não existe!')
    }

    const productsExists = await productsRepository.findByName(nome);

    if (productsExists && nome !== product.nome) {
      throw new AppError('Já existe um produto com este nome!');
    }

    product.nome = nome;
    product.preco = preco;
    product.quantidade = quantidade;

    await productsRepository.save(product);

    return product;
  }
}

export default UpdateProductService;
