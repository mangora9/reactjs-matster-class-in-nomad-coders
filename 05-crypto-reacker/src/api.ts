// /src/api.ts
const BASE_RUL = `https://api.coinpaprika.com/v1`;
const FREE_BASE_RUL = `https://ohlcv-api.nomadcoders.workers.dev`;
//ohlcv-api.nomadcoders.workers.dev?coinId=btc-bitcoin
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

const fetchCoinHistory = (coinId: string) => {
  const endDate = Math.floor(Date.now() / 1000);
  const startData = endDate - 60 * 60 * 24 * 7;
  // return fetch(
  //   `${BASE_RUL}/coins/${coinId}/ohlcv/historical?startDate=${startData}&endDate=${endDate}`,
  // ).then((response) => response.json());
  return fetch(
    `${FREE_BASE_RUL}?coinId=${coinId}&startDate=${startData}&endDate=${endDate}`,
  ).then((response) => response.json());
};

export { fetchCoins, fetchCoinInfo, fetchCoinTickers, fetchCoinHistory };
