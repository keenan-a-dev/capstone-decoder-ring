const { expect } = require("chai");
const { polybius } = require("../src/polybius");

describe("polybius", () => {
	it("should translate the letters i and j both to the number 42 when encoding", () => {
		const testI = polybius("i");
		const testJ = polybius("j");
		expect(testI).to.equal("42");
		expect(testJ).to.equal("42");
	});
	it("should translate the number 42 to (i/j) when decoding", () => {
		actual = polybius("42", false);
		expect(actual).to.equal("(i/j)");
	});
	it("should ignore capital letters", () => {
		const testA = polybius("A Message");
		const testB = polybius("a message");
		expect(testA).to.equal(testB);
	});
	it("should maintain spaces in the message before and after encoding or decoding", () => {
		actual = polybius("a b c");
		expect(actual).to.equal("11 21 31");
		const decode = polybius("11 21 31", false);
		expect(decode).to.equal("a b c");
	});
});
