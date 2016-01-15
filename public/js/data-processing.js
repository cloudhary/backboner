var socket = io();

var instances = 0;
var x1, y1, z1, x2, y2, z2;
var lower1, lower2, upper1, upper2, shoulder_left, shoulder_right;
var SENSOR_MAX = 0.15;
var SHOULDER_SENSOR_MAX = 0.15;
var LOWER_BACK_SENSOR_MAX = 0.15;
var UPPER_BACK_SENSOR_MAX = 0.15;
var great = 0;
var good = 0;
var meh = 0; 
var bad = 0;

socket.on('new message', function (data) {

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

    var total_average_percentage = Math.abs(upper1) + Math.abs(upper2)
                     + Math.abs(lower1) + Math.abs(lower2)
                     + Math.abs(shoulder_left) + Math.abs(shoulder_right);
    total_average_percentage/=3;
    if (total_average_percentage < 0.03) {
        great += 1;
    } else if (total_average_percentage < 0.07) {
        good += 1;
    } else if (total_average_percentage < 0.15) {
        meh += 1;
    } else {
        bad += 1;
    }
    $("*").trigger("custom"); // for all on screen objects to receive their
});