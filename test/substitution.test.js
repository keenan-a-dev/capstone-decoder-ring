const { expect } = require("chai");
const { substitution } = require("../src/substitution");

describe("substition", () => {
	it("should return false if given alphabet isn't exactly 26 characters long", () => {
		actual = substitution("hello world", "notwilder");
		expect(actual).to.be.false;
	});
	it("correctly translates given phrase based on given alphabet", () => {
		actual = substitution("correct", "zyxwvutsrqponmlkjihgfedcba");
		expect(actual).to.equal("xliivxg");
	});
	it("should return false if there are any duplicates in given alphabet", () => {
		actual = substitution("hello", "aaeettlljjffqqookkttssddff");
		expect(actual).to.be.false;
	});
	it("should maintain spaces in message before and after encoding or decoding", () => {
		actual = substitution("a b c d", "zyxwvutsrqponmlkjihgfedcba");
		expect(actual).to.equal("z y x w");
		const decode = substitution("z y x w", "zyxwvutsrqponmlkjihgfedcba", false);
		expect(decode).to.equal("a b c d");
	});
	it("should ignore capital letters", () => {
		const allCaps = substitution(
			"DOES THIS WORK",
			"zyxwvutsrqponmlkjihgfedcba"
		);
		const allLower = substitution(
			"does this work",
			"zyxwvutsrqponmlkjihgfedcba"
		);
		expect(allCaps).to.equal(allLower);
	});
});
