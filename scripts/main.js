console.log("Script is running");
//Import of components/Modules

// Js for hamburger menu:

function myFunction() {
  var x = document.getElementById("myLinks");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}

// getting API data:
const apiKey = "84bee8e9-32a5-4e6f-b0fe-311ddc4c69e6";

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
ether();

bitcoin();

marketvalueChange();

setInterval(function () {
  ether();

  bitcoin();

  marketvalueChange();
}, 60000);

const ctx = document.getElementById("myChart");
var myLineChart = new Chart(ctx, {
  type: "line",
  data: {
    labels: [1500, 1600, 1700, 1750, 1800, 1850, 1900, 1950],
    datasets: [
      {
        data: [86, 114, 106, 106, 107, 111, 133, 221],
        label: "BTC",
        borderColor: "#FFF",
        fill: false,
      },
    ],
  },
  options: options,
});
