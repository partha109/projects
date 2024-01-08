
const chartOptions = {
    chart: {
        type: 'area',
        width: 370,
        height: 300,
        toolbar: { show: false },
        zoom: { enabled: false }
    },
    colors: ['#3498db'],
    series: [{ name: 'Views', data: [18, 50, 42, 94, 41, 65, 30, 70, 45, 60, 55, 75, 62, 85, 40, 72, 58, 64, 80, 53, 69, 76, 81, 91, 88, 77, 84, 92, 95, 100] }],
    dataLabels: { enabled: false },
    stroke: { width: 3, curve: 'smooth' },
    fill: {
        type: 'gradient',
        gradient: {
            shadeIntensity: 1,
            opacityFrom: 0.7,
            opacityTo: 0,
            stops: [0, 90, 100]
        }
    },
    xaxis: {
        categories: [],
        axisBorder: { show: false },
        labels: { style: { colors: '#a7a7a7', fontFamily: 'Poppins' } }
    },
    yaxis: { show: false },
    grid: {
        borderColor: 'rgba(0, 0, 0, 0)',
        padding: { top: -30, bottom: -8, left: 12, right: 12 }
    },
    tooltip: {
        enabled: true,
        y: { formatter: value => `${value}` },
        style: { fontFamily: 'Poppins' }
    },
    markers: { show: false }
};

const chart = new ApexCharts(document.querySelector('.chart-area'), chartOptions);
chart.render();

function updateChartData(sourceCurrency, targetCurrency) {
    let startDate = new Date();
    startDate.setDate(startDate.getDate() - 30);
    let endDate = new Date();

    var requestOptions = {
        method: 'GET',
        redirect: 'follow',
        headers: new Headers({ "apikey": "59xJt3cWsHVuXKtJAgO9a2RgMDVC6Gwy" })
    };

    fetch(`https://api.apilayer.com/currency_data/timeframe?start_date=${startDate.toISOString().split('T')[0]}&end_date=${endDate.toISOString().split('T')[0]}&currencies=${targetCurrency}&source=${sourceCurrency}`, requestOptions)
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                let rates = Object.values(data.quotes).map(quote => {
                    let rate = quote[`${sourceCurrency}${targetCurrency}`];
                    return Math.round(rate * 1000) / 1000;
                });
                let dates = Object.keys(data.quotes);
                chart.updateOptions({
                    series: [{ name: 'Exchange Rate', data: rates }],
                    xaxis: { categories: dates }
                });
            }
        })
        .catch(error => console.error('Error fetching data:', error));
}

getBtn.addEventListener("click", (e) => {
    e.preventDefault();
    updateChartData(fromCur.value, toCur.value);
});
