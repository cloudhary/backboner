var socket = io();

var instances = 0;
var x1, y1, z1, x2, y2, z2;
var lower1, lower2, upper1, upper2, shoulder1, shoulder2;
var SENSOR_MAX = 0.4;

// create function to calculate weighted average of a list of data
// function getAvg(data, weights) {
//     for 
// }


socket.on('new message', function (data) {

    console.log("Data received: ", data);
    instances += 1;

    var current_array = data.message.split(",");
    lower1 = parseFloat(current_array[6 - 6]);
    lower2 = parseFloat(current_array[7- 6]);
    upper1 = parseFloat(current_array[8 - 6]);
    upper2 = parseFloat(current_array[9 - 6]);
    shoulder_left = parseFloat(current_array[10 -6]);
    shoulder_right = parseFloat(current_array[11  -6]);
    x1 = parseFloat(current_array[0+6]);
    y1 = parseFloat(current_array[1+6]);
    z1 = parseFloat(current_array[2+6]);
    x2 = parseFloat(current_array[9]);
    y2 = parseFloat(current_array[10]);
    z2 = parseFloat(current_array[11]);

    $("*").trigger("custom"); // for all on screen objects to receive their
});