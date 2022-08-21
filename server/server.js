import express from 'express';
const app = express();

const PORT = process.env.PORT || 8000;

const comments = {
  'learn-react': {
    comments: []
  },
  'learn-node': {
    comments: []
  }
};

app.use(express.json({ extended: true }))

app.get('/', (req, res) => {
  res.send('Hello two forue!');
});

app.post('/', (req, res) => {
  console.log(req.body);
  res.send(`Heloo ther ${req.body.name}`);
});

app.get('/greet/:name', (req, res) => {
  res.send(`Hellot hre bori ${req.params.name}`);
});

app.post('/api/articles/addcomment/:name', (req, res) => {
  const { username, text } = req.body;
  const article = req.params.name;

  comments[article].comments.push({username, text});
  res.send(comments[article]);
});

app.listen(PORT, () => {
  console.log('Server started and listening on port ', PORT);
});
