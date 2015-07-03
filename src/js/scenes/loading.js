/**************************************************************************************
	DEFINE ASSETS:
	Before we can load any assets we have to know what we're going to load.
**************************************************************************************/
var assetsObj = {
	"audio": {
		"mp3": [
			"audio/mp3/coin.mp3",
			"audio/mp3/gameover.mp3",
			"audio/mp3/gem.mp3",
			"audio/mp3/hit.mp3",
			"audio/mp3/jump.mp3",
			"audio/mp3/level1bg.mp3",
			"audio/mp3/levelcomplete.mp3",
			"audio/mp3/menubg.mp3",
			"audio/mp3/select.mp3"
		],
		"ogg": [
			"audio/ogg/coin.ogg",
			"audio/ogg/gameover.ogg",
			"audio/ogg/gem.ogg",
			"audio/ogg/hit.ogg",
			"audio/ogg/jump.ogg",
			"audio/ogg/level1bg.ogg",
			"audio/ogg/levelcomplete.ogg",
			"audio/ogg/menubg.ogg",
			"audio/ogg/select.ogg"
		],
		"wav": [
			"audio/wav/coin.wav",
			"audio/wav/gameover.wav",
			"audio/wav/gem.wav",
			"audio/wav/hit.wav",
			"audio/wav/jump.wav",
			"audio/wav/level1bg.wav",
			"audio/wav/levelcomplete.wav",
			"audio/wav/menubg.wav",
			"audio/wav/select.wav"
		]
	},
	"images": {
		"spritesheet": "min/images/sprites.png"
	}
};

/**************************************************************************************
	LOAD ASSETS
	Here is where we load everything that was defined above, and we provide instructions
	on what to do while the assets are loading, when loading is complete, or if there 
	was an error.
**************************************************************************************/
Crafty.load(assetsObj,
	function() {
		// Go to the menu scene when assets are done loading
		Crafty.scene("menu");
		
		// Display a friendly message to show the game is ready
		console.log("Done loading! Now we're ready to play.");
	},
	function(e) {
		// While the assets are loading
		console.log(e.percent + "% complete");
	},
	function(e) {
		// Uh oh, there was an error
		console.log("There was an error:");
		console.log(e);
	}
);


/********************************************************************************************************
	DEFINE LOADING SCENE
	The loading scene is what you first see when you start any game.
	This is where assets get loaded and a friendly message lets the
	user know that the game is loading.
********************************************************************************************************/
Crafty.defineScene("loading", function() {
	Crafty.e("2D, DOM, Image")
		  .attr({ w: 170, h: 50, x: game_man.width / 2 - (170 / 2), y: 100})
		  .image("min/images/loading.png");
});