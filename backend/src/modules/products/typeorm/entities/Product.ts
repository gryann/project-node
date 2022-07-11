import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity('produtos')
class Product {
  @PrimaryGeneratedColumn('uuid')
  id: string;
  @Column()
  nome: string;
  @Column('decimal')
  preco: number;
  @Column('int')
  quantidade: number;
  @CreateDateColumn()
  criado_em: Date;
  @UpdateDateColumn()
  alterado_em: Date;
}

export default Product;
