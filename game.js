var keys = {};

//event listeners
addEventListener("keydown",
	function(e){
	keys[e.keyCode] = true;
	if((e.keyCode >= 37)&&(e.keyCode <= 40)){
		e.preventDefault();
	}
});

addEventListener("keyup",
function(e){
	delete keys[e.keyCode];
});


//holds all images for the game
var imageRepository = new function(){
	//background1
	this.background1 = new Image();
	this.background1.src = "background1.png";
	//player
	this.player = new Image;
	this.player.src = "player.png"
}

//base class for drawable objects
function Drawable(){
	this.init = function(x,y,image){
		this.x = x;
		this.y = y;
		this.image = image;
	}
	this.speed = 0;
	this.canvasWidth = 0;
	this.canvasHeight = 0;
}

//Background object, inherits from Drawable
function Background(){
	this.speed = 1;
	this.draw = function(){
		if (this.y >= this.canvasHeight) {
			this.y = 0;
		}
		this.ctx = document.getElementById("backgroundCanvas").getContext("2d");
		this.ctx.drawImage(this.image, this.x, this.y);
		this.ctx.drawImage(this.image, this.x, this.y - this.canvasHeight);
		this.y += this.speed;
	}
}
Background.prototype = new Drawable();

//Player object, inherits from Drawable
function Player(){
	this.speed = 4;
	this.draw = function(){
		this.ctx = document.getElementById("playerCanvas").getContext("2d");
		//this.ctx.clearRect;
		this.ctx.drawImage(this.image, this.x, this.y)
	}
	this.move = function(){
		if(38 in keys && this.y >=0){
			this.y -= playerSpeed;
		}
		if(40 in keys && this.y <= 575){
			this.y += playerSpeed;
		}
		if(39 in keys && this.x <= 775){
			this.x += playerSpeed;
		}
		if (37 in keys && this.x >= 0) {
			this.x -= playerSpeed;
		}
	}
}
Player.prototype = new Drawable();

function game(){
	//background initialisation
	background1 = new Background();
	background1.init(0,0,imageRepository.background1);
	background1.canvasWidth = document.getElementById("backgroundCanvas").width;
	background1.canvasHeight = document.getElementById("backgroundCanvas").height;

	setInterval(backgroundLoop, 1000/60);
	setInterval(playerLoop, 1000/60);

	function backgroundLoop(){
		background1.draw();
	}
	function playerLoop(){
		
	}
}