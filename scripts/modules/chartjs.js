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

export { ctx, myLineChart };
