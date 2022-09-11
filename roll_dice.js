console.log("...Roll Dice...");

function rollDie(){
	
	let roll = Math.floor(Math.random() * 6) + 1; // generates a random number between 1 and 6 (inclusive)

	console.log(`You Rolled: ${roll}`);
}

// rollDie();

function throwDice(){
	
	throwCounter = 6;

	while(throwCounter--){
		rollDie();
	}
}

// now roll some dice
throwDice()




