Crafty.c("ground", {
	init: function() {
		// This component is empty because it does not need to return
		// anything. It gets loaded into any other ground element as 
		// an easy way to control the gravity for a variety of ground types.
	}
});

Crafty.c("groundGrass", {
	init: function() {
		this.requires("2D, Canvas, ground, groundGrass2")
			.attr({
				w: 42,
				h: 42,
				z: 99999
			});
	}
});

Crafty.c("platGrass", {
	init: function() {
		this.requires("2D, Canvas, ground, groundGrass2")
			.attr({
				w: 42,
				h: 42,
				y: game_man.platformLow()
			});
	}
});

Crafty.c("platGrassLeft", {
	init: function() {
		this.requires("2D, Canvas, ground, groundGrass1")
			.attr({
				w: 42,
				h: 42,
				y: game_man.platformLow()
			});
	}
});

Crafty.c("platGrassRight", {
	init: function() {
		this.requires("2D, Canvas, ground, groundGrass3")
			.attr({
				w: 42,
				h: 42,
				y: game_man.platformLow()
			});
	}
});

// Grass Box Component
Crafty.c("grassBox", {
	init: function() {
		this.requires("2D, Canvas, boxGrass, ground")
			.attr({
				y: game_man.height - 80
			});
	}
});

// Purple Ground
Crafty.c("groundPurp", {
	init: function() {
		this.requires("2D, Canvas, ground, groundPurp2")
			.attr({
				w: 42,
				h: 42,
				z: 99999
			});
	}
});

Crafty.c("platPurp", {
	init: function() {
		this.requires("2D, Canvas, ground, groundPurp2")
			.attr({
				w: 42,
				h: 42,
				y: game_man.platformLow()
			});
	}
});

Crafty.c("platPurpLeft", {
	init: function() {
		this.requires("2D, Canvas, ground, groundPurp1")
			.attr({
				w: 42,
				h: 42,
				y: game_man.platformLow()
			});
	}
});

Crafty.c("platPurpRight", {
	init: function() {
		this.requires("2D, Canvas, ground, groundPurp3")
			.attr({
				w: 42,
				h: 42,
				y: game_man.platformLow()
			});
	}
});