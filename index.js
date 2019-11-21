const express = require('express');
const cors = require('cors');
const morgan = require('morgan');

// app
require('dotenv').config();
const app = express();

// import routes
const sopRoutes = require('./routes/sop');

// middleware
if (process.env.NODE_ENV === 'development') {
  app.use(cors({ origin: `${process.env.CLIENT_URL}` }));
}
app.use(morgan('dev'));

// routes
app.use('/api', sopRoutes);

// port
const port = process.env.PORT || 8000;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
