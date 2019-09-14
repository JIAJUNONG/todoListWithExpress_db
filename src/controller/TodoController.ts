import {getRepository} from "typeorm";
import {getConnection} from "typeorm";
import {NextFunction, Request, Response} from "express";
import {Todo} from "../entity/Todo";
import { parse } from "path";

export class TodoController {

    private todoRepository = getRepository(Todo);

    async all(request: Request, response: Response, next: NextFunction) {
        return this.todoRepository.find();
    }

    async one(request: Request, response: Response, next: NextFunction) {
        return this.todoRepository.findOne(request.params.id);
    }

    async save(request: Request, response: Response, next: NextFunction) {
        return this.todoRepository.save({
            description: request.body.description,
            completed: false,
            created_at: new Date(),
            completed_at: new Date("1900-01-01"),
            notes: request.body.notes,
            category: request.body.category,
        });
    }

    async markComplete(request: Request, response: Response, next: NextFunction) {
        let getRecord = await this.todoRepository.findOne(request.params.id);

            if (getRecord.completed === false){
                await getConnection()
                .createQueryBuilder()
                .update(Todo).set({completed: true, completed_at: new Date()})
                .where("id = :id and completed = :completed", {id: getRecord.id , completed: getRecord.completed})
                .execute();  
                response.send("Selected Todo list marked as Completed");
                //response.send(markTodo);
            } else {
            response.send("Selected Todo list is already in Completed status"); 
            }
    }

    async updateTodo(request: Request, response: Response, next: NextFunction) {
        let markTodo = await this.todoRepository.findOne(request.params.id);
            markTodo.description = request.body.description;
            markTodo.notes = request.body.notes;
            markTodo.category = request.body.category;
            response.send(markTodo);
            return this.todoRepository.save(markTodo);
            
    }

    async filterCategoryPersonal(request: Request, response: Response, next: NextFunction) {
        let markTodo = await this.todoRepository.find({category: "Personal"});
        response.send(markTodo);
    }

    async filterCategoryWork(request: Request, response: Response, next: NextFunction) {
        let markTodo = await this.todoRepository.find({category: "Work"});
        response.send(markTodo);
    }

    async filterCategoryFamily(request: Request, response: Response, next: NextFunction) {
        let markTodo = await this.todoRepository.find({category: "Family"});
        response.send(markTodo);
    }
    

    async remove(request: Request, response: Response, next: NextFunction) {
        let removeTodo = await this.todoRepository.findOne(request.params.id);
        await this.todoRepository.remove(removeTodo);
        response.send("Deleted successfully")
    }

}