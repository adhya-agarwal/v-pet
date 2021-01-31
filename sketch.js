var saddog,dog1,dog2,happydog;
var database;
var food, foodstock

function preload()
{
  dog1= loadImage("sad dog.png");
  dog2= loadImage("happy dog.png")
}

function setup() {
  database=firebase.database()
  createCanvas(800, 700);
  
  saddog= createSprite(150,150,50,50);
  saddog.scale=1.5
  saddog.addImage(dog1)

  foodstock = database.ref("Food")
  foodstock.on("value",readStock)
}

function draw() {  
background("powderblue")
  drawSprites();
  //add styles here

}




