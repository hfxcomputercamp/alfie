// Game Manager
game_man = {
	width: 800,
	height: 600,
	score: 0,
	level: 1,
	totalLevels: 1,
	numClouds: 0,
	numTiles: 0,
	health: 3,
	numCoins: 0,
	numKeys: 0,
	levels: {
		width: 6800
	},
	platformLow: function() {
		return Crafty.viewport._height - 175;
	},
	platformHigh: function() {
		return Crafty.viewport._height - 350;
	},
	getHit: function() {
		this.health = this.health - 0.5;
		
		if(this.health === 0) {
			Crafty.audio.stop();
			Crafty.audio.play("gameover", 1, 0.5);
			Crafty.scene("gameover");
		}
	},
	reset: function() {
		this.numClouds = 0;
		this.numTiles = 0;
		this.menuTiles = 0;
		this.health = 3;
		this.numCoins = 0;
		this.numKeys = 0;
		this.score = 0;
	},
	countScore: function(points) {
		Crafty.audio.play("coin", 1, 0.4);
		game_man.score += points;
	},
	endpoint: function() {
		Crafty.audio.stop();
		Crafty.audio.play("levelcomplete", 1, 0.4);

		if(this.level === this.totalLevels) {
			Crafty.scene("beatGame");
		} else {
			this.level++;
			Crafty.scene("level" + this.level);
			console.log("Now on level: " + this.level);
		}
	}
};