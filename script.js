var c = document.getElementById("myCanvas");
c.height = window.innerHeight;
c.width = window.innerWidth;
var ctx = c.getContext("2d");
ctx.translate(c.width/2, c.height/2);
for(let a = 0; a < 2*Math.PI;a+= 0.02){
  var r = 200* Math.cos(7 * a);
  var x = r * Math.cos(a);
  var y = r * Math.sin(a);
  ctx.fillStyle = "#ff2626"; // Red color
  ctx.beginPath(); //Start path
  ctx.arc(x, y, 5, 0, Math.PI * 2, true); 
  ctx.fill(); 
  ctx.stroke();
}

