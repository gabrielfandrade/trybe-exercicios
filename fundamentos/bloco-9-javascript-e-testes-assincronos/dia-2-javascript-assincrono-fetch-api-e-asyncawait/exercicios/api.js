const fetchCoins = async () => {
  const url = 'https://api.coincap.io/v2/assets/';

  const coins = await fetch(url)
    .then((response) => response.json())
    .then((data) => data.data)
    .catch((error) => error.toString());

  return coins;
};

const showCoins = async () => {
  const coins = await fetchCoins();

  const list = document.getElementById('coins');

  coins
    .filter((_, index) => index < 10)
    .forEach((coin) => {
      const li = document.createElement('li');

      li.innerHTML = `${coin.name} (${coin.symbol}): ${coin.priceUsd}`;

      list.appendChild(li);
  });
}

window.onload = () => showCoins();