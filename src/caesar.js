// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
	// you can add any code you want within this function scope

	function caesar(input, shift, encode = true) {
		if (!shift || shift < -25 || shift > 25) return false; //edge cases in shift parameter
		const lowercaseInputSingleChars = input.toLowerCase().split(""); //shape input as array of single characters
		const setSize = 26; //used to create wraparound of alphabet
		const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
		if (!encode) {
			//changes direction of the shift
			shift = -shift;
		}
		const result = lowercaseInputSingleChars.map((character) => {
			if (alphabet.indexOf(character) === -1) {
				return character;
			}
			if (alphabet.indexOf(character) + shift < 0) {
				return alphabet[(26 + (alphabet.indexOf(character) + shift)) % setSize];
			}
			return alphabet[(alphabet.indexOf(character) + shift) % setSize];
		});
		return result.join("").toString();
	}

	return {
		caesar,
	};
})();

module.exports = { caesar: caesarModule.caesar };
