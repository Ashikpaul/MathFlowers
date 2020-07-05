var c = document.getElementById("myCanvas");
c.height = window.innerHeight;
c.width = window.innerWidth;
var ctx = c.getContext("2d");
ctx.translate(c.width/2, c.height/2);
setInterval(()=>{
  ctx.clearRect(0,0,c.width, c.height)
  var blah = Math.random() * 5 | 0;
  for(let a = 0; a < 2*Math.PI;a+= 0.005){
    var r = 400* Math.cos(blah * a);
    var x = r * Math.cos(a);
    var y = r * Math.sin(a);
    ctx.fillStyle = "#ff2626"; // Red color
    ctx.beginPath(); //Start path
    ctx.arc(x, y, 5, 0, Math.PI * 2, true); 
    ctx.fill(); 
    ctx.stroke();
  }

  for(let a = 0; a < 2*Math.PI;a+= 0.005){
    var r = 400* Math.sin(blah * a);
    var x = r * Math.cos(a);
    var y = r * Math.sin(a);
    ctx.fillStyle = "#ff2626"; // Red color
    ctx.beginPath(); //Start path
    ctx.arc(x, y, 5, 0, Math.PI * 2, true); 
    ctx.fill(); 
    ctx.stroke();
  }
},1500);


