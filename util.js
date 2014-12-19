/*util.js
 *
 * JS file for broad utility methods.
 * Some game engine variables and constants are also defined here.
 * */

var canvas = document.getElementById("canvas");
var context = canvas.getContext("2d");

var background  = new Image();
background.src = "assets/background_1.1.png";

var framerate = 12;

var step = new Event('build,');

/**
 * Draw Background Image
 * */
drawBackground = function(){
	context.drawImage(background,0,0);
};

/**
 * Change source of the background object
 * @param source -- source file of background.
 */
changeBackground = function(source){
	background.src = source;
};
