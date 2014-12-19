//text.js

var messageQueue = [];

/**Style attributes for messages
 * 
 * @param {Object} font -- name of font and size as a string attribute
 * @param {Object} color1 -- back color for backshadowed font
 * @param {Object} color2 -- front color for backshadowed font
 * @param {Object} seperation -- degree of seperation between color1 and color2 messages
 */
function messageStyle(font,color1,color2, offset_x, offset_y){
	this.font = font;
	this.color1 = color1;
	this.color2 = color2;
	this.offset_x = offset_x;
	this.offset_y = offset_y;
}

/**Messages (strings) to display on screen
 * 
 * @param {Object} string -- enter string to be displayed
 * @param {Object} style -- style object associated with message
 */
function message(character,string,style){
	this.string = string;
	this.style = style;
	this.display = false; //set to true when being displayed
	this.tick = 0; //when tick reaches zero, stop displaying message
	this.x = 0;
	this.y = 0;
	this.started = false; //set to true when message is being played
	this.finished = false; //set to true when message is done playing
	this.character = character;
}


/**Display message on screen
 * 
 * @param {Object} message -- message object to be displayed
 * @param {Object} time -- time message should be displayed for
 * @param {Object} character -- character message should appear over
 */

playMessage = function(message, time){
	message.display = true;
	message.started = true;
	message.tick = time;
	messageQueue[messageQueue.length] = message;
};

stopMessage = function(message){
	
};



/**
 * Cycle through the message queue and play ones where display has been set to true
 * First write color 1 to canvas, then color 2 slightly seperated to give a drop shadow effect
 * Set playing to true when the message tick has reached zero
 */
updateText = function(){
	for (var i = 0; i <= messageQueue.length; i++){
		var m = messageQueue[i];
		if (m.display){
			m.x = m.character.x + m.character.x_offset;
			m.y = m.character.y + m.character.y_offset;
			context.font = m.style.font;
        	context.fillStyle = m.style.color1;
        	context.fillText(m.string, m.x, m.y);
        	context.fillStyle = m.style.color2;
        	context.fillText(m.string, m.x + m.style.offset_x, m.y + m.style.offset_y);			
			m.tick--;
			if (m.tick <= 0){
				m.display = false;
				m.tick = 0;
				stopMessage(m);
			}
		}
	}
};
