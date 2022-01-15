const express = require("express");
const Blog = require("./blog");
const mongoose = require('mongoose')
const app = express();
const fs = require('fs')
const path = require('path')
const multer = require('multer')




const DBURI = 'mongodb+srv://admin:admin@cluster0.gkmmv.mongodb.net/DB1?retryWrites=true&w=majority'
mongoose.connect(DBURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(result => {console.log('connected to db')})
  .catch(err => console.log(err))

app.use(express.urlencoded({ extended: true }));



app.get('/store', (req, res) => {
  Blog.find()
    .then(result => { res.send(result) })
    .catch(err => { console.log(err) })
})
app.get('/store/:id', (req, res) => {

  const id=req.params.id;
  Blog.findById(id)
    .then(result => { res.send(result)})
    .catch(err => { console.log(err) })
})


app.delete('/store/:id' , (req, res) => {
  const id=req.params.id;
  Blog.findByIdAndDelete(id)
    .then(result => console.log('done deleting'))
    .catch(err => { console.log(err) })
  res.redirect('/store')
  
})


app.post('/editstore', (req, res) => {
  console.log(req.body)
  const blog = new Blog(req.body)
  blog.save()
    .then(result => { console.log('done posting') })
    .catch(err => { console.log(err) })
})

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
  app.get('*', (req, res)=>{
    res.sendFile(path.resolve(__dirname,'client','build','index.html'))
  })
}
const PORT = process.env.PORT || 3001;
app.listen(PORT)
