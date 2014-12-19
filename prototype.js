/**game.js**/


//FOX: game object containing properties for a fox character
var FOX = {};
FOX.frame = [];
	FOX.frame[0] = new Image();
	FOX.frame[0].src = "assets/geoffrey/fox_walk_f1.jpg";
	FOX.frame[1] = new Image();
	FOX.frame[1].src = "assets/geoffrey/fox_walk_f2.jpg";
	FOX.frame[2] = new Image();
	FOX.frame[2].src = "assets/geoffrey/fox_walk_f3.jpg";
	FOX.frame[3] = new Image();
	FOX.frame[3].src = "assets/geoffrey/fox_walk_f4.jpg";
	FOX.frame[4] = new Image();
	FOX.frame[4].src = "assets/geoffrey/fox_walk_f5.jpg";
	FOX.frame[5] = new Image();
	FOX.frame[5].src = "assets/geoffrey/fox_walk_f6.jpg";
	FOX.frame[6] = new Image();
	FOX.frame[6].src = "assets/geoffrey/fox_walk_f7.jpg";

	FOX.X = 300;
	FOX.Y = 200;

var move = false;

var background  = new Image();
background.src = "assets/background_scale.png";
context.drawImage(background,0,0);
//context.scale(-1,-1);

context.drawImage(FOX.frame[0], FOX.X - 92, FOX.Y - 64);
//context.fillStyle = "#0084b5"
var f  = 0;
var f_delay = 0;

//var x_dest = 300;
//var y_dest = 100;
var walk_count;
var walk_mod;
var step = 0;

var x_to = 0;
var y_to = 0;

var scale = false;

MainLoop = function(){
	setInterval(function(){    
		if (move){
			MoveFox(x_to, y_to);
		}
		
	},1000/50);
};

MoveFox = function(x_dest, y_dest){

    	context.fillStyle = "#0084b5";
		//context.fillRect(FOX.X - 60, FOX.Y - 60, 128, 64);
		
		//Temporary Moving Code until I figure out how to get the fox to move in straight lines properly
		if 		(FOX.X < x_dest && FOX.Y < y_dest){FOX.X++; FOX.Y++;}
		else if (FOX.X > x_dest && FOX.Y > y_dest){FOX.X--; FOX.Y--;}

		else if (FOX.X > x_dest && FOX.Y < y_dest){FOX.X--; FOX.Y++;}
		else if (FOX.X < x_dest && FOX.Y > y_dest){FOX.X++; FOX.Y--;}
		
		else if (FOX.Y == y_dest && FOX.X < x_dest){FOX.X++; canvas.scale(-1,1); scale = true;}
		else if (FOX.Y == y_dest && FOX.X > x_dest){FOX.X--;}

		else if (FOX.X == x_dest && FOX.Y < y_dest){FOX.Y++;}
		else if (FOX.X == x_dest && FOX.Y > y_dest){FOX.Y--;}

		if ( FOX.X == x_dest && FOX.Y == y_dest) move = false;

/*
		step++;
		if (FOX.X <= x_dest && FOX.Y <= y_dest){
			if (step < walk_count) {
				FOX.X++;
				}
			else {
				FOX.Y++; 
				step = 0;
				}
		}
		else if (FOX.X <= x_dest && FOX.Y > y_dest){// && FOX.Y <= y_dest){
			if (step < walk_count) {FOX.X++;}
			else { FOX.Y--; step = 0;}
		}

		else if (FOX.X >= x_dest && FOX.Y > y_dest){// && FOX.Y <= y_dest){
			if (step < walk_count) {FOX.X--;}
			else { FOX.Y--; step = 0;}
		}
		else if (FOX.X >= x_dest && FOX.Y < y_dest){
			if (step < walk_count) {FOX.X--;}
			else { FOX.Y++; step = 0;}
		}			

		else if (FOX.X <= x_dest && FOX.Y == y_dest){FOX.X++;}
		else if (FOX.X >= x_dest && FOX.Y == y_dest){FOX.X--;}
			
		if (y_dest > x_dest) {
			walk_count = y_dest/x_dest;
			walk_mod = y_dest % x_dest;	
			step++;
			if (FOX.Y <= y_dest && FOX.X < x_dest){
				if (step < walk_count) {FOX.Y++;}
				else { FOX.X++; step = 0;}
			}
			else if (FOX.Y <= y_dest && FOX.X == x_dest){FOX.Y++;}
			else if (FOX.Y > y_dest && FOX.X == x_dest){FOX.Y--;}

		}
		*/

	    //context.drawImage(background, 0, 0);
		f_delay++;
		
		switch(f_delay){
			case 10:
				f = 1; break;
			case 20:
				f = 2; break;
			case 30:
				f = 3; break;
			case 40:
				f = 4; break;
			case 50:
				f = 5; break;
			case 60:
				f = 6; break;
			case 70:
				f = 0; f_delay = 0; break;
				
		}

		context.drawImage(FOX.frame[f], FOX.X - 64, FOX.Y - 64);
		
		if (scale == true){
			scale = false;
			context.drawImage(FOX.frame[f], -FOX.X, -FOX.Y);
			context.scale(-1, 1);
		}

//        if (f_delay > 20) {f = 1;}
//        if (f_delay > 40) {f = 0; f_delay = 0;}
//		  context.fillText('FOX.X: '+FOX.X+' FOX.Y: '+FOX.Y+' Walk Mod: '+ walk_mod, 360, 360);
};


//Code taken from http://www.html5canvastutorials.com/. You guys are the best!
function writeMessage(canvas, message) {
        var context = canvas.getContext('2d');
        context.clearRect(0, 348, canvas.width, 16);
        context.font = '8pt Calibri';
        context.fillStyle = "black";
        context.fillText(message, 2, 355);
};
      
function getMousePos(canvas, evt) {
        var rect = canvas.getBoundingClientRect();
        return {
          x: evt.clientX - rect.left,
          y: evt.clientY - rect.top
        };
}

canvas.addEventListener('mousedown', function(evt) {
        var mousePos = getMousePos(canvas, evt);
        if (mousePos.x > mousePos.y) {
			walk_count = mousePos.x / mousePos.y;
			walk_mod = mousePos.x % mousePos.y;
			//FOX.X+=walk_mod;
		}
		else if (mousePos.x < mousePos.y){
			walk_count = mousePos.y / mousePos.x;
			walk_mod = mousePos.y % mousePos.x;			
		}
		x_to = mousePos.x; 
		y_to = mousePos.y;
		move = true;
        var message = 'Mouse position: ' + mousePos.x + ',' + mousePos.y
        	+ ' Walk Count: '+ walk_count +' Walk Mod: '+ walk_mod;

        //writeMessage(canvas, message);
	/*		
        context.scale(-1, 1);
		context.drawImage(FOX.frame[1], -x_to, y_to);
        context.scale(-1, 1);*/
      }, false);
  
MainLoop();