
function setup() {
  createCanvas(400,400);
  background(51);
  box = createSprite(200,200,25,25);
  box.shapeColor = "black";
}

function draw() 
{

  // write the code to change background color 
  // to red when RIGHT_ARROW is pressed
  
  if (keyIsDown(LEFT_ARROW)) 
  {
    background(56,76,164);
    box.x = box.x - 6;
  }
 
    if (keyIsDown(UP_ARROW)) 
  {
    background(227,202,83)
    box.y = box.y - 6;
  }

  if (keyIsDown(DOWN_ARROW)) 
  {
    background(23,137,71);
    box.y = box.y + 6;
  }

  if (keyIsDown(RIGHT_ARROW))
  {
    background(119,0,29); 
    box.x = box.x + 6;
  }

  if(keyIsDown(UP_ARROW) && keyIsDown(LEFT_ARROW)) 
  {
    background(215,180,235);
  }

  if(keyIsDown(UP_ARROW) && keyIsDown(RIGHT_ARROW))
  {
   background(245,157,98);
  }
  
  if(keyIsDown(DOWN_ARROW) && keyIsDown(RIGHT_ARROW))
  {
  background(88,181,138);
  }

  if(keyIsDown(DOWN_ARROW) && keyIsDown(LEFT_ARROW)) 
  {
    background(180,72,234);
  }
  drawSprites();
}

