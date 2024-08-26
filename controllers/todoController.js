const asyncHandler = require("express-async-handler")
const todoSchema = require("../model/Todo")


exports.createTodo = asyncHandler(async () => {
    res.json = ({message: "todo fetch success"})
})
exports.readTodo = asyncHandler(async () => {
    res.json = ({message: "todo add success"})
})
exports.updateTodo = asyncHandler(async () => {
    res.json = ({message: "todo update  success"})
})
exports.deleteTodo = asyncHandler(async () => {
    res.json = ({message: "todo delete success"})
})