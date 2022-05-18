const cors = require('cors')
const express = require('express')
const app = express()
const port = 3000

app.use(cors())

app.get('/', (req, res) => {
  res.send('Mock server');
})

app.get('/GetNumbers', (req, res) => {
  res.send([{ Value: 1 }, { Value: 2 }]);
})

app.get('/GetStrings', (req, res) => {
  res.send(["a", "bb", "ccc"]);
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
})
