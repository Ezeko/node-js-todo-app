const Todo = require('../model/Todo')

var data = [{item: 'get milk'}, {item: 'walk dog'}, {item: 'kick some coding ass'}]

const TodoController = (app) => {
    app.get('/', (req, res) => {
        res.render('stuff')
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
        // console.log(req.body)
        // data.push(req.body)
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
        // data = data.filter((todo) => {
        // console.log(req.params)
        //     // console.log(todo.item)
        //     // console.log(' '+todo.item !== req.params.item)
        //     return ' ' + todo.item !== req.params.item
        // })
        Todo.deleteOne(req.params, (err, data) => {
            if (err) throw err;
            console.log('item deleted')
            res.json(data)
        })
        // console.log(req.params)
        
    })
}

module.exports = TodoController