//character.js

var characterList = []; //master list of characters in the game

/**Create a game character
 * @param x -- initial x position
 * @param y -- initial y position
 * @param x_offset -- offset of animation sprite on the horizontal plane relative to x
 * @param y_offset -- offset of animation sprite on the vertical plane relative to y
 * @param animation -- default animation associated with a character
 */
function character(x,y,x_offset,y_offset,animation){
	"use strict";
	this.x = x;		//x position on screen
	this.y = y; 	//y position on screen
	this.x_offset = x_offset;	//offset of sprite relative to x
	this.y_offset = y_offset;	//offset of sprite relative to y
	this.animation = animation;	//current animation character is using
	this.v_x = 0;	//x velocity of character. Initialized to zero
	this.v_y = 0;	//y velocity of character. Initialized to zero]
	this.scale_x = 1; //set scale_x to -1 to flip image
	this.scale_y = 1; //same as scale_x
	this.height = animation.frame[0].height;
	this.width = animation.frame[0].width;
	characterList[characterList.length] = this;	//add to the master character list
}

/**Set the persistant velocity of a character
 * @param character -- name of character
 * @param v_x -- value of the horizontal velocity to be set; set 1 to tie character to frame rate
 * @param v_y -- value of the vertical velocity to be set;
 */
setVelocity = function (character, velocityX, velocityY){
	character.v_x = velocityX;
	character.v_y = velocityY;
};

/**Set scale to 1 for a normal image.
 * Set scale to -1 to scale it
 * */
setScale = function (character, scaleX, scaleY){
	character.scale_x  = scaleX;
	character.scale_y = scaleY;
};

setAnimation = function(character,animation){
	character.animation = animation;
};

/**
 * Update all the character's positions and animation frames
 */
updateCharacter = function(){	
	for (var i = 0; i < characterList.length; i++){
		var canim = characterList[i].animation;
		if (canim.playing){
			canim.currentframe++;
			if (canim.currentframe >= canim.framecount) canim.currentframe = 0;
		}
		characterList[i].x += characterList[i].v_x;
		characterList[i].y += characterList[i].v_y;
		
		context.scale(characterList[i].scale_x, characterList[i].scale_y);		
		
		var scaleoffset_w = 0;
		if (characterList[i].scale_x == -1) scaleoffset_w = characterList[i].width;
		context.drawImage(canim.frame[canim.currentframe], 
			(characterList[i].x) * characterList[i].scale_x - scaleoffset_w, 
			(characterList[i].y) * characterList[i].scale_y);

		context.scale(characterList[i].scale_x, characterList[i].scale_y);
	}
};
