var arr_touches = [];
var canvas;
var ctx;
var down = false; //mouse is pressed
var color = 'black'; //default drawing color
var width = 5; // drawing width


//calling window.onload to make sure the HTML is loaded
window.onload = function() {
    canvas = document.getElementById('canvas');
    ctx = canvas.getContext('2d'); 
    ctx.lineWidth = width;
    
    //handling mouse click and move events
    canvas.addEventListener('mousemove', handleMove); 
    canvas.addEventListener('mousedown', handleDown);
    canvas.addEventListener('mouseup', handleUp);
    
    //handling mobile touch events
    canvas.addEventListener("touchstart", handleStart, false);
    canvas.addEventListener("touchend", handleEnd, false);
    canvas.addEventListener("touchcancel", handleCancel, false);
    canvas.addEventListener("touchleave", handleEnd, false);
    canvas.addEventListener("touchmove", handleTouchMove, false);
};
function handleMove(e)
{
	xPos = e.clientX-canvas.offsetLeft;
	yPos = e.clientY-canvas.offsetTop;
	if(down == true)
	{
