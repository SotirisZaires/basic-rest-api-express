const express = require('express')
const logger = require('morgan')
const bodyParser = require('body-parser')
const errorHandler = require('errorhandler')
const routes = require('./routes')

let store = {
    posts: [
      {name: 'Top 10 ES6 Features every Web Developer must know',
      url: 'https://webapplog.com/es6',
      text: 'This essay will give you a quick introduction to ES6. If you don’t know what is ES6, it’s a new JavaScript implementation.',
      comments: [
        {text: 'Cruel…..var { house, mouse} = No type optimization at all'},
        {text: 'I think you’re undervaluing the benefit of ‘let’ and ‘const’.'},
        {text: '(p1,p2)=>{ … } ,i understand this ,thank you !'}     
      ]
      }
    ]
  }

let app = express()
app.use(bodyParser.json())
app.use(logger('dev'))
app.use(errorHandler())
app.use((req,res, next) => {
    req.store = store
   next()
})

app.get('/posts', routes.getPosts)
app.post('/posts', routes.addPost)
app.put('/posts/:id', routes.updatePost)
app.delete('/posts/:id', routes.removePost)

app.get('/posts/:postId/comments', routes.getComments)
app.post('/posts/:postId/comments', routes.addComment)
app.put('/posts/:postId/comments/:commentId', routes.updateComment)
app.delete('/posts/:postId/comments/:commentId', routes.removeComment)

app.listen(3000)