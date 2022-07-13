import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateProducts1657138907253 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.createTable(new Table({
        name: 'produtos',
        columns: [
          {
            name: 'id',
            type: 'uuid',
            isPrimary: true,
            generationStrategy: "uuid",
            default: 'uuid_generate_v4()',
          },
          {
            name: 'nome',
            type: 'varchar'
          },
          {
            name: 'preco',
            type: 'decimal'
          },
          {
            name: 'quantidade',
            type: 'int'
          },
          {
            name: 'criado_em',
            type: 'timestamp',
            default: 'now()',
          },
          {
            name: 'alterado_em',
            type: 'timestamp',
            default: 'now()',
          }
        ]
      }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.dropTable('produtos')
    }

}
