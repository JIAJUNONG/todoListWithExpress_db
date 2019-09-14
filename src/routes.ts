import {UserController} from "./controller/UserController";
import {TodoController} from "./controller/TodoController";

export const Routes = [{
    method: "get",
    route: "/users",
    controller: UserController,
    action: "all"
}, {
    method: "get",
    route: "/users/:id",
    controller: UserController,
    action: "one"
}, {
    method: "post",
    route: "/users",
    controller: UserController,
    action: "save"
}, {
    method: "delete",
    route: "/users/:id",
    controller: UserController,
    action: "remove"
}, 

// Todo Controller
// - Functions


// - Filter by category
// - Filter by completed/uncompleted
// - Filter by tasks today

// - Can delete todos -** done
// - Can add new todos -** done
// - Can show list of todos -** done
// - Can mark todo as completed -** done
// - Can update todo description, notes, categories -** done

//hardcoded
// - Filter by category -** done
// - Filter by completed/uncompleted  -** done
// - Filter by tasks today -** done


    {
    method: "get",
    route: "/todos",
    controller: TodoController,
    action: "all"
},{
    method: "get",
    route: "/todos/:id",
    controller: TodoController,
    action: "one"
}, {
    method: "post",
    route: "/todos",
    controller: TodoController,
    action: "save"
}, {
    method: "delete",
    route: "/todos/:id",
    controller: TodoController,
    action: "remove"
}, {
    method: "put",
    route: "/todos/:id",
    controller: TodoController,
    action: "markComplete"
}, {
    method: "post",
    route: "/todos/updatetodos/:id",
    controller: TodoController,
    action: "updateTodo"
}, {
    method: "get",
    route: "/getcategorypersonal",
    controller: TodoController,
    action: "filterCategoryPersonal"
}, {
    method: "get",
    route: "/getcategorywork",
    controller: TodoController,
    action: "filterCategoryWork"
}, {
    method: "get",
    route: "/getcategoryfamily",
    controller: TodoController,
    action: "filterCategoryFamily"
}


// http://localhost:3000/todos - ** list all (get)
// http://localhost:3000/todos/:id - ** list 1 (get)
// http://localhost:3000/todos - ** save 1 record (post)
// http://localhost:3000/todos/:id - ** remove 1 record (delete)
// http://localhost:3000/todos/:id - ** change complete to 1 record (put)
// http://localhost:3000/todos/updatetodos/:id - ** update description, notes, categories to 1 record (post)
// http://localhost:3000/getcategorypersonal - ** list all personal (get)
// http://localhost:3000/getcategorywork - ** list all work (get)
// http://localhost:3000/getcategoryfamily - ** list all family (get)





];