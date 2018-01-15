const post = require('./posts.js')
const comment = require('./comments.js')

module.exports.getPosts = post.getPosts
module.exports.addPost = post.addPost
module.exports.updatePost = post.updatePost
module.exports.removePost = post.removePost

module.exports.getComments = comment.getComments
module.exports.addComment = comment.addComment
module.exports.updateComment = comment.updateComment
module.exports.removeComment = comment.removeComment
