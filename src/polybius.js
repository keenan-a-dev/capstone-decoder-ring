// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const polybiusModule = (function () {
	// you can add any code you want within this function scope

	function polybius(input, encode = true) {
		if (!encode) {
			const testForOddInput = input.replace(/\s/g, "");
			if (testForOddInput.length % 2 === 1) return false;
		}
		const cipher = {
			a: 11,
			b: 21,
			c: 31,
			d: 41,
			e: 51,
			f: 12,
			g: 22,
			h: 32,
			i: 42,
			j: 42,
			k: 52,
			l: 13,
			m: 23,
			n: 33,
			o: 43,
			p: 53,
			q: 14,
			r: 24,
			s: 34,
			t: 44,
			u: 54,
			v: 15,
			w: 25,
			x: 35,
			y: 45,
			z: 55,
		};
		if (encode) {
			const inputByIndividualCharacter = input.toLowerCase().split("");
			const result = inputByIndividualCharacter.map((character) => {
				if (character === " ") {
					return ` `;
				}
				return cipher[character];
			});
			return result.join("");
		}
		const inputToWordArray = input.split(" ");
		const wordsByNumberPairs = inputToWordArray.map(
			(word) => word.match(/.{1,2}/g) //shaped as [[##], [##], [##], ...]
		);
		const keyValueCipher = Object.entries(cipher); //re-shape cipher as an array
		const decoded = wordsByNumberPairs.map((word) => {
			const formedWord = word.reduce((accum, letter) => {
				const letterToAdd = keyValueCipher.find((pair) => pair[1] == letter);
				if (letterToAdd[0] == "i" || letterToAdd[0] == "j") {
					return accum + `(i/j)`;
				}
				accum += letterToAdd[0];
				return accum;
			}, "");
			return formedWord;
		});
		return decoded.join(" ");
	}

	return {
		polybius,
	};
})();

module.exports = { polybius: polybiusModule.polybius };
