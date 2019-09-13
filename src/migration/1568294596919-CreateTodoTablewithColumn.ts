import {MigrationInterface, QueryRunner} from "typeorm";

export class CreateTodoTablewithColumn1568294596919 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`CREATE TABLE "todo" ("id" SERIAL NOT NULL, "description" character varying NOT NULL, "completed" boolean NOT NULL, "created_at" TIMESTAMP NOT NULL, "completed_at" TIMESTAMP NOT NULL, "notes" character varying NOT NULL, "category" character varying NOT NULL, CONSTRAINT "PK_d429b7114371f6a35c5cb4776a7" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`DROP TABLE "todo"`);
    }

}
