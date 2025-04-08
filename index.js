const express = require('express');
const app = express();
const PORT = process.env.PORT || 8080;

app.get('/', (req, res) => {
  res.send('Hi, this is Avanti!');
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});