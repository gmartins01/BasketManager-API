const express = require('express');
const router = express.Router();
const controller = require('./controller')

/**
 * @swagger
 * components:
 *  schemas:
 *    Basket:
 *      type: object
 *      required:
 *        - id
 *        - cesto
 *        - pais
 *        - quantidade
 *        - condicao_pagamento
 *      properties:
 *        id:
 *          type: int
 *          description: Basket id
 *        cesto:
 *          type: string
 *          description: The basket
 *        pais:
 *          type: string
 *          description: The country
 *        quantidade:
 *          type: int
 *          description: The quantity
 *        condicao_pagamento:
 *          type: string
 *          description: The payment condition
 *      example:
 *        id: 179
 *        cesto: 01H
 *        pais: MOC
 *        quantidade: 2
 *        condicao_pagamento: 90
 */

/**
 * @swagger
 * tags:
 *  name: Baskets
 *  description: The baskets managing api
 */


/**
 * @swagger
 * /api:
 *   get:
 *     summary: Returns status code 200
 *     tags: [Baskets]
 *     responses:
 *       200:
 *         description: OK. 
 */
router.get('/', controller.returnOk);

/**
 * @swagger
 * /api/elements:
 *   get:
 *     summary: Returns an array of baskets
 *     tags: [Baskets]
 *     responses:
 *       200:
 *         description: Array of baskets.
 *         content:
 *            application/json:
 *              schema:
 *                type: array
 *                items:
 *                  $ref: '#/components/schemas/Basket'
 *              example:
 *                - id: 186
 *                  cesto: 'J49'
 *                  pais: 'PORT'
 *                  quantidade: 1
 *                  condicao_pagamento: '90'
 */
router.get('/elements', controller.getElements);

/**
 * @swagger
 * /api/count:
 *   post:
 *     summary: Returns the count of baskets
 *     tags: [Baskets]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: array
 *             items:
 *               $ref: '#/components/schemas/Basket'
 *           example:
 *             - id: 186
 *               cesto: 'J49'
 *               pais: 'PORT'
 *               quantidade: 1
 *               condicao_pagamento: '90'
 *             - id: 71
 *               cesto: '978'
 *               pais: 'BEL'
 *               quantidade: 30
 *               condicao_pagamento: 'R60'
 *     responses:
 *       200:
 *         description: Count of baskets.
 */
router.post('/count', controller.countElements);

/**
 * @swagger
 * /api/sort:
 *   post:
 *     summary: Returns the baskets sorted
 *     tags: [Baskets]
 *     requestBody:
 *      required: true
 *      content:
 *        application/json:
 *           schema:
 *             type: array
 *             items:
 *               $ref: '#/components/schemas/Basket'
 *           example:
 *             - id: 186
 *               cesto: 'J49'
 *               pais: 'PORT'
 *               quantidade: 1
 *               condicao_pagamento: '90'
 *             - id: 71
 *               cesto: '978'
 *               pais: 'BEL'
 *               quantidade: 30
 *               condicao_pagamento: 'R60'
 *     responses:
 *       200:
 *         description: Baskets sorted. 
 *         content:
 *            application/json:
 *              schema:
 *                type: array
 *                items:
 *                  $ref: '#/components/schemas/Basket'
 *              example:
 *                - id: 71
 *                  cesto: '978'
 *                  pais: 'BEL'
 *                  quantidade: 30
 *                  condicao_pagamento: 'R60'
 *                - id: 186
 *                  cesto: 'J49'
 *                  pais: 'PORT'
 *                  quantidade: 1
 *                  condicao_pagamento: '90'
 */
router.post('/sort', controller.sortElements)

module.exports = router;