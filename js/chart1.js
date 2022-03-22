var ctx = document.getElementById('lineChart').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['Jan (Html)', 'Feb (Css)', 'Mar (Java)', 'Apr (Python)', 'May (c)', 'Jun', 'Jul (Html)', 'Aug (python)', 'Sep (Bootstrap)', 'Oct (C++)', 'Nov (Css)', 'Dec (Python)'],
        datasets: [{
            label: 'Earnings in $',
            data: [2050, 1900, 2100, 2800, 1800, 0 , 2500, 2600, 2450, 1950, 2300, 3900],
            backgroundColor: [
                'rgba(85,85,85, 1)'

            ],
            borderColor: 'rgb(41, 155, 99)',

            borderWidth: 1
        }]
    },
    options: {
        responsive: true
    }
});