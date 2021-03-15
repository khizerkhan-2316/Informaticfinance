const marketvalueChange = () => {
  var options = {
    method: "GET",
    url: "https://coingecko.p.rapidapi.com/coins/markets",
    params: {
      vs_currency: "usd",
      price_change_percentage: "24h",
      page: "1",
      ids: "bitcoin,ethereum,",
      per_page: "100",
      order: "market_cap_desc",
    },
    headers: {
      "x-rapidapi-key": "1cc4df03e6msh9528fc3e887dbbbp10fb68jsn9ea9a023f3e9",
      "x-rapidapi-host": "coingecko.p.rapidapi.com",
    },
  };

  axios
    .request(options)
    .then(function (response) {
      const valueTarget = document.querySelector("#dailyChangeBTC");
      const etherTarget = document.querySelector("#dailyChangeETH");
      if (response.data[0].price_change_percentage_24h > 0) {
        valueTarget.innerHTML = `↑ ${response.data[0].price_change_percentage_24h} %`;

        valueTarget.style.color = "green";
      } else {
        valueTarget.innerHTML = ` ↓${response.data[0].price_change_percentage_24h}`;

        valueTarget.style.color = "red";
      }

      if (response.data[1].price_change_percentage_24h > 0) {
        etherTarget.innerHTML = `↑ ${response.data[1].price_change_percentage_24h} %`;

        etherTarget.style.color = "green";
      } else {
        etherTarget.innerHTML = ` ↓ ${response.data[1].price_change_percentage_24h}`;

        etherTarget.style.color = "red";
      }
    })
    .catch(function (error) {
      console.error(error);
    });
};

export { marketvalueChange };
