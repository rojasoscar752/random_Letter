const express = require('express');
const app = express();
const port = 3002;

function generarLetraAleatoria() {
    const codigoAscii = Math.floor(Math.random() * (122 - 97 + 1)) + 97;
  
    const letra = String.fromCharCode(codigoAscii);
  
    return letra;
  }
  
  const letraAleatoria = generarLetraAleatoria();
  console.log(letraAleatoria);
  

app.get('/numberRandom', (req, res) => {
    res.json(generarLetraAleatoria());
  });
  
  app.listen(port, () => {
    console.log(`Letra minuscula corriendo en http://localhost:${port}`);
  });
  