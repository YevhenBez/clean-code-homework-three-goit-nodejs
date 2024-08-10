const mongoose = require("mongoose");

const app = require('./app')

const DB_HOST = "mongodb+srv://byxgalter:0nw6dB7YJSwvNLhJ@cluster0.fcpvedy.mongodb.net/contacts_reader_modified?retryWrites=true&w=majority&appName=Cluster0"

mongoose.set('strictQuery', true);

mongoose.connect(DB_HOST)
.then(() => {app.listen(3000, () => {
  console.log("Database connection successful")
})
})
  .catch(error => {
    console.log(error.message);
    process.exit(1);
  })


  