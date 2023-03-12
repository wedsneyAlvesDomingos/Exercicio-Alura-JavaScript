var canvas = document.querySelector('canvas');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
 
var c = canvas.getContext('2d')
//rect border   
//c.fillRect(0, 0, 300, 150);
//c.clearRect(1, 1,298, 148);

//line
//c.beginPath();
//c.moveTo(50,300)
//c.lineTo(300,100)

//c.stroke(); 

//arc or circle 
//for ( var i = 0;  i < 3; i++) {
   // c.strokeStyle ="purple"
    //var x = Math.random() * window.innerWidth;
    //var y = Math.random()* window.innerHeight;
    //c.beginPath();
//c.arc(x ,y ,30 ,0, Math.PI * 2, false);
    //c.stroke();
   // c.strokeStyle ="purple"}
   
var mouse = {
    x: undefined,
     y: undefined
}

var maxRadius = 40;
var minRadius = 2;
var colorArray = [
    "antiqueWhite",
    "lightPink",
    "lightPurple",
    "lightBlue",
    "rgb(114, 207, 207)"
]

window.addEventListener('mousemove', 
    function(event) {
        mouse.x = event.x ;
        mouse.y = event.y ;
    
})

window.addEventListener("resize", function(){
    canvas.width = this.window.innerWidth;
    canvas.height = this.window.innerHeight;

    init();
})

function Circle(x, y, dx, dy, radius){
    this.x = x;
    this.y = y;
    this.dx = dx;
    this.dy = dy;
    this.minRadius = radius;
    this.radius = radius;
    this.color =  colorArray[Math.floor(Math.random()* colorArray.length)];

    this.draw = function()  {
        c.beginPath();
        c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
        c.fillStyle = this.color;
        c.fill();
    }
    this.update = function (){
        if (this.x + this.radius > innerWidth || this.x - this.radius < 0) {
            this.dx = - this.dx;
        }
        if (this.y + this.radius > innerHeight || this.y - this.radius < 0) {
            this.dy = - this.dy;
        }
    this.x += this.dx;
    this.y += this.dy

    //interatividade
    if (mouse.x - this.x < 50 && mouse.x - this.x > -50 && mouse.y - this.y < 50 && mouse.y - this.y > -50) {
        if(this.radius < maxRadius){
            this.radius += 1;
        }
       
    }
   else if(this.radius > this.minRadius){
    this.radius -= 1;
   }

    this.draw();
    }
}

   //x= Math.random()* innerWidth;
   //var dx = (Math.random()- 0.5)*20;
   //y=Math.random()* innerHeight;
   //var dy = (Math.random()- 0.5)*20;
   //var radius = 30

   var circleArray = [];

    function init(){
        circleArray = [];

        for(var i=0; i < 1000; i++){
             var radius = Math.random() * 3 + 1;
             x= Math.random()* (innerWidth - radius*2)+ radius;
             var dx = (Math.random()- 0.5)*2;
             y=Math.random()*(innerHeight - radius*2)+ radius;
             var dy = (Math.random()- 0.5)*2;
             
             circleArray.push(new Circle(x, y, dx, dy, radius    ));
     
        }
    }  

  
    function animate(){
        requestAnimationFrame(animate);
        c.clearRect(0,0,innerWidth,innerHeight);
       for(var i = 0; i<circleArray.length; i++){
            circleArray[i].update();
       }

    }   
   requestAnimationFrame(animate);
   init();