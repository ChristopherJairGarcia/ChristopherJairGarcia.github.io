function setup()
{   
    createCanvas(800, 400);
    //sets units of angles to be in degrees for arc
    angleMode(DEGREES);  
 
  
}
function draw () {
    //table color
 fill( 51 );
 rect(30, 20, 755, 395);
 //table cloth
 strokeWeight(4);
stroke(247, 248, 250);
fill(145, 36, 181);
rect(80,50,550,230);


 //middle plate on the left
 fill( 247, 248, 250);
 ellipse(245 , 275, 55 ,55 );
 //top left plate 
 fill( 247, 251, 250);
 ellipse(345 , 200, 55 ,55 );
 //top middle plate
  fill( 247, 251, 250);
 ellipse(445 , 200, 55 ,55 );
 //top right plate 
  fill( 247, 251, 250);
 ellipse(550 , 200, 55 ,55 );
  //big oval in the middle 
  fill( 247, 248, 250);
  ellipse(450 , 265, 115 ,53 );
 
 //middle right plate 
  fill( 247, 251, 250);
 ellipse(675 , 275, 55 ,55 );
 // bottom right plate
  fill( 247, 241, 250);
 ellipse(550 , 330, 55 ,55 );  
 // bottom middle plate 
 fill( 247, 251, 250);
 ellipse(445 , 330, 55 ,55 );
 // bottom left plate 
  fill( 247, 251, 250);
 ellipse(345 , 330, 55 ,55 );
 
 }
 

