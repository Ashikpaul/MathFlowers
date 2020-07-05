var c = document.getElementById("myCanvas");
c.height = window.innerHeight;
c.width = window.innerWidth;
var ctx = c.getContext("2d");

// setInterval(()=>{
  ctx.translate(c.width/2, c.height/2);
  ctx.clearRect(0,0,c.width, c.height);
  for(let a = 0; a < 2*Math.PI;a+= 0.0021){
    var r = 350* Math.cos(7 * a);
    var x = r * Math.sin(a);
    var y = r * Math.cos(a);
    ctx.beginPath(); //Start path
    ctx.arc(x, y, 5, 0, Math.PI * 2, true); 
    ctx.closePath();
    ctx.stroke();
    ctx.fillStyle = "#ff2626"; // Red color
    ctx.fill(); 
  }

  for(let a = 0; a < 2*Math.PI;a+= 0.0021){
    var r = 350* Math.sin(7 * a);
    var x = r * Math.cos(a);
    var y = r * Math.sin(a);
    ctx.fillStyle = "#ffAA26"; // Red color
    ctx.beginPath(); //Start path
    ctx.arc(x, y, 5, 0, Math.PI * 2, true); 
    ctx.fill(); 
    ctx.closePath();
    ctx.stroke();
  }
// },500);


