const fetch = require('node-fetch');

async function mostrarCotações() {
  try {
    const res = await fetch('https://economia.awesomeapi.com.br/json/last/USD-BRL');
    const data = await res.json();

    const dolar = data.USDBRL;
    console.log(`Dólar (USD) para Real: Compra: ${dolar.bid}, Venda: ${dolar.ask}`);
  } catch (err) {
    console.error('Erro ao buscar cotações:', err.message);
  }
}


mostrarCotações();
setInterval(mostrarCotações, 30000); // Atualiza a cada 30 segundos