
const Post = require('../models/postSchema');
exports.createPost = async (req, res, next) => {
    try {
        const { title, image, description } = req.body;
        const newPost = new Post({ title, image, description, user: req.user._id });
        await newPost.save();
        await req.user.posts.push(newPost._id);
        await req.user.save();
        res.redirect('/profile')
    } catch (error) {
        console.log(error.message);
    }
} 