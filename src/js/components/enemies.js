/**************************************************************************************
	DEFINE ENEMIES:
	This is where we build and control our enemies to be used throughout the game.
**************************************************************************************/
Crafty.c("slug", {
	init: function() {
		// These are all the other components that are required to run this one properly. This will simplify our code any time we need to call this as an entity.
		this.requires("2D, Canvas, slug1, Collision")
			.attr({
				y: game_man.height - 66,
				xdir: -1,
				moving: true,
				speed: 3
			})
			.bind("EnterFrame", function() {
				if(this.moving === true) {
					this.x = this.x + this.speed * this.xdir;
				}
			})
			.checkHits("player")
			.bind("HitOn", function() {
				game_man.getHit();
				Crafty.audio.play("hit", 1, 1);
			});
	}
});

Crafty.c("fly", {
	init: function() {
		// These are all the other components that are required to run this one properly. This will simplify our code any time we need to call this as an entity.
		this.requires("2D, Canvas, fly1, Collision, SpriteAnimation")
			.attr({
				y: game_man.height - 90,
				xdir: -1,
				moving: true,
				speed: 5
			})
			.bind("EnterFrame", function() {
				if(this.moving === true) {
					// The fly will travel left
					this.x = this.x + this.speed * this.xdir;
				}
			})
			.checkHits("player")
			.bind("HitOn", function() {
				game_man.getHit();
				Crafty.audio.play("hit", 1, 1);
			});
	}
});

Crafty.c("snail", {
	init: function() {
		// These are all the other components that are required to run this one properly. This will simplify our code any time we need to call this as an entity.
		this.requires("2D, Canvas, snail1, Collision, SpriteAnimation")
			.attr({
				y: game_man.height - 68,
				xdir: -1,
				moving: true,
				speed: 2
			})
			.bind("EnterFrame", function() {
				if(this.moving === true) {
					// The fly will travel left
					this.x = this.x + this.speed * this.xdir;
				}
			})
			.checkHits("player")
			.bind("HitOn", function() {
				game_man.getHit();
				Crafty.audio.play("hit", 1, 1);
			});
	}
});

Crafty.c("fish", {
	init: function() {
		// These are all the other components that are required to run this one properly. This will simplify our code any time we need to call this as an entity.
		this.requires("2D, Canvas, fish1, Collision, SpriteAnimation")
			.attr({
				y: game_man.height - 68,
				xdir: -1,
				moving: true,
				speed: 3
			})
			.bind("EnterFrame", function() {
				if(this.moving === true) {
					// The fly will travel left
					this.x = this.x + this.speed * this.xdir;
				}
			})
			.checkHits("player")
			.bind("HitOn", function() {
				game_man.getHit();
				Crafty.audio.play("hit", 1, 1);
			});
	}
});