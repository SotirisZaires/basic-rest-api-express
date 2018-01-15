
  module.exports = {
    getPosts(req, res) {
            //if query specific post - returns only that one
            if (req.query.id) return res.status(200).send(req.store.posts[req.query.id])
            res.status(200).send(req.store.posts)
    },
    addPost(req, res) {
            // input validation check like module examples
            if (!req.body.name || !req.body.url || !req.body.text) return res.sendStatus(400)

            let newPost = {
                name: req.body.name,
                url: req.body.url,
                text: req.body.text,
                comments: []
            }

            let postId = req.store.posts.length
            req.store.posts.push(newPost)
            res.status(201).send({postId: postId})
    },
    updatePost(req, res) {
            
            let updatedPost = {
                name: req.body.name,
                url: req.body.url,
                text: req.body.text
            }

            let postId = req.params.id
            req.store.posts[postId] = Object.assign(req.store.posts[postId] , updatedPost)
            res.status(200).send(req.store.posts[postId])
    },
    removePost(req, res) {
            let postId = req.params.id
            req.store.posts.splice(postId, 1)
            res.status(200).send()
    }
  }