console.log("Script is running");
//Import of components/Modules

import { bitcoin } from "./modules/bitcoin.js";
import { ether } from "./modules/etherum.js";
import { marketvalueChange } from "./modules/marketchange.js";

// Js for hamburger menu:

function myFunction() {
  var x = document.getElementById("myLinks");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}

// Executing functions:
const apiKey = "84bee8e9-32a5-4e6f-b0fe-311ddc4c69e6";

ether();

bitcoin();

marketvalueChange();

setInterval(function () {
  ether();

  bitcoin();

  marketvalueChange();
}, 60000);

// ChartJs for Bitcoin data

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
