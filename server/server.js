import express from 'express';

const app = express();

const PORT = process.env.PORT || 8000;

app.use(express.json({ extended: true }))

app.get('/', (req, res) => {
  res.send('Hello two forue!');
});

app.post('/', (req, res) => {
  console.log(req.body);
  res.send(`Heloo ther ${req.body.name}`);
});

app.listen(PORT, () => {
  console.log('Server started and listening on port ', PORT);
});
