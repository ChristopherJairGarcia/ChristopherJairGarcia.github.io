let mousepressed = false; 
let leftplate = false;
let x1 = 325;
let y1 = 175;
let size1 = 55;
let size2 = 55;

function setup()
{   
    createCanvas(800, 400);
    //sets units of angles to be in degrees for arc
    angleMode(DEGREES);
  
  
}
function draw () {
  background(' #90AFC5');
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
   
       if (mousepressed &&  mouseX > 160 && mouseX < 270 && mouseY > 185 && mouseY <295   )
     {
         leftplate = !leftplate;
         if (leftplate){
             x1 = 325;
             y1 = 295;
             size1 = 450;
             size2 = 400;
            
         }
         else{
            x1 = 325;
            y1 = 175;
            size1 = 55;
            size2 = 55;
         }
         ellipse(x1, y1, size1, size2 );
     
         
     }
    
    
    
 //top left plate 
 fill( 247, 251, 250);
ellipse(x1, y1, size1, size2 );
     if (mousepressed &&  mouseX > 585 && mouseX < 695 && mouseY > 120 && mouseY <230   )
     {
         leftplate = !leftplate;
         if (leftplate){
             x1 = 325;
             y1 = 295;
             size1 = 450;
             size2 = 400;
             
         }
         else{
            x1 = 325;
            y1 = 175;
            size1 = 55;
            size2 = 55;
         }
         ellipse(x1, y1, size1, size2 );
     
         
     }
    
    
 //top middle plate
  fill( 247, 251, 250);
 ellipse(435 , 175, 55 ,55 );
  
       if (mousepressed &&  mouseX > 120 && mouseX < 230 && mouseY > 380 && mouseY <490   )
     {
         leftplate = !leftplate;
         if (leftplate){
             x1 = 325;
             y1 = 295;
             size1 = 450;
             size2 = 400;
            
         }
         else{
            x1 = 325;
            y1 = 175;
            size1 = 55;
            size2 = 55;
         }
         ellipse(x1, y1, size1, size2 );
     
         
     }
    
    
 //top right plate 
  fill( 247, 251, 250);
 ellipse(540 , 175, 55 ,55 );
     if (mousepressed &&  mouseX > 485 && mouseX < 595 && mouseY > 120 && mouseY < 230 )
         
       if (mousepressed &&  mouseX > 485 && mouseX < 595 && mouseY > 120 && mouseY <230   )
     {
         leftplate = !leftplate;
         if (leftplate){
             x1 = 325;
             y1 = 295;
             size1 = 450;
             size2 = 400;
           
         }
         else{
            x1 = 325;
            y1 = 175;
            size1 = 55;
            size2 = 55;
         }
         ellipse(x1, y1, size1, size2 );
     
         
     }
 //big oval in the middle 
  fill( 247, 238, 250);
  ellipse(440 , 235, 115 ,53 );
    
  
 //middle right plate 
  fill( 247, 251, 250);
 ellipse(640 , 240, 55 ,55 );
    if (mousepressed &&  mouseX > 585 && mouseX < 695 && mouseY >185  && mouseY < 295  )
   
 // bottom right plate
  fill( 247, 341, 250);
 ellipse(540 , 295, 55 ,55 ); 

      if (mousepressed &&  mouseX > 485 && mouseX < 595 && mouseY > 240 && mouseY <350   )
     {
         leftplate = !leftplate;
         if (leftplate){
             x1 = 325;
             y1 = 295;
             size1 = 450;
             size2 = 400;
          
         }
         else{
            x1 = 325;
            y1 = 175;
            size1 = 55;
            size2 = 55;
         }
         ellipse(x1, y1, size1, size2 );
     
         
     }
 // bottom middle plate 
 fill( 247, 251, 250);
 ellipse(435 , 295, 55 ,55 );
    
       if (mousepressed &&  mouseX > 380 && mouseX < 490 && mouseY > 240 && mouseY <350   )
     {
         leftplate = !leftplate;
         if (leftplate){
             x1 = 325;
             y1 = 295;
             size1 = 450;
             size2 = 400;
             
         }
         else{
            x1 = 325;
            y1 = 175;
            size1 = 55;
            size2 = 55;
         }
         ellipse(x1, y1, size1, size2 );
     
         
     }
 // bottom left plate 
  fill( 247, 251, 250);
fill( 247, 251, 250);
 ellipse(325 , 295, 55 ,55 );
 
    if (mousepressed &&  mouseX >270 && mouseX <380 && mouseY > 240 && mouseY < 350 )
      if (mousepressed &&  mouseX > 270 && mouseX < 380 && mouseY > 240 && mouseY <350   )
     {
         leftplate = !leftplate;
         if (leftplate){
             x1 = 325;
             y1 = 295;
             size1 = 450;
             size2 = 400;
             
             
         }
         else{
            x1 = 325;
            y1 = 175;
            size1 = 55;
            size2 = 55;
         }
         ellipse(x1, y1, size1, size2 );
     
         
     }
 }
function mouseClicked (){
    mousepressed = !mousepressed;
    console.log(mousepressed);
}
 

