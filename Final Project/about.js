function setup()
{   
    createCanvas(800, 400);
    //sets units of angles to be in degrees for arc
    angleMode(DEGREES);
  
}
function draw () {
 fill(28,27,28 );
 rect(30, 20, 655, 295);
 //middle plate on theleft
 fill( 247, 248, 250);
 ellipse(90 , 155, 55 ,55 );
 //top left plate 
 fill( 247, 251, 250);
 ellipse(220 , 90, 55 ,55 );
 //top middle plate
  fill( 247, 251, 250);
 ellipse(320 , 90, 55 ,55 );
 //top right plate 
  fill( 247, 251, 250);
 ellipse(425 , 90, 55 ,55 );
 //middle right plate 
  fill( 247, 251, 250);
 ellipse(550 , 155, 55 ,55 );
     // bottom right plate
  fill( 247, 251, 250);
 ellipse(425 , 250, 55 ,55 );  
 // bottom middle plate 
 fill( 247, 251, 250);
 ellipse(320 , 250, 55 ,55 );
 // bottom left plate 
  fill( 247, 251, 250);
 ellipse(220 , 250, 55 ,55 );
 

}


