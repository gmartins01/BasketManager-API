const express = require('express');
const errorHandler = require('./src/middleware/errorHandler');
const routes = require('./src/routes');

const app = express();

const PORT = 3000;

app.use(express.json());
app.use('/api',routes);
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}`);
});