var canvas = document.getElementById("paper");
var canvas2 = canvas.getContext("2d");
var mouse_event = "empty";
var last_position_x, last_position_y; 
var color = "purple";
var width = 1;
canvas.addEventListener("mousedown",my_mousedown);

function my_mousedown(e){
    color = document.getElementById("txt1").value;
    width = document.getElementById("txt2").value;
    mouse_event = "mousedown";}

canvas.addEventListener("mousemove",my_mousemove);
function my_mousemove(e){
    current_position_x = e.clientX-canvas.offsetLeft;
    current_position_y = e.clientY-canvas.offsetTop;
    if(mouse_event=="mousedown"){
        canvas2.beginPath();
        canvas2.strokeStyle = color;
        canvas2.lineWidth = width;
        canvas2.moveTo(last_position_x,last_position_y);
        canvas2.lineTo(current_position_x,current_position_y);
        canvas2.stroke();
    }
    last_position_x = current_position_x;
    last_position_y = current_position_y;

}
canvas.addEventListener("mouseup",my_mouseup);
function my_mouseup(e) {
     mouse_event = "mouseup";
}

canvas.addEventListener("mouseleave",my_mouse_leave);
function my_mouse_leave (e) {
    mouse_event = "mouseleave";
}
function erase() {
    canvas2.clearRect(0,0,canvas2.canvas.width,canvas2.canvas.height);
}