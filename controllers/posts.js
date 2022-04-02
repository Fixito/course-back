const Post = require('../models/Post');
const { StatusCodes } = require('http-status-codes');

const getAllPosts = async (req, res) => {
  res.send('All Posts');
};

const getPost = async (req, res) => {
  res.send('Get Single Post');
};

const createPost = async (req, res) => {
  req.body.createdBy = req.user.userID;
  console.log(req.body);
  const post = await Post.create(req.body);
  res.status(StatusCodes.CREATED).json({ post });
};

const updatePost = async (req, res) => {
  res.send('Update Post');
};

const deletePost = async (req, res) => {
  res.send('delete Post');
};

module.exports = { getAllPosts, getPost, createPost, updatePost, deletePost };
