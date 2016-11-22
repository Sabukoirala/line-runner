var inertval;
function BackgroundObstacle(){    
  var y;
  var x ;
  var counter=0;
  var element;
  var background = document.getElementsByClassName('background-window')[0];  
  var playerBox= document.getElementsByClassName('player')[0]; 
  

  this.init= function(){
    element = document.createElement('div');
    element.className= 'obstacle';    
    background.appendChild(element);     
  }

  this.getRandomX = function(i) {
    x=((i*150)+60)+150;
  }

  
  this.setXPosition= function(_x){
    x= _x ;     
  }

  this.getXPosition= function(){  
    return x;    
  }

  this.setYPosition= function(_y){
    y=_y;
  }  

    
  this.drawObstacle= function(){    
   element.style.left = x + 'px';
   element.style.bottom= y + 'px';   
  }  

  this.detectUpperCollision = function(){
    counter++;
    if(x<60 && playerBox.offsetTop<=390){
      clearInterval(interval);
     
      document.getElementsByClassName('banner')[0].style.display = "block";
      document.getElementsByClassName('banner-score')[0].innerHTML = 'Your Score: '+counter
      
    }
  } 

  this.detectLowerCollision= function(){
    counter++;
    bottomOffset= 430-playerBox.offsetTop;   
    if(x<60 && bottomOffset<60){
      clearInterval(interval); 
     
      document.getElementsByClassName('banner')[0].style.display = "block";
      document.getElementsByClassName('banner-score')[0].innerHTML = 'Your Score: '+counter;  

    } 

  }
}

function KeyControl(){
  var playerBox= document.getElementsByClassName('player')[0]; 
  window.onkeydown = function(e) {

    var keyPress = e.keyCode;     
  
    switch(keyPress) {
      case 38:
         playerBox.style.bottom= '60px';
         playerBox.src = 'images/jumping.png';
        break;
      case 40:
           playerBox.style.bottom= '40px';
           playerBox.src = 'images/roll.gif';
           
        break;
    }

    e.preventDefault();   
  };
  window.onkeyup = function(e) {

    var keyRelease = e.keyCode;     
  
    switch(keyRelease) {
      case 38:
         playerBox.style.bottom= '40px';
         playerBox.src = 'images/gif1.gif';
        break;
      case 40:
           playerBox.style.bottom= '40px';
         playerBox.src = 'images/gif1.gif';
        break;
    }

    e.preventDefault();   
  };
}


function GameOperation() { 
  var STEP= 10;
  var obj = new KeyControl();
  var obstacles = [];  
  var counter=0;
  var playerBox= document.getElementsByClassName('player')[0]; 

  this.init = function(){
    for(var i=0; i<5; i++){
     obstacles[i] = new BackgroundObstacle();
     obstacles[i].init();
     obstacles[i].getRandomX(i);
    }
   interval = setInterval(moveObstacle,50);
  } 

  
  var moveObstacle = function(){     

    counter++;
    document.getElementsByClassName('score')[0].innerHTML = 'Your Score: '+counter; 
    for(var i = 0; i < 5; i++) {

     switch (i) {

      case 0:      
        bottomOffset= 430-playerBox.offsetTop;    
        var newX = obstacles[i].getXPosition() - STEP;       
        obstacles[i].setXPosition(newX);  
        obstacles[i].setYPosition(40);         
        obstacles[i].drawObstacle(); 
        obstacles[i].detectLowerCollision();       
       
        if(newX<10) {
          obstacles[i].setXPosition(750); 
        }     
        break;
      case 1:
        var newX = obstacles[i].getXPosition() - STEP;
        obstacles[i].setXPosition(newX);  
        obstacles[i].setYPosition(90); 
        obstacles[i].drawObstacle(); 
        obstacles[i].detectUpperCollision();
        
        if(newX<10){
          obstacles[i].setXPosition(Math.floor(Math.random()*(900-850+1)+850)); 
        }
        break; 
      case 2:
        var newX = obstacles[i].getXPosition() - STEP;
        obstacles[i].setXPosition(newX);  
        obstacles[i].setYPosition(90); 
        obstacles[i].drawObstacle();        
        obstacles[i].detectUpperCollision();
        
        if(newX<10){
          obstacles[i].setXPosition(Math.floor(Math.random()*(900-850+1)+850)); 
        }
        break; 
      case 3:            
        var newX = obstacles[i].getXPosition() - STEP;       
        obstacles[i].setXPosition(newX);  
        obstacles[i].setYPosition(40);         
        obstacles[i].drawObstacle(); 
        obstacles[i].detectLowerCollision();        
       
        if(newX<10) {
          obstacles[i].setXPosition(1000); 
        }     
        break; 
      case 4:          
        var newX = obstacles[i].getXPosition() - STEP;       
        obstacles[i].setXPosition(newX);  
        obstacles[i].setYPosition(40);         
        obstacles[i].drawObstacle(); 
        obstacles[i].detectLowerCollision();       
       
       
        if(newX<10) {
          obstacles[i].setXPosition(900); 
        }     
        break;  
      
      default:         
       
      }               
    }
  } 
}

new GameOperation().init(); 

 
