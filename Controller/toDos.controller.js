const mongoose = require('mongoose');

const ToDoServices = require('../Services/toDos.service');

const toDoServices = new ToDoServices();

class ToDoController {

    getToDo = async (req, res) => {
        const todo = await toDoServices.findAll();
        res.send(todo)
    }

    getToDoById = async (req, res) => {
        const id = req.params.id

        
        //Aqui temos um tratamento de erro para verificar se o id é valido ou não
        if(!mongoose.Types.ObjectId.isValid(id)){
            res.status(403).send('ID inválido!')
            return
        }
        
        const todo = await toDoServices.findById(id)

        //Tratamento para a verificação da existencia, ou não, do ToDo existe no banco
        if(!todo){
            res.status(404).send('ToDo não encontrado!!')
            return
        }

        //Se nenhum erro ocorrer manda um status 200 de OK
        res.status(200).send(todo)
    }

    createToDo = async (req, res) => {
        const todo = req.body;
        const todoSalvo = await toDoServices.createToDo(todo)
        .then(()=>{
            res.send({ message: `vaga criada com sucesso` });
        })
        .catch((err) => res.status(500).send({error: `erro no servidor: ${err}`}))
        
    }

    editToDo = async (req, res) => {
        const id = req. params.id;
        const todo = req.body;
        await toDoServices.editToDo(id, todo)
        .then(()=>{
            res.status(200).send({ message: 'ToDo atualizado com Sucesso!!'})
        }).catch((err) => res.status(500).send({ error: `Erro no servidor ${err}` }))
    }

    deleteToDo = async (req, res) => {
        const id = req.params.id;
        await toDoServices.deleteToDo(id)
        .then(()=> res.status(200).send({ message: 'Tarefa excluida com sucesso!!'}))
    }

}


module.exports = ToDoController;