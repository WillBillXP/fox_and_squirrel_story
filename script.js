/**Area for inputing the game's script
 * */

//framecount,speed,basename,type,character
var geofWalk = new animation(3,1, "assets/geoffrey/geoff_walk_" , ".png" , geof);
var geofTalk = new animation(2,1,"assets/geoffrey/geoff_talk_",".png",geof);
var geofIdle = new animation(0,1,"assets/geoffrey/geoff_idle_",".png",geof);
var geof = new character(460,820,0,0, geofIdle);

var barthWalk = new animation(8,10,"assets/bartholameu/barth_walk",".png",barth);
var barth = new character(820,800,0,0,barthWalk);

//playAnimation(barthWalk);
//playAnimation(geofWalk);
setScale(geof, -1, 1);
//setVelocity(geof, 3,0);

//setScale(barth, 1,1);
//setVelocity(barth, -8,0);


var geofFont = new messageStyle('24pt Calibri','black','white',3,2);
var barthFont = new messageStyle('24pt Helvetica', 'red', 'black',-2,-1);

var b1 = new message(barth, "Now Geoffrey, I'll teach you how to catch a squirrel", barthFont);
var g1 = new message(geof, "I like pudding!", geofFont);
var b2 = new message(barth, ".......", barthFont);
var g2 = new message(geof, ":D", geofFont);
var b3 = new message(barth, "First you must climb a tree. Then you-", barthFont);
var g3 = new message(geof, "Pink fluffy unicorns dancing on rainbows!", geofFont);
var b4 = new message(barth, "Why'd the alpha fox stick me with YOU!?", barthFont);

//Put the game's main script and code here

var i = -1;
var counter = 0;
var timer = .2;
var timeline = [

	function() {playMessage(b1, 12*4); timer = 4;},
	function() {playMessage(g1, 12*4); timer = 4;},
	function() {playMessage(b2, 12*6); timer = 1;},
	function() {playMessage(g2, 12*2); timer = 3;},	
	function() {playMessage(b3, 12*4); timer = 4;},
	function() {playMessage(g3, 12*4); timer = 5;},
	function() {playMessage(b4, 12*5); timer = 0.6;},
	function() {setScale(barth, -1,1);},
	function() {playAnimation(barthWalk); setVelocity(barth,8,0); timer = 1;},
	function() {mouse.enable = true;}
	
];

mouse.enable = true;
runScript = function(){
	counter++;
	if (counter >= 12 * timer){ 
		i++;
		counter = 0;
		timeline[i]();
	}
	
	if (geof.x >= mouse.x && mouse.enable && geofDir == RIGHT){
		stopAnimation(geofWalk);
		setAnimation(geof,geofIdle);
		playAnimation(geofIdle);
		setVelocity(geof,0,0);
		geofDir = LEFT;
	}
	if (geof.x <= mouse.x && mouse.enable && geofDir == LEFT){
		stopAnimation(geofWalk);
		setAnimation(geof,geofIdle);
		playAnimation(geofIdle);
		setVelocity(geof,0,0); 
		geofDir = RIGHT;
	}
};

var LEFT = 0;
var RIGHT = 1;
var geofDir;
clickDown = function()
{	
	if (mouse.enable){
		if (geof.x < mouse.x - geof.v_x){
			setScale(geof,-1,1);
			setAnimation(geof,geofWalk);
			playAnimation(geofWalk);
			setVelocity(geof, 16,0);
			geofDir = RIGHT;
		}
		else if (geof.x-1 > mouse.x){
			setScale(geof,1,1);
			setAnimation(geof,geofWalk);
			playAnimation(geofWalk);
			setVelocity(geof, -16,0);
			geofDir = LEFT;
		}
	}
};

clickUp = function()
{
	
};