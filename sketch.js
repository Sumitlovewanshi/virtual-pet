var dog, happyDog, database, foodS, foodStock;

function preload()
{
  dog1 = loadImage("images/dogImg.png")
  dog2 = loadImage("images/dogImg1.png")
}

function setup() {
	createCanvas(800, 700);
  database = firebase.database();

  dog = createSprite(400,350,10,10);
  dog.addImage(dog1)
  dog.scale = 0.2;

  foodStock=database.ref('food');
  foodStock.on("value",readStock);
  textSize(20); 

}


function draw() {  
  background("white")
  if(keyDown(UP_ARROW)){
    writeStock(foodS)
    dog.addImage(dog2);
    console.log("working")
  }
  drawSprites();
  text("Food remaining : "+foodS,170,200);

}
function readStock(data){
  foodS = data.val();

}

function writeStock(x){
if(x<=0){
  x=0
}
else{
  x = x-1;


}
database.ref('/').update({

  food:x
})


}

