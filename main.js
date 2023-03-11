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

    function Circle(x,y,dx,dy,radius){
        this.x = x;
        this.y = y;
        this.dx = dx;
        this.dy = dy;
        this.radius = radius

        this.draw = function()  {
        c.beginPath();
        c.strokeStyle ="purple"
        c.arc(this.x ,this.y ,this.radius ,0, Math.PI * 2, false);
        c.stroke();
        }
        this.update = function (){
            if (this.x + this.radius >innerWidth || this.x- this.radius < 0){
                this.dx = -this.dx;
            }
            if (this.y + this.radius >innerHeight || this.y- this.radius < 0){
                this.dy = -this.dy;
            }
        this.x += this.dx;
        this.y += this.dy
        }
    }

    var circle = new Circle(200,200);



    x= Math.random()* innerWidth;
    var dx = (Math.random()- 0.5)*8;
    y=Math.random()* innerHeight;
    var dy = (Math.random()- 0.5)*8;
    var radius = 30
    function animate(){
        requestAnimationFrame(animate);
        c.clearRect(0,0,innerWidth,innerHeight);
        circle.draw();

        c.beginPath();
        c.strokeStyle ="purple"
        c.arc(x ,y ,radius ,0, Math.PI * 2, false);
        c.stroke();
        if (x + radius >innerWidth || x-radius < 0){
            dx = -dx;
        }
        if (y + radius >innerHeight || y-radius < 0){
            dy = -dy;
        }
        x += dx;
        y += dy
    }   
   requestAnimationFrame(animate);