/**************************************************************************************
	DEFINE SCENE:
	This is where we define the scene that can then be called at any time from other 
	parts of our code.
**************************************************************************************/
Crafty.defineScene("gameover", function() {
	// Reset Viewport
	Crafty.viewport.x = 0;
	
	var level = game_man.level;
	var score = game_man.score;
	
	// Labels
	Crafty.e("gameOverLbl");
	Crafty.e("onLevelLbl");
	Crafty.e("scoreLbl");
	
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
		
	// The button to play again
	Crafty.e("replay");
});