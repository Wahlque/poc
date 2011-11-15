$(function () {
    var root = this,
        viewers = root.viewers || {},
        OV = (viewers.OV = {});
    root.viewers = viewers;

    var canvas  = document.getElementById("orb"),
        context = canvas.getContext("2d");
    canvas.width = 512;
    canvas.height = 512;

    function s(x) {
        return 256 + 50 * x;
    }

    function circle(centerX, centerY, radius, color) {
        context.beginPath();
        context.arc(centerX, centerY, radius, 0, 2 * Math.PI, false);
        context.fillStyle = color;
        context.fill();
        context.closePath();
    }

    circle(s(0.419), s(0), 6, "rgb(0, 0, 255)");
    circle(s(-0.581), s(0), 4, "rgb(255, 255, 0)");
    circle(s(0), s(2.07), 3, "rgb(128, 128, 128)");

    OV.paint = function (data) {
        context.clearRect(0, 0, 512, 512);
        circle(s(data.x1), s(data.y1), 6, "blue");
        circle(s(data.x2), s(data.y2), 4, "yellow");
        circle(s(data.x3), s(data.y3), 3, "gray");
    };

});