{
		num: 2512,
		accuracy: 100,
		basePower: 20,
		overrideDefensiveStat: 'def',
		category: "Special",
		name: "Fake Out",
		pp: 10,
		priority: 3,
		flags: {protect: 1, mirror: 1, metronome: 1},
		onTry(source) {
			if (source.activeMoveActions > 1) {
				this.hint("Pestilential Bullet only works on your first turn out.");
				return false;
			}
		},
		secondaries: [
		{
			chance: 100,
			volatileStatus: 'flinch',
		},
		 {
			chance: 100,
			status:'psn',
		}, 
	],
		
		target: "normal",
		type: "Poison",
		
	}