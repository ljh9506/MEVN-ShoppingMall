const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const PORT = process.env.PORT || 3000;
const cors = require('cors');
const mongoose = require('mongoose');

const app = express();

mongoose.connect(
  'mongodb://localhost/shoppingmall',
  { useUnifiedTopology: true, useNewUrlParser: true },
  (err) => {
    if (err) {
      console.log('its  error');
    } else {
      console.log('mongoose connected !!');
    }
  },
);

//middlewares
app.use(cors());
app.use(morgan());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', (req, res) => {
  res.json('fuck you');
});

const productRoute = require('./routes/product.js');
const userRoute = require('./routes/auth.js');
const reviewRoute = require('./routes/review.js');

app.use('/api', productRoute);
app.use('/api', userRoute);
app.use('/api', reviewRoute);

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
  const path = require('path');
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

app.listen(PORT, (error) => {
  if (error) {
    console.log(error);
  } else {
    console.log('app listening on 3000 port');
  }
});
