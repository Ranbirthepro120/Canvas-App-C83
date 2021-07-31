var last_x, last_y;

     
    color = "black";
    width_of_line = 3;
    canvas = document.getElementById('myCanvas');
    ctx = canvas.getContext("2d");
   

    var width = screen.width;
    new_width = screen.width - 70;
    new_height = screen.height - 300;

    if(width < 992)
    {
        document.getElementById("myCanvas").width = new_width;
        document.getElementById("myCanvas").height = new_height;
        document.body.style.overflow = "hidden";
    }
    canvas.addEventListener("touchstart",my_touchstart)
    function my_touchstart(e)
    {
        console.log("my_touchstart");

        last_x = e.touches[0].clientX - canvas.offsetLeft;
        last_y = e.touches[0].clientY - canvas.offsetTop;
        color = document.getElementById("color").value;
        width_of_line = document.getElementById("width_of_line").value;
    }
    canvas.addEventListener("touchmove",my_touchmove)
    function my_touchmove(e)
    {
         console.log("my_touchmove");
         current_x = e.touches[0].clientX - canvas.offsetLeft;
         current_y = e.touches[0].clientY - canvas.offsetTop;

        
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = width_of_line;

        console.log("Last position of X & Y Co-ordinates = ");
        console.log("X = " + last_x + "y = " + last_y);
        ctx.moveTo(last_x, last_y);

        console.log("Current position of X & Y Co-ordinates = ");
        console.log("X  = " + current_x + "Y = " + current_y);
        ctx.lineTo(current_x, current_y);
        ctx.stroke();
       

        last_x = current_x; 
        last_y = current_y;
    }

function clearArea()
{
   ctx.clearRect (0, 0, ctx.canvas.width, ctx.canvas.height);
}