const express = require('express');
let bodyParser = require('body-parser');

const app = express();
const port = 3000;

app.use(bodyParser.json({ extended: false }));

app.get('/', (req, res) => res.send('Hello World!'));

app.get("/products", (req,res) => {
    const products = [
    {
      id: 1,
      name: "hammer",
    },
    {
      id: 2,
      name: "screwdriver",
    },
    ,
    {
      id: 3,
      name: "wrench",
    },
   ];
  
   res.json(products);
  });

  app.get('/products/:id', (req, res) => {
    // handle this request `req.params.id`
  })

  app.post('/<path>', (req, res) => {
    console.log('req.body', req.body) // contains incoming data
  })

  app.listen(port, () => console.log(`Example app listening on port ${port}!`));
