Crafty.c("title", {
	init: function() {
		this.requires("2D, Canvas, logo")
			.attr({
				x: game_man.width / 2 - (this.w / 2),
				y: 25
			});
	}
});

Crafty.c("play", {
	init: function() {
		this.requires("2D, DOM, Text, playBtn, Mouse")
		.attr({
			x: game_man.width / 2 - (this.w / 2),
			y: game_man.height - 225
		})
		.css({
			'cursor': 'pointer'
		})
		.bind("MouseOver", function() {
			this.toggleComponent("playBtn, playBtnHover");
			Crafty.audio.play("select", 1, 0.4);
		})
		.bind("MouseOut", function() {
			this.toggleComponent("playBtnHover, playBtn");
		})
		.bind("Click", function() {
			Crafty.scene("level1");
		});
	}
});

Crafty.c("gameOverLbl", {
	init: function() {
		this.requires("2D, Canvas, Text, gameOver, Mouse")
		.attr({
			x: game_man.width / 2 - (this.w / 2),
			y: 150
		});
	}
});

Crafty.c("onLevelLbl", {
	init: function() {
		this.requires("2D, Canvas, levelBtn")
		.attr({
			x: 200,
			y: 300
		})
		.bind("EnterFrame", function(e) {
			if(this.hud === true) {
				this.x = -Crafty.viewport.x + (game_man.width - 200);
			}
		});
	}
});

Crafty.c("replay", {
	init: function() {
		this.requires("2D, DOM, Text, Mouse, replayBtn")
		.attr({
			x: game_man.width / 2 - (this.w / 2),
			y: 500
		})
		.css({
			'cursor': 'pointer'
		})
		.bind("MouseOver", function() {
			this.toggleComponent("replayBtn, replayBtnHover");
			Crafty.audio.play("select", 1, 0.4);
		})
		.bind("MouseOut", function() {
			this.toggleComponent("replayBtnHover, replayBtn");
		})
		.bind("Click", function() {
			Crafty.scene("level1");
		});
	}
});

Crafty.c("congratsLbl", {
	init: function() {
		this.requires("2D, Canvas, Text, congrats, Mouse")
		.attr({
			x: game_man.width / 2 - (this.w / 2),
			y: 50
		});
	}
});

Crafty.c("beatGameLbl", {
	init: function() {
		this.requires("2D, Canvas, Text, beatGame, Mouse")
		.attr({
			x: game_man.width / 2 - (this.w / 2),
			y: 150
		});
	}
});

Crafty.c("scoreLbl", {
	init: function() {
		this.requires("2D, Canvas, scoreBtn")
		.attr({
			x: 450,
			y: 300
		})
		.bind("EnterFrame", function(e) {
			if(this.hud === true) {
				this.x = -Crafty.viewport.x + 10;
			}
		});
	}
});

Crafty.c("0", {
	init: function() {
		this.requires("2D, Canvas, numZero")
		.attr({});
	}
});

Crafty.c("1", {
	init: function() {
		this.requires("2D, Canvas, numOne")
		.attr({});
	}
});

Crafty.c("2", {
	init: function() {
		this.requires("2D, Canvas, numTwo")
		.attr({});
	}
});

Crafty.c("3", {
	init: function() {
		this.requires("2D, Canvas, numThree")
		.attr({});
	}
});

Crafty.c("4", {
	init: function() {
		this.requires("2D, Canvas, numFour")
		.attr({});
	}
});

Crafty.c("5", {
	init: function() {
		this.requires("2D, Canvas, numFive")
		.attr({});
	}
});

Crafty.c("6", {
	init: function() {
		this.requires("2D, Canvas, numSix")
		.attr({});
	}
});

Crafty.c("7", {
	init: function() {
		this.requires("2D, Canvas, numSeven")
		.attr({});
	}
});

Crafty.c("8", {
	init: function() {
		this.requires("2D, Canvas, numEight")
		.attr({});
	}
});

Crafty.c("9", {
	init: function() {
		this.requires("2D, Canvas, numNine")
		.attr({});
	}
});

Crafty.c("hearts", {
	xOff : 20,
	yOff : 20,
	init : function() {
		this.requires("2D, Canvas")
		.bind("EnterFrame", function(e) {
			this.x = -Crafty.viewport.x + (game_man.width - 200);
			this.y = -Crafty.viewport.y + this.yOff;
		})
		.attr({
			z: 99999
		})
		.bind("EnterFrame", function() {
			if(game_man.health === 3) {
				this.addComponent("heartThree");
			} if(game_man.health === 2.5) {
				this.addComponent("heartTwoHalf");
			} if(game_man.health === 2) {
				this.addComponent("heartTwo");
			} if(game_man.health === 1.5) {
				this.addComponent("heartOneHalf");
			} if(game_man.health === 1) {
				this.addComponent("heartOne");
			} if(game_man.health === 0.5) {
				this.addComponent("heartHalf");
			} if(game_man.health === 0) {
				this.addComponent("heartZero");
			}
		});
	}
});