const bitcoin = () => {
  const options = {
    method: "GET",
    url: "https://coingecko.p.rapidapi.com/coins/bitcoin/tickers",
    headers: {
      "x-rapidapi-key": "1cc4df03e6msh9528fc3e887dbbbp10fb68jsn9ea9a023f3e9",
      "x-rapidapi-host": "coingecko.p.rapidapi.com",
    },
  };
  axios
    .request(options)
    .then(function (response) {
      let bitcoin = response.data.tickers[0].last;
      let target = document.querySelector("#marketValueBTC");
      target.innerHTML = `$ ${bitcoin}`;
    })
    .catch(function (error) {
      console.error(error);
    });
};

export { bitcoin };
