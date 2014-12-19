MainLoop = function(){
	setInterval(function(){
		runScript();
		drawBackground();		    
		updateCharacter();
		updateText();
			
	},1000/framerate);
};

var test = false;

mouse.downEvent();
mouse.upEvent();      
MainLoop();

