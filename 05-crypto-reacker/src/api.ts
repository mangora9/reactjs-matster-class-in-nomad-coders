const BASE_RUL = `https://api.coinpaprika.com/v1`;
const fetchCoins = () => {
  return fetch(`${BASE_RUL}/coins`).then((response) => response.json());
};

const fetchCoinInfo = (coinId: string) => {
  return fetch(`${BASE_RUL}/coins/${coinId}`).then((response) =>
    response.json(),
  );
};

const fetchCoinTickers = (coinId: string) => {
  return fetch(`${BASE_RUL}/tickers/${coinId}`).then((response) =>
    response.json(),
  );
};

export { fetchCoins, fetchCoinInfo, fetchCoinTickers };
