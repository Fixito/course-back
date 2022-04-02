const Post = require('../models/Post');

const getAllPosts = async (req, res) => {
  res.send('All Posts');
};

const getPost = async (req, res) => {
  res.send('Get Single Post');
};

const createPost = async (req, res) => {
  res.send('Create Post');
};

const updatePost = async (req, res) => {
  res.send('Update Post');
};

const deletePost = async (req, res) => {
  res.send('delete Post');
};

module.exports = { getAllPosts, getPost, createPost, updatePost, deletePost };
