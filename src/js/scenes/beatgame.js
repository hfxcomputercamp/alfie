/**************************************************************************************
	DEFINE SCENE:
	This is where we define the scene that can then be called at any time from other 
	parts of our code.
**************************************************************************************/
Crafty.defineScene("beatGame", function() {
	// Reset Viewport
	Crafty.viewport.x = 0;
	
	var level = game_man.level;
	var score = game_man.score;
	
	// Labels
	Crafty.e("congratsLbl");
	Crafty.e("beatGameLbl");
	Crafty.e("scoreLbl");
	Crafty.e("onLevelLbl");
	
	// Show what level the player was on
	Crafty.e("" + level + "")
		.attr({
			x: 325,
			y: 300
		});
		
	// Show the player's score
	var numPos = 590;
	var scoreString = score.toString();
	var scoreArray = scoreString.split("");
	
	for (index = 0; index < scoreArray.length; ++index) {
		if(index > 0) {
			numPos += 35;
		}
		Crafty.e("" + scoreArray[index] + "")
			.attr({
				x: numPos,
				y: 303
			});
	}
	
	game_man.level = 1;
	game_man.score = 0;
	
	// The button to play again
	Crafty.e("replay");
});