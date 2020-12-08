const Todo = require('../model/Todo')

var data = [{item: 'get milk'}, {item: 'walk dog'}, {item: 'kick some coding ass'}]

const TodoController = (app) => {
    app.get('/', (req, res) => {
        todo = Todo.find({}, (err, data) => {
            if (err) {
                throw err
            }
            return data
        })
        return res.json((todo))
    })
    app.get('/todo', (req, res) => {
        Todo.find({}, (err, data) => {
            if (err) {
                throw err
            }
            return res.render('todo', {todos: data})
        })

    })
    app.post('/todo', (req, res) => {
        console.log(req.body)
        data.push(req.body)
        Todo(req.body).save((err)=>{
            if(err){
                throw err
            }
            console.log('item saved')
        })
        return res.json(data)
    })

    app.delete('/todo/:item', (req, res)=>{
        // console.log(req.params)
        data = data.filter((todo) => {
            // console.log(req.params.item)
            // console.log(todo.item)
            // console.log(' '+todo.item !== req.params.item)
            return ' ' + todo.item !== req.params.item
        })
        // console.log(data)
        res.json(data)
    })
}

module.exports = TodoController