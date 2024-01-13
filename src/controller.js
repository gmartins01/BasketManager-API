const axios = require('axios');
const asyncHandler = require("express-async-handler");

const validateDataArray = (data) => {
  return data.every(d => {
    return d.id && d.cesto && d.pais && d.quantidade && d.condicao_pagamento;
  });
}

const returnOk = (req,res) => {
  res.sendStatus(200);
}

const getElements = asyncHandler(async (req,res) => {
    const response = await axios.get('https://pastebin.pl/view/raw/8fced5f8')
    res.status(200).json(response.data);
});

const countElements = (req,res) =>{
  const elements = req.body;

  if (!validateDataArray(elements)) {
    res.status(400);
    throw new Error("All fields are mandatory!");
  }

  const count = elements.length;
  res.status(200).json(count);
}

const sortElements = (req,res) => {

  const elements = req.body;

  if (!validateDataArray(elements)) {
    res.status(400);
    throw new Error("All fields are mandatory!");
  }

  elements.sort((a,b) =>{
    const quantityDiff = b.quantidade - a.quantidade;
    if(quantityDiff !==0) return quantityDiff;

    const conditions = { DIN: 0, '30': 1, R60: 2, '90': 3, '120': 4 };
    const conditionDiff = conditions[a.condicao_pagamento] - conditions[b.condicao_pagamento];
    if (conditionDiff !== 0) return conditionDiff;

    if (a.pais === 'PORT' && b.pais !== 'PORT') return -1;
    if (a.pais !== 'PORT' && b.pais === 'PORT') return 1;

    return 0;
  });

  elements.forEach(element => {
    element.previsao_consumo = element.quantidade * 5;
  });

  res.status(200).json(elements);
}

module.exports = {
  returnOk,
  getElements,
  countElements,
  sortElements
}