const PostMessage = require('../models/posts.model');
const mongoose = require('mongoose');

const getPosts = async (req, res) => {
  try {
    const postMessages = await PostMessage.find();

    res.status(200).json(postMessages)
  } catch (error) {
    res.status(404).json({ message: error.message })
  }
}

const createPost = async (req, res) => {
  const post = req.body;

  const newPost = new PostMessage(post);

  try {
    await newPost.save();

    res.status(201).json(newPost);
  } catch (error) {
    res.status(409).json({ message: error.message })
  }
}

const updatePost = async (req, res) => {
  const { id: _id } = req.params;
  const post = req.body

  if (!mongoose.Types.ObjectId.isValid(_id)) {
    return res.status(404).send('No Post with that ID!')
  }

  const updatedPost = await PostMessage.findByIdAndUpdate(_id, { ...post, _id }, { new: true });

  res.json(updatedPost);
}

const deletePost = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).send('No Post with that ID!')
  }

  await PostMessage.findByIdAndRemove(id)

  res.json({ message: 'Post Deleted!' })
}

module.exports = {
  getPosts,
  createPost,
  updatePost,
  deletePost,
}