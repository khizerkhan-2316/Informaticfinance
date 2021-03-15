// Ether js

const ether = () => {
  var option = {
    method: "GET",
    url: "https://coingecko.p.rapidapi.com/coins/ethereum/tickers",
    headers: {
      "x-rapidapi-key": "1cc4df03e6msh9528fc3e887dbbbp10fb68jsn9ea9a023f3e9",
      "x-rapidapi-host": "coingecko.p.rapidapi.com",
    },
  };

  axios
    .request(option)
    .then(function (response) {
      const target = document.querySelector("#marketValueETH");
      const ETH = response.data.tickers[0].last;

      target.innerHTML = `$ ${ETH}`;
    })
    .catch(function (error) {
      console.error(error);
    });
};

export { ether };
