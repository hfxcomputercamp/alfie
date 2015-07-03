window.onload = function() {			
	/********************************************************************************************************
		INITIALIZE CRAFTY:
		Crafty is the "game engine" that we will be using. It is a set of 
		instructions that have already been written, that will control much
		of the game's logic.
	********************************************************************************************************/
	Crafty.init(game_man.width, game_man.height);
	
	/********************************************************************************************************
		SET VIEWPORT:
		The "viewport" is like the camera that follows the player around.
		It will only show part of the screen, as we set below.
	********************************************************************************************************/
	Crafty.viewport.bounds = {min:{x:0, y:0}, max:{x:game_man.width, y:game_man.height}};
	Crafty.background("#ADD5F8");
	
	// Loading Scene
	Crafty.enterScene("loading");
};