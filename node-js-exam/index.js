const express = require('express')
const { v4: uuid } = require('uuid')
const bodyParser = require('body-parser')
const app = express()

app.use(bodyParser.json())

const port = 8080
app.disable('etag');

const todoListData = []

app.get('/todo-list', (req, res) => {
    res.status(200).json({
        status: 200,
        reason: 'success',
        data: todoListData
    })
})

app.get('/todo-list/:id', (req, res) => {
    const id = req.params.id
    const todo = todoListData.find(x => x.id == id)
    if(!todo) {
        res.status(404).json({
            status: 404,
            reason: 'Not found',
            data: null
        })

        return;
    }

    res.status(200).json({
        status: 200,
        reason: 'success',
        data: todo
    })
})

//body { "todo": "Your todo" }
app.post('/todo-list', (req, res) => {
    const todoReq = req.body
    const id = uuid()
    const newTodo = {
        id: id,
        todo: todoReq.todo,
        complete: false
    }
    todoListData.push(newTodo)
    res.status(200).json({
        status: 200,
        reason: 'success',
        data: { id }
    })
})

app.put('/todo-list/:id/complete', (req, res) => {
    const id = req.params.id
    const todo = todoListData.find(x => x.id == id)
    if(!todo) {
        res.status(404).json({
            status: 404,
            reason: 'Not found',
            data: null
        })

        return;
    }

    todo.complete = true;

    res.status(200).json({
        status: 200,
        reason: 'success',
        data: null
    })
})


app.delete('/todo-list/:id', (req, res) => {
    const id = req.params.id
    const todo = todoListData.find(x => x.id == id)
    if(!todo) {
        res.status(404).json({
            status: 404,
            reason: 'Not found',
            data: null
        })

        return;
    }

    todoListData.splice(todoListData.indexOf(todo), 1)
    res.status(200).json({
        status: 200,
        reason: 'success',
        data: null
    })
})

app.get('/', (req, res) => {
    res.redirect("/todo-list")
})


app.listen(port, () => {
    console.log(`App listening on port ${port}`)
})