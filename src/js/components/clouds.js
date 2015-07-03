Crafty.c("cloud", {
	init: function() {		
		origY = Crafty.math.randomInt(5, 105);
		game_man.numClouds++;
		
		this.requires("Canvas, clouds, 2D")
			.attr({
				x: Crafty.math.randomInt(5, game_man.levels.width),
				y: origY,
				z: -1,
				moving: true,
				speed: 0.5,
				xdir: -1,
				ydir: 1,
			})
			.bind("EnterFrame", function(e) {
				if(this.x ===  0 - this.w) {
					this.destroy();
					game_man.numClouds--;
					Crafty.e('cloud');
				}
				
				if(this.moving) {
					this.x = this.x + this.speed*this.xdir;
				}
			});
	}
});