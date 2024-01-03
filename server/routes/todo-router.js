import express from 'express'
import addTodo from '../controller/todo-controller/add-todo.js'
import deleteTodo from '../controller/todo-controller/delete-todo.js'
import getAllTodo from '../controller/todo-controller/get-all-todo.js'
import updateTodo from '../controller/todo-controller/update-todo.js'
import getTodo from '../controller/todo-controller/get-todo.js'

const todoRouter = express.Router()

todoRouter.route("/add-todo").post(addTodo)
todoRouter.route("/get-all-todo").get(getAllTodo)
todoRouter.route("/get-todo/:todoId").get(getTodo)
todoRouter.route("/update-todo/:todoId").patch(updateTodo)
todoRouter.route("/delete-todo/:todoId").delete(deleteTodo)


export default todoRouter 