const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
var thunder, thunder1, thunder2, thunder3, thunder4;

var engine, world;
var drops = [];
var rand;
var maxDrops = 100;

var thunderCreatedFrame = 0;

function preload(){
    thunder1 = loadImage("thunder1.jpg");
    thunder2 = loadImage("thunder2.jpg");
    thunder3 = loadImage("thunder3.jpg")
    thunder4 = loadImage("thunder4.jpg");
}

function setup(){
   createCanvas(500,700);
   engine = Engine.create();
   world = engine.world;

   umbrella = new Umbrella(200,500);

   if(frameCount % 150 == 0){
       for(var i=0; i<maxDrops; i++){
           drops.push(new createDrop(random(0,400), random(0,400)));
       }
   }
    
}

function draw(){
    Engine.update(engine);
    background(0);

    rand = Math.round(random(1,4));
    if(frameCount % 80 == 0){
        thunderCreatedFrame = frameCount;
        thunder = createSprite(random(10,370), random(10,30), 300, 300);
        switch(rand){
            case 1 : thunder.addImage(thunder1);
            break;
            case 2 : thunder.addImage(thunder2);
            break;
            case 3 : thunder.addImage(thunder3);
            break;
            case 4 : thunder.addImage(thunder4);
            break;
            default : break;
        }
        thunder.scale = random(0.3,0.6)
    }

    if(thunderCreatedFrame + 10 == frameCount && thunder){
        thunder.destroy();
    }

    umbrella.display();

    for(var i = 0; i<maxDrops; i++){
        drops[i].showDrop();
        drops[i].update()
    }
    drawSprites();
}   

