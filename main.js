canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");

car_1_width=120;
car_1_height=70;

car_2_width=70;
car_2_height=120;

background_image="track.jpg";
car_2_image="re.jpg";
car_1_image="car_1.png";

car_1_X=10;
car_1_Y=10;

car_2_X=10;
car_2_Y=100;

function add(){
    background_imagetag=new Image();
    background_imagetag.onload=uploadbackground;
    background_imagetag.src=background_image;

    car_1_imagetag=new Image();
    car_1_imagetag.onload=uploadcar_1;
    car_1_imagetag.src=car_1_image;

    car_2_imagetag=new Image();
    car_2_imagetag.onload=uploadcar_2;
    car_2_imagetag.src=car_2_image;
}

function uploadbackground(){
    ctx.drawImage(background_imagetag,0,0,canvas.width,canvas.height);
}


function uploadcar_1(){
    ctx.drawImage(car_1_imagetag,car_1_X,car_1_Y,car_1_width,car_1_height);
}

function uploadcar_2(){
    ctx.drawImage(car_2_imagetag,car_2_X,car_2_Y,car_2_width,car_2_height);
}

window.addEventListener("keydown",my_keyDown);

function my_keyDown(e){
keypressed=e.keyCode;
console.log(keypressed);

if(keypressed=="38")
{
    up();
    console.log("Up");
}

if(keypressed=="40")
{
    down();
    console.log("Down");
}

if(keypressed=="37")
{
    left();
    console.log("Left");
}

if(keypressed=="39")
{
    right();
    console.log("Right");
}

if(keypressed=="87")
{
    moveup();
    console.log("Up");
}

if(keypressed=="83")
{
    movedown();
    console.log("Down");
}

if(keypressed=="65")
{
    moveleft();
    console.log("Left");
}

if(keypressed=="68")
{
    moveright();
    console.log("Right");
}
if (car_1_X >= 680){
    console.log(car_1_X);
    document.getElementById("game_status").innerHTML="Car 1 Won!!";
}

if (car_2_X >= 700){
    console.log("Car 2 Won!!");
    document.getElementById("game_status").innerHTML=" Car 2 Won!!";
}
}

function up(){
    if(car_1_Y>=0){
        car_1_Y=car_1_Y-10;
        uploadbackground();
        uploadcar_1();
    }
}
function down(){
    if(car_1_Y<=500){
        car_1_Y=car_1_Y+10;
        uploadbackground();
        uploadcar_1();
    }
}

function left(){
    if(car_1_X>=0){
        car_1_X=car_1_X-10;
        uploadbackground();
        uploadcar_1();
    }
}

function right(){
    if(car_1_X<=700){
        car_1_X=car_1_X+10;
        console.log(car_1_X);
        uploadbackground();
        uploadcar_1();}
    }  

    function moveup(){
        if(car_2_Y>=0){
            car_2_Y=car_2_Y-10;
            uploadbackground();
            uploadcar_2();
        }
    }
    function movedown(){
        if(car_2_Y<=500){
            car_2_Y=car_2_Y+10;
            uploadbackground();
            uploadcar_2();
        }
    }
    
    function moveleft(){
        if(car_2_X>=0){
            car_2_X=car_2_X-10;
            uploadbackground();
            uploadcar_2();
        }
    }
    
    function moveright(){
        if(car_2_X<=700){
            car_2_X=car_2_X+10;
            uploadbackground();
            uploadcar_2();
        }
        
    }
   
