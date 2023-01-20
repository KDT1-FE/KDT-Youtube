const express = require('express');
const cors = require('cors');
const fs = require('fs');

const app = express();
app.use(express.json());

const port = 4000;
app.use(
  cors({
    origin: 'http://localhost:5173',
    credentials: true,
  })
);

// use middleware to serve static images
app.use(express.static('public'));

// read data from file
const searchResult = fs.readFileSync('./searchResult.json', 'utf-8');
const channelInfo = fs.readFileSync('./channelInfo.json', 'utf-8');
const comment = fs.readFileSync('./comment.json', 'utf-8');
const videoInfo = fs.readFileSync('./videoInfo.json', 'utf-8');

const search = JSON.parse(searchResult);
const commentData = JSON.parse(comment);
const channel = JSON.parse(channelInfo);
const videoData = JSON.parse(videoInfo);

app.get('/search', (req, res) => {
  console.log('search\n', req.query);
  res.json(search);
});

app.get('/commentThreads', (req, res) => {
  console.log('commentThreads\n', req.query);
  res.json(commentData);
});

app.get('/channels', (req, res) => {
  console.log('channels\n', req.query);
  res.json(channel);
});

app.get('/videos', (req, res) => {
  console.log('videos\n', req.query);
  res.json(videoData);
});

let orderHistory = [];

if (require.main === module) {
  app.listen(port, () => console.log(`listening on port ${port}`));
}

module.exports = app;
