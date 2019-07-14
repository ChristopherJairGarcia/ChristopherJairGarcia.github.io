let mousepressed = false; 

function setup()
{   
    createCanvas(800, 400);
    //sets units of angles to be in degrees for arc
    angleMode(DEGREES);
  
}
function draw () {
    //table color
 fill( 51 );
 rect(100, 90, 655, 295);
 //table cloth
 strokeWeight(4);
stroke(247, 248, 250);
fill(145, 36, 181);
rect(150,120,550,230);  

  
    



 //middle plate on the left
 fill( 247, 248, 250);
 ellipse(215 , 240, 55 ,55 );
    if (mousepressed &&  mouseX > 160 && mouseX < 270 && mouseY >185  && mouseY < 295  )
    {
     fill( 247, 251, 250);
 ellipse(325 , 295, 450, 400 );
        
    }
    
 //top left plate 
 fill( 247, 251, 250);
 ellipse(325 , 175, 55 ,55 );
     if (mousepressed &&  mouseX > 585 && mouseX < 695 && mouseY > 120 && mouseY <230   )
     {
     fill( 247, 251, 250);
     ellipse(325 , 295, 450, 400 );
     }
 //top middle plate
  fill( 247, 251, 250);
 ellipse(435 , 175, 55 ,55 );
    if (mousepressed &&  mouseX >120  && mouseX < 230 && mouseY > 380 && mouseY < 490  )
    {
     fill( 247, 251, 250);
 ellipse(325 , 295, 450, 400 );
    }
 //top right plate 
  fill( 247, 251, 250);
 ellipse(540 , 175, 55 ,55 );
     if (mousepressed &&  mouseX > 485 && mouseX < 595 && mouseY > 120 && mouseY < 230 )
         
     {
     fill( 247, 251, 250);
 ellipse(325 , 295, 450, 400 );
     }
 //big oval in the middle 
  fill( 247, 238, 250);
  ellipse(440 , 235, 115 ,53 );
  
 //middle right plate 
  fill( 247, 251, 250);
 ellipse(640 , 240, 55 ,55 );
    if (mousepressed &&  mouseX > 585 && mouseX < 695 && mouseY >185  && mouseY < 295  )
    {
     fill( 247, 251, 250);
 ellipse(325 , 295, 450, 400 );
    }
 // bottom right plate
  fill( 247, 341, 250);
 ellipse(540 , 295, 55 ,55 ); 
    if (mousepressed &&  mouseX > 485 && mouseX < 595 && mouseY > 240 && mouseY < 350 )
    {
     fill( 247, 251, 250);
 ellipse(325 , 295, 450, 400 );
    }
 // bottom middle plate 
 fill( 247, 251, 250);
 ellipse(435 , 295, 55 ,55 );
    if (mousepressed &&  mouseX >380&& mouseX <490 && mouseY > 240 && mouseY < 350 )
    {
     fill( 247, 251, 250);
 ellipse(325 , 295, 450, 400 );
    }
 // bottom left plate 
  fill( 247, 251, 250);
 ellipse(325 , 295, 55 ,55 );
 
    if (mousepressed &&  mouseX >270 && mouseX <380 && mouseY > 240 && mouseY < 350 )
    {
     fill( 247, 251, 250);
 ellipse(325 , 295, 450, 400 );
    
    
}
 }
function mouseClicked (){
    mousepressed = true;
}
