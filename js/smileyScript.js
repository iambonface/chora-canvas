//ctx is short hand for Context

var my_canvas = document.getElementById('canvas');
var ctx = my_canvas.getContext('2d');

ctx.fillStyle = '#ffff00';
ctx.beginPath();
ctx.arc(30, 30, 20, 0*Math.PI, 2*Math.PI);
ctx.closePath();
ctx.fill();
ctx.lineWidth = 1;
ctx.stroke();

ctx.fillStyle = '#000000';
ctx.beginPath();
ctx.arc(23,25,3, 0*Math.PI, 2*Math.PI);
ctx.closePath();
ctx.fill();

ctx.beginPath();
ctx.arc(37, 25, 3, 0*Math.PI, 2*Math.PI);
ctx.closePath();
ctx.fill();

ctx.beginPath();
ctx.arc(30, 35, 6, 0*Math.PI, Math.PI);
ctx.closePath();
ctx.fill();