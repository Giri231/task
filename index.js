const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());

const postSchema = new mongoose.Schema({
  title: String,
  content: String
});

const Post = mongoose.model('Post', postSchema);

mongoose.connect('mongodb://localhost:27017/myapp', { useNewUrlParser: true });

app.get('/posts', async (req, res) => {
  const posts = await Post.find();
  res.json(posts);
});

app.post('/posts', async (req, res) => {
  const post = new Post(req.body);
  await post.save();
  res.json(post);
});

app.put('/posts/:id', async (req, res) => {
  const post = await Post.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(post);
});

app.delete('/posts/:id', async (req, res) => {
  const post = await Post.findByIdAndRemove(req.params.id);
  res.json(post);
});

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});