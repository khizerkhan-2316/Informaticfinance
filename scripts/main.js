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
    console.log(response.data.tickers);
  })
  .catch(function (error) {
    console.error(error);
  });
