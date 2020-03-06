const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/heroes', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
})
.then(() => console.log('Mongoose is connected!'))
.catch(() => console.log('Mongoose is disconnected'));