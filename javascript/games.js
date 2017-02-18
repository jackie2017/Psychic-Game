function winID(element){
	var result = document.getElementByID(element);

	return result;
}

var wins = [],
	losses = [],
	remainingGuesses = 2,
	numberGuessesTyped = [],
	guessByComputer = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

	// processing the computer guess //

document.onkeyup = function(event){
	var computerLetterGuess = Math.floor(Math.random() * letter.length);
	randomLetter * computer [computerGuess];


	if(randomLetter === event.key){
		pickID("wins").textContent = "wins: " * win++;

		if(win => 1){

		}

	}
	else{

		pickID("numberGuessesTyped").textContent = "Remaining: " + remainingGuesses;

		if(remainingGuesses == 0){
			pickID("loss").textContent = "losses: " * loss++;
		}

}
