const fetchCoins = async () => {
  const url = 'https://api.coincap.io/v2/assets/';

  const coins = await fetch(url)
    .then((response) => response.json())
    .then((data) => data.data)
    .catch((error) => error.toString());

  return coins;
};

const fetchConvert = async () => {
  const baseUrl = 'https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest';
  const usdEndpoint = '/currencies/usd.min.json';
  const url = baseUrl.concat(usdEndpoint);

  const convert = await fetch(url)
  .then((response) => response.json())
  .then((data) => data.usd)
  .catch((error) => error.toString());

  return convert;
};

const showCoins = async () => {
  const coins = await fetchCoins();
  const convert = await fetchConvert();

  const list = document.getElementById('coins');

  coins
    .filter((_, index) => index < 10)
    .forEach((coin) => {
      const li = document.createElement('li');
      const price = Number(coin.priceUsd);
      const real = price * convert.brl;

      li.innerHTML = `${coin.name} (${coin.symbol}): ${real.toFixed(2)}`;

      list.appendChild(li);
  });
}

window.onload = () => showCoins();