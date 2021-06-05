const express = require('express');
let bodyParser = require('body-parser');

const app = express();
const port = 3000;

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    bodyParser.json({ extended: false });
    next();
  });
  
app.get('/', (req, res) => res.send('Hello World!'));

app.get("/histogram", (req,res) => {

    var x = [];

    for (var i = 0; i < 500; i++) {
        x[i] = Math.random();
    }

    var trace = {
        x: x,
        type: 'histogram',
    };

   res.json([trace]);

  });

  app.get('/products/:id', (req, res) => {
    // handle this request `req.params.id`
  })

//   app.post('/<path>', (req, res) => {
//     console.log('req.body', req.body) // contains incoming data
//   })

//   app.put('/products', function(req, res) {
//     let updatedProduct;
//     products = products.map(p => {
//       if (p.id === req.body.id) {
//         updatedProduct = { ...p, ...req.body };
//         return updatedProduct;
//       }
//       return p;
//     })
//     res.json(updatedProduct);
//   });

  app.listen(port, () => console.log(`Example app listening on port ${port}!`));
