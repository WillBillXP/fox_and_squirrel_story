
//var animationList = []; //list of animations to cycle through and draw

/**animation constructor
 * 
 * auto-creates animation frames based on source 
 * 
 * @param framecount -- Number of frames in the animation 
 * @param speed -- Default speed of animation. A higher number equals a slower speed
 * @param basename -- Base source name of animation.
 * @param type -- file extension type (.png, .jpg, .gif, etc.)
 * @param character -- character object associated with this animation
 */
function animation(framecount,speed,basename,type){
	"use strict";
	this.framecount = framecount;
	this.speed = speed;
	this.playing = false; //set to true to play, false to not play.
	this.currentframe = 0; //current frame of animation being drawn to canvas
	//animationList[animationList.length] = this; //add animation to list
	this.frame = [];
	
	for (var i = 0; i <= framecount; i++){
		var img = new Image();
		img.src = basename + i.toString() + type;
		this.frame[i] = img; 
	}
}

/**Play an animation
 * 
 * @param {Object} animation -- name of animation to be played
 */
playAnimation = function(animation){
	animation.playing = true;
};

/**Stop an animation
 * 
 * @param {Object} animation -- name of animation to be stopped
 */
stopAnimation = function(animation){
	animation.playing = false;
};

/**Cycle through animations list and draw to canvas
 
animationsCycle = function(x,y){
	for (var i = 0; i < animationList.length; i++){
		if (animationList[i].playing){
			animationList[i].currentframe++;
			if (animationList[i].currentframe >= animationList[i].framecount) animationList[i].currentframe = 0;
		}
		context.drawImage(animationList[i].frame[animationList[i].currentframe], x, y);
	}
};
*/ 
