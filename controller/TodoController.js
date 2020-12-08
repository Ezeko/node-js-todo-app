var data = [{item: 'get milk'}, {item: 'walk dog'}, {item: 'kick some coding ass'}]

const TodoController = (app) => {
    app.get('/', (req, res) => {
        return res.render('stuff')
    })
    app.get('/todo', (req, res) => {
        return res.render('todo', {todos: data})
    })
    app.post('/todo', (req, res) => {
        console.log(req.body)
        data.push(req.body)
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