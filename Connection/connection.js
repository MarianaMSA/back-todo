const mongoose = require("mongoose");

function Conn(url, user, pass, banco){
    mongoose.connect(`${url}/${banco}`, {
        user: user,
        pass: pass,
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }).then(()=>{
            console.log('MongoDB Connected');
    }).catch((err)=>{
            console.error('Erro ao conectar ao Mongo', err);
    });
}

module.exports = Conn; 
//////const mongoose = require('mongoose');

// const Conn = (url, user, pass, data) => {
//    mongoose.connect(`${url}/${data}`, {
//        user: user,
//        pass: pass,
//        useNewUrlParser: true,
//        useUnifiedTopology: true,
//    })
//    .then(() => console.log('MongoDB connected'))
//    .catch((err) => console.error('Error at mongo', err))
// }

// module.exports = Conn;