const express = require('express');
const router = express.Router();

const ToDoController = require('../Controller/toDos.controller');

const todoController = new ToDoController();

//[GET]-------------------
router.get('/', todoController.getToDo)

//[GET] por ID ------------------
router.get('/:id', todoController.getToDoById)

//[POST]---------------
router.post('/add', todoController.createToDo)

//[PUT]----------------
router.put('/:id', todoController.editToDo)

//[DELETE]--------------
router.delete('/:id', todoController.deleteToDo)


module.exports = router;