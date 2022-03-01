// BAR CHART

const contenedorBarChart = document.querySelector("#bar-chart").getContext("2d")

const barChart = new Chart(contenedorBarChart, {
    type: "bar",
    data: {
        labels :[
            "Lunes",
            "Martes",
            "Mircoles",
            "Jueves",
            "Viernes",
            "Sabado",
            "Domingo",
        ],
        datasets: [{
            label: "Numero de usuarios por dia",
            data: [20, 40,10 ,100 , 59 ,75 ,200],
            borderWidth: 3,
            borderColor: "",
            backgroundColor: [
                "purple",
                "yellow",
                "skyblue",
                "pink",
                "orange",
                "green",
                "brown",
            ]
         }],
    },
});

// DOUGHNUT CHART

const containerDoughnutChart = document
  .querySelector("#doughnut-chart")
  .getContext("2d");

const dataForChart = {
  labels: ["Computadoras", "Celulares", "Refrigeradoras", "Parlantes"],
  datasets: [
    {
      label: "PRODUCTOS ELECTRONICOS",
      data: [100, 230, 520, 267],
      backgroundColor: ["#f01", "green", "yellow", "orange"],
    },
  ],
};

const config = {
  type: "doughnut",
  data: dataForChart,
};

const donutChart = new Chart(containerDoughnutChart, config);

// LINEAR CHART

const containerLineChart = document.querySelector("#lineal-chart");
const configLineal = {
    type: "line",
    data: dataForChart,
};

const lineChart = new Chart(containerLineChart, configLineal);

// BUBBLE CHART

const containerBubbleChart = document
  .querySelector("#bubble-chart")
  .getContext("2d");
// he tomado a dataForCharty estoy accediendo a la propiedad data y cambio su valor
dataForChart.datasets[0].data = [
  {
    x: 20,
    y: 27,
    r: 30,
  },
  {
    x: 20,
    y: 10,
    r: 10,
  },
  {
    x: 40,
    y: 20,
    r: 10,
  },
];

const configBubble = {
  type: "bubble",
  data: dataForChart,
};

const bubbleChart = new Chart(containerBubbleChart, configBubble);

// POLAR CHART

const containerPolarChart = document
.querySelector("#polar-chart")
.getContext("2d");

dataForChart.datasets[0].data = [300,149,321,678];

const configPolar = {
    type: "polarArea",
    data: dataForChart,
}
const PolarChart = new Chart(containerPolarChart, configPolar);


const containerRadarChart = document.querySelector("#radar-chart").getContext("2d");

const configRadar = {
    type: "radar",
    data: dataForChart,
};

const RadarChart = new Chart(containerRadarChart, configRadar);

// SCATTER CHART

const containerScatterChart = document
  .querySelector("#scatter-chart")
  .getContext("2d");

dataForChart.datasets[0].data = [
  {
    x: -10,
    y: 0,
  },
  {
    x: 0,
    y: 10,
  },
  {
    x: 10,
    y: 5,
  },
  {
    x: 0.5,
    y: 5.5,
  },
];

const configScatter = {
  type: "scatter",
  data: dataForChart,
};

const scatterChart = new Chart(containerScatterChart, configScatter);