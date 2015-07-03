Crafty.c("flagPole", {
	init: function() {
		// These are all the other components that are required to run this one properly. This will simplify our code any time we need to call this as an entity.
		this.requires("2D, Canvas, flagExt, Collision, SpriteAnimation")
			.attr({
				y: game_man.height - 90
			})
			.checkHits("player")
			.bind("HitOn", function() {
				game_man.endpoint();
			});
	}
});
Crafty.c("flagYellow", {
	init: function() {
		// These are all the other components that are required to run this one properly. This will simplify our code any time we need to call this as an entity.
		this.requires("2D, Canvas, flagYellow1, Collision, SpriteAnimation")
			.attr({
				y: game_man.height - 150
			})
			.bind("EnterFrame", function() {

			});
	}
});