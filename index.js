const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  const url = req.query.url;

  if (!url) {
    return res.status(400).send('la Url rome los parametros ');
  }

  fetch(url)
    .then(response => response.text())
    .then(data => {
      console.log(`Responiendo ${url}:`);
      console.log(data);
      res.send(`no se a podido conectar a : ${url}`);
    })
    .catch(error => {
      console.error(`Error detectado en :${url}:`, error);
      res.status(500).send('Error URL');
    });
});

app.listen(port, () => {
  console.log(`Escuhando ${port}`);
});
