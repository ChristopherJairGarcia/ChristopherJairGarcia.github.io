let mousepressed = false; 
let leftplate = false;
let plate1 = false;
let plate3 = false;
let plate4 = false;
let plate5 = false;
let plate6 = false;
let plate7 = false;
let plate8 = false;

let size1 = 55;
let size2 = 55;
let size5 = 55;
let size6 = 55;
let size9 = 55;
let size10 = 55;
let size11 = 55;
let size12 = 55;
let size13 = 55;
let size14 = 55;
let size15 = 55;
let size16 = 55;
let size17 = 55;
let size18 = 55; 
let size19 = 55; 
let size20 = 55;

function setup()
{   
    createCanvas(800, 400);
    //sets units of angles to be in degrees for arc
    angleMode(DEGREES);
    img = loadImage("AP_MercuryMines.gif");
  
}
function draw () { 
    let s = 'Mercury is considered to be one of the major environmental pollutants, is widely used in industry, agriculture, and medicine, and circulates in ecosystems, but is never destroyed.';
    
    let c= 'Human exposure to these chemicals at toxic levels has been linked to numerous health effects including cancers, cardiovascular disease , kidney and liver dysfunction, hormonal imbalances, reproductive disorders, and birth defects. ';
    
    let x = 'Most mercury pollution is released into the air and then falls directly into water bodies or onto land, where it can be washed into waterways. When mercury gets into water, bacteria can change it into a form called methylmercury, which is absorbed by tiny aquatic organisms.';
    
    let g = 'Mercury compounds have been used as skin ointments to treat skin infection, and in developing countries, they have been applied to the treatment of skin sores from syphilis';
    
    let d= 'Human-caused emissions include mercury released from fuels or raw materials, or from uses in products or industrial processes for example factories. Mercury enters the environment as a result of the normal degradation of minerals in rocks and soil from exposure to wind, water, and volcanic activity. Children are susceptible to the effects of toxic exposure due to their more permeable blood-brain barrier.Mercury enters the environment as a result of the normal degradation of minerals in rocks and soil from exposure to wind, water, and volcanic activity. Children are susceptible to the effects of toxic exposure due to their more permeable blood-brain barrier.';


    
  background('#E7BC04');
    //table color
 fill( 51 );
 rect(100, 90, 655, 295);
 //table cloth
 strokeWeight(4);
stroke(247, 248, 250);
fill(145, 36, 181);
rect(150,120,550,230);  

  // middle plate on the left 
 fill( 247, 251, 250);
ellipse(215, 240, size1, size2 );
     if (mouseX > 280 && mouseX < 350 && mouseY > 240 && mouseY <320   )
     {
         
         if (leftplate){
           
             size1 = 450;
             size2 = 400;
             
         }
         else{
           
            size1 = 55;
            size2 = 55;
         }
         
     }
   
   
      // top left plate 
 fill( 247, 251, 250);
 ellipse(325, 175, size5, size6 );
 
   
      if (mouseX > 300 && mouseX < 350 && mouseY > 150 && mouseY <200){ 
     
         if (plate1){
             
             size5 = 450;
             size6 = 400;
              textSize(16);
             fill(50);
             text(s, 150,100,400,90);
             
         }
         else{
          
            size5 = 55;
            size6 = 55;
         }
         
     }

 //top middle plate
  fill( 247, 251, 250);
 ellipse(435 , 175, size9, size10);
  
       if (  mouseX > 400 && mouseX < 445 && mouseY > 135 && mouseY <195 )
     {
         if (plate3){
           
             size9 = 450;
             size10 = 400;
             textSize(16);
             fill(50);
             text(d,250,70,390,160);
           
             
         }
         else{
           
            size9 = 55;
            size10 = 55;
         }
     
     }
  
    
 //top right plate 
  fill( 247, 251, 250);
 ellipse(540 , 175, size11, size12 );
         
       if ( mouseX > 505 && mouseX < 585 && mouseY > 150 && mouseY <195 )
     {
        
         if (plate4){
            
             size11 = 450;
             size12 = 400;
             textSize(16);
             fill(50);
             text(x,335,70,410,160);
           
         }
         else{
        
            size11 = 55;
            size12 = 55;
         }
       
     }  
    
 //big oval in the middle 
  fill( 247, 238, 250);
  ellipse(440 , 235, 115, 53 );
    
   
 //middle right plate 
  fill( 247, 251, 250);
 ellipse(640 , 240, 55 ,55 );
    if (  mouseX > 605 && mouseX < 675 && mouseY >205  && mouseY < 285  ) {
        
         if (plate5){
            
             size13 = 450;
             size14 = 400;
             
         }
         else{
        
            size13 = 55;
            size14 = 55;
         }
        
    }

 // bottom right plate
  fill( 247, 341, 250);
 ellipse(540 , 295, size15, size16 ); 

      if (mouseX > 485 && mouseX < 595 && mouseY > 240 && mouseY <350 )
     {
        
         if (plate6){
            
             size15 = 450;
             size16 = 400;
            textSize(16);
             fill(50);
             text(g,360,190,390,160);
         }
         else{
            
            size15 = 55;
            size16 = 55;
         }
         
     }

// // bottom middle plate 
 fill( 247, 251, 250);
 ellipse(435 , 295, size17 ,size18 );
    
       if (mouseX > 380 && mouseX < 490 && mouseY > 240 && mouseY <350   )
     {
       
         if (plate7){
             
             size17 = 450;
             size18 = 400;
             textSize(14);
             fill(50);
             text(c, 300, 180, 340 ,160);
                         
         }
         else{
            
            size17 = 55;
            size18 = 55;
         }

     }

// // bottom left plate 
  fill( 247, 251, 250);
 ellipse(325 , 295, size19, size20 );
    
  if (mouseX > 300 && mouseX < 340 && mouseY > 250 && mouseY <310   )
     {
         
         if (plate8){
           
             size19 = 400;
             size20 = 400;
            image(img, 0, 8/2, img.width /2, img.height/2);
                  
         }
         else{
           
            size19 = 55;
            size20 = 55;
         }
     }
    
     }
   function mouseClicked() {
    leftplate = !leftplate;
    plate1 = !plate1;
    plate3 = !plate3;
    plate4 = !plate4;
    plate5 = !plate5; 
    plate6 = !plate6;
    plate7 = !plate7;
    plate8 = !plate8;         
    }

