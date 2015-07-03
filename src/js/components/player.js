/**************************************************************************************
	DEFINE PLAYER:
	This is our main character for the game. This code controls how he moves and jumps,
	and what happens when the player collides with another element.
	
	Hint: There are three different characters you can play as. Blue, Green & Pink. Just replace the colour in the "this.requires" statement where it now says playerGreen1 with playerPink1, for example.
**************************************************************************************/
Crafty.c("player", {
	init: function() {
		// These are all the other components that are required to run this one properly. This will simplify our code any time we need to call this as an entity.
		this.requires("2D, Canvas, playerGreen1, Gravity, Twoway, SpriteAnimation, Keyboard, Tween, Collision")
			.attr({
				x: 25,
				y: 25,
				speed: 7,
				z: 99999
			})
			// This is the animation for when the player is walking right
			.reel('walk_right', 500, [[1538, 929], [1608, 930], [1674, 929], [1746, 929]])
			// This is the animation for when the player is walking left
			.reel('walk_left', 500, [[1814, 1249], [1745, 1250], [1677, 1249], [1606, 1249]])
			.bind('KeyDown', function (e) {
				// If the space bar or up arrow key is pressed and the player is not already jumping, the player will jump
				if ((this.isDown('SPACE') || this.isDown('UP_ARROW')) && this._falling === false) {
					// We cancel any tween that might be happening before starting a new one in order to avoid any unexpected glitches.
					this.cancelTween();
					
					// Start a new tween to animate the player jumping
					this.tween({y: this.y - 175}, 200);
					
					// Play an audio sound for the player jumping
					Crafty.audio.play("jump", 1, 0.4);
				}
				
				// If the player presses the right arrow key, move the player right
				if(this.isDown('RIGHT_ARROW')) {
					this.moving = true;
					this.xdir = 1;
					this.x = this.x + this.speed*this.xdir;
					
					if(!this.isPlaying("walk_right")) {
						this.animate("walk_right", -1);
					
						this.removeComponent("playerGreen1");
						this.addComponent("playerGreenLeft1");
					}
				}
				
				// If the player presses the left arrow key, move the player left
				if(this.isDown('LEFT_ARROW')) {
					this.moving = true;
					this.xdir = -1;
					this.x = this.x + this.speed*this.xdir;
					
					if(!this.isPlaying("walk_left")) {
						this.animate("walk_left", -1);
					}
					
					this.removeComponent("playerGreen1");
					this.addComponent("playerGreenLeft1");
				}
			})
			// When the key is released, stop the player's movement
			.bind("KeyUp", function(e) {
				if(!this.isDown('RIGHT_ARROW') && !this.isDown('LEFT_ARROW')) {
					this.moving = false;
					this.xdir = 0;
					
					this.pauseAnimation();
				}
			})
			.bind("EnterFrame", function(e) {
				// If falling, change sprite
				if(this._falling === true) {
					this.removeComponent("playerGreen1");
					this.addComponent("playerGreen3");
				} else {
					// When player stops falling, change back
					this.removeComponent("playerGreen3");
					this.addComponent("playerGreen1");
				}
				
				// Cause a game over if player falls off screen
				if(this.y >= game_man.height) {
					// Make sure the player's health equals zero
					game_man.health = 0;
					
					// Change the scene
					Crafty.scene("gameover");
				}
				
				// Follow the player with the camera
				Crafty.trigger("followMe", this.x);
				
				// Prevent player from going off the edge of the screen
				if(this.x <= 0 || this.x >= game_man.levels.width - this.w) {
					// Stop the player from moving
					this.moving = false;
					
					// Don't let player walk off the left side of the screen. If player's x position is less than or equal to zero, set it to 0.
					if(this.x <= 0) {
						this.x = 0;
					}
					
					// Don't let player walk off the right side of the LEVEL. This is different than the screen, because it can be much wider than the screen's width. If player's x position is greater than or equal to the levels width, minus the player's width. This will make sure the player can't go off screen at all.
					if(this.x >= game_man.levels.width - this.w) {
						this.x = game_man.levels.width - this.w;
					}
				}
				
				// Move the player left or right
				if(this.moving) {
					// The player's x position is equal to the current position, plus the speed. We then multiply by the xdir (either 1 or -1) to determine whether we want to move the player left or right.
					this.x = this.x + this.speed*this.xdir;
				}
			})
			// Jump when the player steps on a spring
			.bind("springJump", function() {
				// We cancel any tween that might be happening before starting a new one in order to avoid any unexpected glitches.
				this.cancelTween();
				
				// Start a new tween to animate the player jumping
				this.tween({y: this.y - 350}, 200);
				
				// Play an audio sound for the player jumping
				Crafty.audio.play("jump", 1, 0.4);
			})
			// Make sure the player can land on ground, and will return to the ground after a jump.
			.gravity("ground");
	}
});