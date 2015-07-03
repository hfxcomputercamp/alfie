Crafty.c("coin", {
	init: function() {
		this.requires("2D, Canvas, coins, Collision")
			.attr({
				w: 28,
				h: 28,
				x: 300,
				pos: 'default',
				y: game_man.height - 110
			})
			.bind("EnterFrame", function() {
				if(this.pos === 'fence') {
					this.y = game_man.height - 130;
				} if(this.pos === 'lowPlatform') {
					this.y = game_man.platformLow() - 40;
				} if(this.pos === 'highPlatform') {
					this.y = game_man.platformHigh() - 40;
				}
			})
			.checkHits("player")
			.bind("HitOn", function() {
				game_man.countScore(25);
				this.destroy();
			});
	}
});

Crafty.c("gem", {
	init: function() {
		this.requires("2D, Canvas, gemYellowSm, Collision")
			.attr({
				w: 48,
				h: 37,
				x: 300,
				y: game_man.height - 90
			})
			.bind("EnterFrame", function() {
				// Set Different Colour Options
				if(this.color === 'green') {
					this.removeComponent("gemYellowSm");
					this.addComponent("gemGreenSm");
				} if(this.color === 'orange') {
					this.removeComponent("gemYellowSm");
					this.addComponent("gemOrangeSm");
				} if(this.color === 'blue') {
					this.removeComponent("gemYellowSm");
					this.addComponent("gemBlueSm");
				} if(this.color === 'yellow') {
					this.removeComponent("gemYellowSm");
					this.addComponent("gemYellowSm");
				}
				
				// Set Different Y Positions
				if(this.pos === 'lowPlatform') {
					this.y = game_man.platformLow() - 45;
				} if(this.pos === 'highPlatform') {
					this.y = game_man.platformHigh() - 45;
				}
			})
			.checkHits("player")
			.bind("HitOn", function() {
				game_man.countScore(100);
				this.destroy();
			});
	}
});

Crafty.c("spring", {
	init: function() {
		this.requires("2D, Canvas, springUp, Collision")
		.attr({
			x: 3200,
			y: game_man.height - 80
		})
		.checkHits("player")
		.bind("HitOn", function() {
			this.toggleComponent("springUp, springDown");
			this.y += 14;
			
			Crafty.trigger("springJump");
		})
		.bind("HitOff", function() {
			this.toggleComponent("springDown, springUp");
			this.y -= 14;
		});
	}
});