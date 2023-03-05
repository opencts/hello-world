import express from 'express';
import cors from 'cors';

const app = express();

app.use(cors());

app.get('/', (_, res) => {
  res.send('Hello world :)');
});

app.listen(8900, () => {
  console.log('Server is up...');
});
