const swaggerUi = require('swagger-ui-express');
const swaggerJSDoc = require('swagger-jsdoc');
const express = require('express');
const errorHandler = require('./middleware/errorHandler');
const routes = require('./routes');

const app = express();

const PORT = 3000;

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Basket Management API",
      version: "1.0.0"
    },
  },
  apis: ["./src/routes*.js"]
}

const specs = swaggerJSDoc(options);

app.use(express.json());
app.use('/api', routes);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}`);
});