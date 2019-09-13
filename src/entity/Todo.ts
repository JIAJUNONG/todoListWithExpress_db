import {Entity, PrimaryGeneratedColumn, Column, Timestamp} from "typeorm";
import "reflect-metadata"

@Entity()
export class Todo {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    description: string;

    @Column()
    completed: boolean;

    @Column()
    created_at: Date;

    @Column()
    completed_at: Date;

    @Column()
    notes: string;

    @Column()
    category: string;

    

}
