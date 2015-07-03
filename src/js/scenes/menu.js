Crafty.defineScene("menu", function() {
	// Title / Logo Image
	Crafty.e("title");
	
	// Play Button
	Crafty.e("play");
	
	// Audio
	Crafty.audio.play("menubg", -1, 0.3);
	
	// Calculate the number of tiles needed
	var numTiles = Math.ceil(game_man.width / 42);
	
	// Create as many ground entities as we need to stretch the whole scene
	for(tiles = 0; tiles <= numTiles; tiles++) {
		Crafty.e('groundGrass')
			.attr({
				x: game_man.numTiles * 40,
				y: game_man.height - 40
			});
			
		game_man.numTiles++;
	}
});