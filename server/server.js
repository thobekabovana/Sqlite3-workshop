const express = require('express');
const cors = require('cors');
const morgan = require('morgan');

const app = express();

// app.use(course())

app.use(cors())

app.use(express.json())

app.use(morgan('tiny'))


app.get('/', function(req, res) {
    const book = {id:1, name: "thobeka", surname: "bovana"}
    // res.send('Hello World!')
    res.json(book)
})







app.listen(5000, () => {
    console.log('Server is running on port http://localhost:5000')
})