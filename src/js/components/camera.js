Crafty.c("camera", {
	init: function() {
		this.requires("2D, Canvas, Color")
			.attr({
				w: Crafty.DOM.window.width,
				h: Crafty.DOM.window.height,
				x: 0,
				y: 500,
				z: -1
			})
			.bind("followMe", function(posX) {
				Crafty.viewport.scroll('_x', (-posX + 75));
			});
	}
});