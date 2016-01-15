//Flot Pie Chart
$(function() {

    var data = [{
        label: "Great",
        data: great,
        color: "#1dfa00"
    }, {
        label: "Good",
        data: good,
        color: "#acff47"
    }, {
        label: "Meh",
        data: meh,
        color: "#faf798"
    }, {
        label: "Bad",
        data: bad,
        color: "#fabf98"
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

    $("#flot-pie-chart").on("custom", function updateRandom(event) {
        data[0].data = great;
        data[1].data = good;
        data[2].data = meh;
        data[3].data = bad;
        plotObj.setData(data);
        plotObj.draw();
    });
});