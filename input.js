/**input.js
 * 
 * Input system for the game
 */

mouse = {};
	mouse.x = null;
	mouse.y = null;
	mouse.down = false;
	mouse.enable = false;

mouse.getPos = function(canvas, evt) {
        var rect = canvas.getBoundingClientRect();
        return {
          x: evt.clientX - rect.left,
          y: evt.clientY - rect.top
        };
};

mouse.downEvent = function(){
	canvas.addEventListener('mousedown', function(evt) {
	        var mousePos = mouse.getPos(canvas, evt);
			mouse.x = mousePos.x; 
			mouse.y = mousePos.y;
			mouse.down = true;
			
			clickDown();
			
	      }, false);
};

mouse.upEvent = function(){
	canvas.addEventListener('mouseup', function(evt){
		mouse.down = false;
		clickDown();
	}, false);
};

clickArea = function(x1,y1,x2,y2){
	if (x1 <= mouse.x && mouse.x <= x2 && y1 <= mouse.y && mouse.y <= y2 && mouse.down)
		{context.fillText("test", x2, y2);
		return true;}
	return false;
};
