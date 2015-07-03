/**************************************************************************************
	DEFINE SCENE:
	This is where we define the scene that can then be called at any time from other 
	parts of our code.
**************************************************************************************/
Crafty.defineScene("level1", function() {
	//  Reset Game Variables
	game_man.reset();
	
	// Create Player
	var player = Crafty.e("player");
	
	// Create Camera
	camera = Crafty.e('camera');
	
	// The first ground entities to go slightly off screen
	Crafty.e('groundGrass')
		.attr({
			x: -40,
			y: game_man.height - 40
		});
	Crafty.e('groundGrass')
		.attr({
			x: -80,
			y: game_man.height - 40
		});
	
	// Audio
	Crafty.audio.stop();
	Crafty.audio.play("level1bg", -1, 0.3);
	
	// HUD
	Crafty.e('hearts');
	Crafty.e('scoreLbl')
		.attr({
			x: 0,
			y: 10,
			z: 9999,
			hud: true
		});
	Crafty.e("0")
		.attr({
			x: 100,
			y: 10
		})
		.bind("EnterFrame", function(e) {
			this.x = -Crafty.viewport.x + 145;
		});
	Crafty.e('onLevelLbl')
		.attr({
			y: 80,
			z: 9999,
			hud: true
		});
	Crafty.e('' + game_man.level + '')
		.attr({
			y: 80,
			z: 9999,
			hud: true
		})
		.bind("EnterFrame", function(e) {
			this.x = -Crafty.viewport.x + (game_man.width - 65);
		});
		
	// Put a stone at the beginning so users know they must go to the right
	Crafty.e('stone')
		.attr({
			x: -90
		});
		
	// A sign pointing right, so users know which direction to go.
	Crafty.e('rightArrow')
		.attr({
			x: -40,
		});
		
	// Clouds
	for(cCount = 0; cCount <= 60; cCount++) {
		Crafty.e("cloud");
	}
	 
	 // Background
	 Crafty.e('greenHillHappy')
		.attr({
			x: 350
		});
	 Crafty.e('greenHillHappySm')
		.attr({
			x: 420
		});
	 Crafty.e('greenHillHappy')
		.attr({
			x: 490
		});
	 Crafty.e('grass')
		.attr({
			x: 590
		});
	 Crafty.e('grass')
		.attr({
			x: 630
		});
	 Crafty.e('grass')
		.attr({
			x: 670
		});
	 Crafty.e('grass')
		.attr({
			x: 710
		});
	 Crafty.e('smFence')
		.attr({
			x: 795
		});
	 Crafty.e('smFence')
		.attr({
			x: 852
		});
	 Crafty.e('smFence')
		.attr({
			x: 909
		});
	 Crafty.e('smFence')
		.attr({
			x: 966
		});
	 Crafty.e('grass')
		.attr({
			x: 1080
		});
	 Crafty.e('grass')
		.attr({
			x: 1120
		});
	 Crafty.e('grass')
		.attr({
			x: 1160
		});
	 Crafty.e('grass')
		.attr({
			x: 1200
		});
	 Crafty.e('smFence')
		.attr({
			x: 1280
		});
	 Crafty.e('smFence')
		.attr({
			x: 1337
		});
	 Crafty.e('smFence')
		.attr({
			x: 1394
		});
	 Crafty.e('smFence')
		.attr({
			x: 1451
		});
	 Crafty.e('greenBush')
		.attr({
			x: 1820
		});
	 Crafty.e('greenBush')
		.attr({
			x: 1920
		});
	 Crafty.e('greenBush')
		.attr({
			x: 2020
		});
	 Crafty.e('stone')
		.attr({
			x: 2500
		});
	 Crafty.e('grass')
		.attr({
			x: 2575
		});
	 Crafty.e('grass')
		.attr({
			x: 2625
		});
	 Crafty.e('grass')
		.attr({
			x: 2675
		});
	 Crafty.e('Cactus')
		.attr({
			x: 2725
		});
	 Crafty.e('grass')
		.attr({
			x: 2775
		});
	 Crafty.e('grass')
		.attr({
			x: 2825
		});
	 Crafty.e('grass')
		.attr({
			x: 2875
		});
	 Crafty.e('stone')
		.attr({
			x: 2925
		});
	 Crafty.e('greenBush')
		.attr({
			x: 3800
		});
	 Crafty.e('greenBush')
		.attr({
			x: 3900
		});
	 Crafty.e('greenHill')
		.attr({
			x: 4000
		});
	 Crafty.e('greenHillSm')
		.attr({
			x: 4075
		});
	 Crafty.e('greenHill')
		.attr({
			x: 4150
		});
	 Crafty.e('greenBush')
		.attr({
			x: 4250
		});
	 Crafty.e('greenBush')
		.attr({
			x: 4350
		});
	 Crafty.e('stone')
		.attr({
			x: 4450,
			y: game_man.platformHigh() - 40
		});
	 Crafty.e('grass')
		.attr({
			x: 4600
		});
	 Crafty.e('grass')
		.attr({
			x: 4640
		});
	 Crafty.e('grass')
		.attr({
			x: 4680
		});
	 Crafty.e('grass')
		.attr({
			x: 4720
		});
	 Crafty.e('grass')
		.attr({
			x: 4760
		});
	 Crafty.e('grass')
		.attr({
			x: 4800
		});
	 Crafty.e('grass')
		.attr({
			x: 4840
		});
	 Crafty.e('grass')
		.attr({
			x: 4880
		});
	 Crafty.e('grass')
		.attr({
			x: 4920
		});
	 Crafty.e('grass')
		.attr({
			x: 4960
		});
	 Crafty.e('grass')
		.attr({
			x: 5000
		});
	 Crafty.e('grass')
		.attr({
			x: 5040
		});
	 Crafty.e('grass')
		.attr({
			x: 5080
		});
	 Crafty.e('grass')
		.attr({
			x: 5120
		});
	 Crafty.e('grass')
		.attr({
			x: 5160
		});
	 Crafty.e('grass')
		.attr({
			x: 5200
		});
	 Crafty.e('grass')
		.attr({
			x: 5240
		});
	 Crafty.e('grass')
		.attr({
			x: 5280
		});
	 Crafty.e('grass')
		.attr({
			x: 5320
		});
	 Crafty.e('grass')
		.attr({
			x: 5360
		});
	 Crafty.e('grass')
		.attr({
			x: 5400
		});
	
	// Platforms
	Crafty.e("platGrassLeft")
		.attr({
			x: 1700
		});
	Crafty.e("platGrass")
		.attr({
			x: 1740
		});
	Crafty.e("platGrass")
		.attr({
			x: 1780
		});
	Crafty.e("platGrass")
		.attr({
			x: 1820
		});
	Crafty.e("platGrass")
		.attr({
			x: 1860
		});
	Crafty.e("platGrassRight")
		.attr({
			x: 1900
		});
	Crafty.e("platGrassLeft")
		.attr({
			x: 2100,
			y: game_man.platformHigh()
		});
	Crafty.e("platGrass")
		.attr({
			x: 2140,
			y: game_man.platformHigh()
		});
	Crafty.e("platGrass")
		.attr({
			x: 2180,
			y: game_man.platformHigh()
		});
	Crafty.e("platGrass")
		.attr({
			x: 2220,
			y: game_man.platformHigh()
		});
	Crafty.e("platGrassRight")
		.attr({
			x: 2260,
			y: game_man.platformHigh()
		});
	Crafty.e("platGrassLeft")
		.attr({
			x: 3340,
			y: game_man.platformHigh()
		});
	Crafty.e("platGrass")
		.attr({
			x: 3380,
			y: game_man.platformHigh()
		});
	Crafty.e("platGrass")
		.attr({
			x: 3420,
			y: game_man.platformHigh()
		});
	Crafty.e("platGrass")
		.attr({
			x: 3460,
			y: game_man.platformHigh()
		});
	Crafty.e("platGrass")
		.attr({
			x: 3500,
			y: game_man.platformHigh()
		});
	Crafty.e("platGrass")
		.attr({
			x: 3540,
			y: game_man.platformHigh()
		});
	Crafty.e("platGrass")
		.attr({
			x: 3580,
			y: game_man.platformHigh()
		});
	Crafty.e("platGrassRight")
		.attr({
			x: 3620,
			y: game_man.platformHigh()
		});
	Crafty.e("platGrassLeft")
		.attr({
			x: 4400
		});
	Crafty.e("platGrass")
		.attr({
			x: 4440
		});
	Crafty.e("platGrass")
		.attr({
			x: 4480
		});
	Crafty.e("platGrass")
		.attr({
			x: 4520
		});
	Crafty.e("platGrass")
		.attr({
			x: 4560
		});
	Crafty.e("platGrassRight")
		.attr({
			x: 4600
		});
	
	// Items
	Crafty.e("coin")
		.attr({
			x: 600
		});
	Crafty.e("coin")
		.attr({
			x: 635
		});
	Crafty.e("coin")
		.attr({
			x: 670
		});
	Crafty.e("coin")
		.attr({
			x: 705
		});
	Crafty.e("coin")
		.attr({
			x: 815,
			y: game_man.height - 130
		});
	Crafty.e("coin")
		.attr({
			x: 850,
			pos: 'fence'
		});
	Crafty.e("coin")
		.attr({
			x: 885,
			pos: 'fence'
		});
	Crafty.e("coin")
		.attr({
			x: 915,
			pos: 'fence'
		});
	Crafty.e("coin")
		.attr({
			x: 950,
			pos: 'fence'
		});
	Crafty.e("coin")
		.attr({
			x: 985,
			pos: 'fence'
		});
	Crafty.e("coin")
		.attr({
			x: 1300,
			pos: 'fence'
		});
	Crafty.e("coin")
		.attr({
			x: 1335,
			pos: 'fence'
		});
	Crafty.e("coin")
		.attr({
			x: 1370,
			pos: 'fence'
		});
	Crafty.e("coin")
		.attr({
			x: 1405,
			pos: 'fence'
		});
	Crafty.e("coin")
		.attr({
			x: 1440,
			pos: 'fence'
		});
	Crafty.e("coin")
		.attr({
			x: 1475,
			pos: 'fence'
		});
	Crafty.e("coin")
		.attr({
			x: 1725,
		});
	Crafty.e("coin")
		.attr({
			x: 1770,
		});
	Crafty.e("coin")
		.attr({
			x: 1815,
		});
	Crafty.e("coin")
		.attr({
			x: 1860,
		});
	Crafty.e("gem")
		.attr({
			x: 2110,
			color: 'blue',
			pos: 'highPlatform'
		});
	Crafty.e("gem")
		.attr({
			x: 2150,
			color: 'green',
			pos: 'highPlatform'
		});
	Crafty.e("gem")
		.attr({
			x: 2190,
			color: 'orange',
			pos: 'highPlatform'
		});
	Crafty.e("gem")
		.attr({
			x: 2230,
			color: 'yellow',
			pos: 'highPlatform'
		});
	Crafty.e("gem")
		.attr({
			x: 2270,
			color: 'green',
			pos: 'highPlatform'
		});
	Crafty.e("coin")
		.attr({
			x: 2130,
			y: game_man.platformHigh() + 50
		});
	Crafty.e("coin")
		.attr({
			x: 2180,
			y: game_man.platformHigh() + 50
		});
	Crafty.e("coin")
		.attr({
			x: 2230,
			y: game_man.platformHigh() + 50
		});
		Crafty.e("gem")
			.attr({
				x: 2520,
				color: 'blue',
				y: game_man.platformLow() + 40
			});
		Crafty.e("coin")
			.attr({
				x: 2575,
				y: game_man.platformLow() + 40
			});
		Crafty.e("coin")
			.attr({
				x: 2625,
				y: game_man.platformLow() + 40
			});
		Crafty.e("coin")
			.attr({
				x: 2675,
				y: game_man.platformLow() + 40
			});
		Crafty.e("coin")
			.attr({
				x: 2725,
				y: game_man.platformLow() + 20
			});
		Crafty.e("coin")
			.attr({
				x: 2775,
				y: game_man.platformLow() + 40
			});
		Crafty.e("coin")
			.attr({
				x: 2825,
				y: game_man.platformLow() + 40
			});
		Crafty.e("coin")
			.attr({
				x: 2875,
				y: game_man.platformLow() + 40
			});
		Crafty.e("gem")
			.attr({
				x: 2945,
				color: 'blue',
				y: game_man.platformLow() + 40
			});
		Crafty.e("coin")
			.attr({
				x: 3340
			});
		Crafty.e("coin")
			.attr({
				x: 3340,
				pos: 'highPlatform'
			});
		Crafty.e("coin")
			.attr({
				x: 3380
			});
		Crafty.e("coin")
			.attr({
				x: 3380,
				pos: 'highPlatform'
			});
		Crafty.e("coin")
			.attr({
				x: 3420
			});
		Crafty.e("coin")
			.attr({
				x: 3420,
				pos: 'highPlatform'
			});
		Crafty.e("coin")
			.attr({
				x: 3460
			});
		Crafty.e("gem")
			.attr({
				x: 3460,
				color: 'green',
				pos: 'highPlatform'
			});
		Crafty.e("coin")
			.attr({
				x: 3500
			});
		Crafty.e("gem")
			.attr({
				x: 3500,
				color: 'orange',
				pos: 'highPlatform'
			});
		Crafty.e("coin")
			.attr({
				x: 3540
			});
		Crafty.e("coin")
			.attr({
				x: 3540,
				pos: 'highPlatform'
			});
		Crafty.e("coin")
			.attr({
				x: 3580
			});
		Crafty.e("coin")
			.attr({
				x: 3580,
				pos: 'highPlatform'
			});
		Crafty.e("coin")
			.attr({
				x: 3620
			});
		Crafty.e("coin")
			.attr({
				x: 3620,
				pos: 'highPlatform'
			});
		Crafty.e("coin")
			.attr({
				x: 4700,
				pos: 'smFence'
			});
		Crafty.e("coin")
			.attr({
				x: 4740,
				pos: 'smFence'
			});
		Crafty.e("coin")
			.attr({
				x: 4780,
				pos: 'smFence'
			});
		Crafty.e("coin")
			.attr({
				x: 4820,
				pos: 'smFence'
			});
		Crafty.e("coin")
			.attr({
				x: 4860,
				pos: 'smFence'
			});
		Crafty.e("coin")
			.attr({
				x: 4900,
				pos: 'smFence'
			});
		Crafty.e("coin")
			.attr({
				x: 4940,
				pos: 'smFence'
			});
		Crafty.e("coin")
			.attr({
				x: 4980,
				pos: 'smFence'
			});
		Crafty.e("coin")
			.attr({
				x: 5020,
				pos: 'smFence'
			});
		Crafty.e("coin")
			.attr({
				x: 5060,
				pos: 'smFence'
			});
		Crafty.e("coin")
			.attr({
				x: 5100,
				pos: 'smFence'
			});
		Crafty.e("coin")
			.attr({
				x: 5140,
				pos: 'smFence'
			});
		Crafty.e("coin")
			.attr({
				x: 5180,
				pos: 'smFence'
			});
		Crafty.e("coin")
			.attr({
				x: 5220,
				pos: 'smFence'
			});
		Crafty.e("coin")
			.attr({
				x: 5260,
				pos: 'smFence'
			});
		Crafty.e("coin")
			.attr({
				x: 5300,
				pos: 'smFence'
			});
		Crafty.e("coin")
			.attr({
				x: 5340,
				pos: 'smFence'
			});
		Crafty.e("coin")
			.attr({
				x: 5380,
				pos: 'smFence'
			});
		Crafty.e("coin")
			.attr({
				x: 5420,
				pos: 'smFence'
			});
	
	// Enemies
	Crafty.e("slug")
		.attr({
			x: 1000
		});
	Crafty.e("slug")
		.attr({
			x: 2680
		});
	Crafty.e("slug")
		.attr({
			x: 3900
		});
	Crafty.e("slug")
		.attr({
			x: 4850
		});
	Crafty.e("slug")
		.attr({
			x: 6000
		});
	Crafty.e("snail")
		.attr({
			x: 1500
		});
	Crafty.e("snail")
		.attr({
			x: 3000
		});
	Crafty.e("snail")
		.attr({
			x: 4500
		});
	Crafty.e("fly")
		.attr({
			x: 2000
		});
	Crafty.e("fly")
		.attr({
			x: 3450
		});
	Crafty.e("fly")
		.attr({
			x: 3900,
			y: game_man.platformHigh() - 40
		});
	Crafty.e("fly")
		.attr({
			x: 5500
		});
	Crafty.e("snail")
		.attr({
			x: game_man.levels.width
		});
	
	// Level Endpoint
	Crafty.e("flagPole")
		.attr({
			x: 5800,
			y: game_man.height - 50
		});
	Crafty.e("flagPole")
		.attr({
			x: 5800,
			y: game_man.height - 60
		});
	Crafty.e("flagPole")
		.attr({
			x: 5800,
			y: game_man.height - 70
		});
	Crafty.e("flagPole")
		.attr({
			x: 5800,
			y: game_man.height - 80
		});
	Crafty.e("flagPole")
		.attr({
			x: 5800,
			y: game_man.height - 90
		});
	Crafty.e("flagPole")
		.attr({
			x: 5800,
			y: game_man.height - 100
		});
	Crafty.e("flagPole")
		.attr({
			x: 5800,
			y: game_man.height - 110
		});
	Crafty.e("flagPole")
		.attr({
			x: 5800,
			y: game_man.height - 120
		});
	Crafty.e("flagPole")
		.attr({
			x: 5800,
			y: game_man.height - 130
		});
	Crafty.e("flagPole")
		.attr({
			x: 5800,
			y: game_man.height - 140
		});
	Crafty.e("flagYellow")
		.attr({
			x: 5800
		});
		
	// Extras
	Crafty.e("spring");
	
	// Calculate the number of tiles needed
	var numTiles = Math.ceil(game_man.levels.width / 42);
	
	// Create as many ground entities as we need to stretch the whole scene
	for(tiles = 0; tiles <= numTiles; tiles++) {
		Crafty.e('groundGrass')
			.attr({
				x: game_man.numTiles * 40,
				y: game_man.height - 40
			});
			
		game_man.numTiles++;
	}
});