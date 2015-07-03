/**************************************************************************************
	BACKGROUND COMPONENTS:
	The background components are any non-interactive elements that help make the game look nice such as clouds, hills, grass & stones.
**************************************************************************************/
// Stone component
Crafty.c("stone", {
	init: function() {this.requires("2D, Canvas, rock, Gravity")
			.attr({
				y: game_man.height - 45
			})
			// Keep the entity on top of the ground
			.gravity("ground");
	}
});

// Cactus component
Crafty.c("Cactus", {
	init: function() {this.requires("2D, Canvas, cactus, Gravity")
			.attr({
				y: game_man.height - 45
			})
			// Keep the entity on top of the ground
			.gravity("ground");
	}
});

// Green Hill component
Crafty.c("greenHill", {
	init: function() {this.requires("2D, Canvas, hillGreen, Gravity")
			.attr({
				y: game_man.height - 45
			})
			// Keep the entity on top of the ground
			.gravity("ground");
	}
});

// Small Happy Green Hill component
Crafty.c("greenHillSm", {
	init: function() {this.requires("2D, Canvas, hillGreenSm, Gravity")
			.attr({
				y: game_man.height - 45
			})
			// Keep the entity on top of the ground
			.gravity("ground");
	}
});

// Happy Green Hill component
Crafty.c("greenHillHappy", {
	init: function() {this.requires("2D, Canvas, hillGreenHappy, Gravity")
			.attr({
				y: game_man.height - 45
			})
			// Keep the entity on top of the ground
			.gravity("ground");
	}
});

// Small Green Hill component
Crafty.c("greenHillHappySm", {
	init: function() {this.requires("2D, Canvas, hillGreenHappySm, Gravity")
			.attr({
				y: game_man.height - 45
			})
			// Keep the entity on top of the ground
			.gravity("ground");
	}
});

// Grass component
Crafty.c("grass", {
	init: function() {this.requires("2D, Canvas, greenGrass")
			.attr({
				y: game_man.height - 75
			});
	}
});

// Small Fence component
Crafty.c("smFence", {
	init: function() {this.requires("2D, Canvas, fenceSm")
			.attr({
				y: game_man.height - 100
			});
	}
});

// Bush component
Crafty.c("greenBush", {
	init: function() {
		this.requires("2D, Canvas, bush")
			.attr({
				y: game_man.height - 60
			});
	}
});

// Mushroom component
Crafty.c("browMushroom", {
	init: function() {
		this.requires("2D, Canvas, mushroom")
			.attr({
				y: game_man.height - 100
			});
	}
});

// Arrow Right component
Crafty.c("rightArrow", {
	init: function() {
		this.requires("2D, Canvas, arrowRight")
			.attr({
				y: game_man.height - 100
			});
	}
});