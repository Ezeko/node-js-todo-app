const mongoose = require('mongoose')

mongoose.connect('mongodb+srv://ezeko:3UirrphQeYYL2hQ@cluster0.8etwp.mongodb.net/test?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true } )

modelSchema = mongoose.Schema({
    item: String
})

todo = mongoose.model('todo', modelSchema);

module.exports = todo