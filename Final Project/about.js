function setup()
{   
    createCanvas(800, 400);
    //sets units of angles to be in degrees for arc
    angleMode(DEGREES);  
    button = createButton('plate1');
  button.position(500, 19);
  button.mousePressed();
  button1 = createButton('plate2');
  button1.mousePressed();
  button2 = createButton('plate3');
  button2.mousePressed();
  button3 = createButton('plate4');
  button3.mousePressed();
  button4 = createButton('plate5');
  button4.mousePressed();
  button5 = createButton('plate6');
  button5.mousePressed();  
  button6 = createButton('plate7');
  button6.mousePressed();
  button7 = createButton('plate8');
  button7.mousePressed();
    
   
  
}
function draw () {
    //table color
 fill( 51 );
 rect(30, 20, 655, 295);
 //table cloth
 strokeWeight(4);
stroke(247, 248, 250);
fill(145, 36, 181);
rect(80,50,550,230);


 //middle plate on the left
 fill( 247, 248, 250);
 ellipse(145 , 175, 55 ,55 );
 //top left plate 
 fill( 247, 251, 250);
 ellipse(245 , 100, 55 ,55 );
 //top middle plate
  fill( 247, 251, 250);
 ellipse(345 , 100, 55 ,55 );
 //top right plate 
  fill( 247, 251, 250);
 ellipse(450 , 100, 55 ,55 );
 //middle right plate 
  fill( 247, 251, 250);
 ellipse(575 , 175, 55 ,55 );
 // bottom right plate
  fill( 247, 241, 250);
 ellipse(450 , 230, 55 ,55 );  
 // bottom middle plate 
 fill( 247, 251, 250);
 ellipse(345 , 230, 55 ,55 );
 // bottom left plate 
  fill( 247, 251, 250);
 ellipse(245 , 230, 55 ,55 );
 
 }
 

