// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
	// you can add any code you want within this function scope

	function substitution(input, alphabet, encode = true) {
		if (!alphabet || alphabet.length != 26) {
			//alphabet must be provided at correct length
			return false;
		}
		const control = "abcdefghijklmnopqrstuvwxyz".split("");
		const cipher = alphabet.toLowerCase().split("");
		const inputAsCharacterArray = input.toLowerCase().split("");
		const uniqueAlphabetOnly = Array.from(new Set(alphabet));
		if (uniqueAlphabetOnly.length !== alphabet.length) {
			//alphabet cannot contain duplicate characters
			return false;
		}
		if (!encode) {
			const resultDecode = inputAsCharacterArray.map((letter) => {
				if (!cipher.some((includedCharacter) => letter === includedCharacter)) {
					//any spaces and special characters are preserved
					return letter;
				}
				const findIndex = cipher.indexOf(letter);
				return control[findIndex];
			});
			return resultDecode.join("");
		}
		const resultEncode = inputAsCharacterArray.map((letter) => {
			if (!control.some((includedCharacter) => letter === includedCharacter)) {
				return letter;
			}
			const findIndex = control.indexOf(letter);
			return cipher[findIndex];
		});
		return resultEncode.join("");
	}

	return {
		substitution,
	};
})();

module.exports = { substitution: substitutionModule.substitution };
