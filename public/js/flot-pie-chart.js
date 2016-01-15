//Flot Pie Chart
$(function() {

    var data = [{
        label: "Great",
        data: counter
    }, {
        label: "Good",
        data: 3
    }, {
        label: "Meh",
        data: 9
    }, {
        label: "Bad",
        data: 20
    }];

    var plotObj = $.plot($("#flot-pie-chart"), data, {
        series: {
            pie: {
                show: true
            }
        },
        grid: {
            hoverable: true
        },
        tooltip: true,
        tooltipOpts: {
            content: "%p.0%, %s", // show percentages, rounding to 2 decimal places
            shifts: {
                x: 20,
                y: 0
            },
            defaultTheme: false
        }
    });
    // Update the random dataset at 25FPS for a smoothly-animating chart

    setInterval(function updateRandom() {
        data[0].data = counter;
        plotObj.setData(data);
        plotObj.draw();
        console.log(data[0].data);
    }, 500);
});