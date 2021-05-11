var touch_event = "";
var last_position_x, last_position_y;
canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");
color = "black";
width_of_line = 1;
canvas.addEventListener("touchstart", my_touchstart);

function my_touchstart(e){
console.log("entering my_touchstart");
color = document.getElementById("color").value;
width_of_line = document.getElementById("width_of_line").value;
touch_event = "touchstart";
console.log("exiting my_touchstart");
}

canvas.addEventListener("touchmove",my_touchmove);

function my_touchmove(e){
    //console.log("entering my_touchmove");
    current_position_of_touch_x = e.touches[0].clientX - canvas.offsetLeft;
    current_position_of_touch_y = e.touches[0].clientY - canvas.offsetTop;
    if(touch_event == "touchstart"){
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = width_of_line;
        //console.log("last position of x and y coordinates is " );
        //console.log("x = "+ last_position_x+ "y = "+ last_position_y);
        ctx.moveTo(last_position_x, last_position_y);
        //console.log("current position of x and y coordinates is " );
        //console.log("x = "+ current_position_of_touch_x+ "y = "+ current_position_of_touch_y);
        ctx.lineTo(current_position_of_touch_x, current_position_of_touch_y);
        ctx.stroke();
        last_position_x=current_position_of_touch_x; 
        last_position_y=current_position_of_touch_y;
    }
//console.log("exiting my_touchmove");

}

canvas.addEventListener("touchup",my_touchup);
function my_touchup(e){
      //console.log("entering my_touchup");

    touch_event = "touchup";
      //console.log("exiting my_touchup");

}
canvas.addEventListener("touchleave",my_touchleave);
function my_touchleave(e){
    //console.log("entering my_touchleave");
    touch_event = "touchleave";
    //console.log("exiting my_touchleave");

}

function clearArea(){
    //console.log("entering clearArea");
    ctx.clearRect(0,0,ctx.canvas.width,ctx.canvas.height);
    //console.log("exiting clearArea");

}