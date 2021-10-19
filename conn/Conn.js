const mongoose = require("mongoose");

const Conn = () => {
   mongoose
      .connect("mongodb://localhost:27017/todolist", {
         useNewUrlParser: true,
         useUnifiedTopology: true,
      })
      .then(() => console.log("MongoDb Connected"))
      .catch((err) => console.log("Falha na conexão com Mongo DB", err));
};

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