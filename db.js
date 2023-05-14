function dbConnect() {
    // Db connection
const mongoose = require('mongoose')
const url = 'mongodb+srv://yashtripathicooll:kmgpcN7YNe6WebTx@cluster0.9l4f5rs.mongodb.net/realtime?retryWrites=true&w=majority'

mongoose.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: true
})

const connection = mongoose.connection
connection.once('open', function() {
    console.log('Database connected...')
}).catch(function(err){
    console.log('Connection failed...')
})
}

module.exports = dbConnect