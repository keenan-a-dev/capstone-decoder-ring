const { expect } = require("chai");
const { caesar } = require("../src/caesar");

describe("caesar", () => {
	it("should return false if shift value is equal to 0", () => {
		actual = caesar("hello world", 0);
		expect(actual).to.be.false;
	});
	it("should return false if shift value is less than -25", () => {
		actual = caesar("hello world", -26);
		expect(actual).to.be.false;
	});
	it("should return false if shift value is greater than 25", () => {
		actual = caesar("hello world", 26);
		expect(actual).to.be.false;
	});
	it("should ignore capital letters", () => {
		const allCaps = caesar("HELLO WORLD", 3);
		const allLower = caesar("hello world", 3);
		expect(allCaps).to.equal(allLower);
	});
	it("should handle shifts that go past the end of the alphabet", () => {
		actual = caesar("xyz", 3);
		expect(actual).to.equal("abc");
	});
	it("should maintain spaces and other non-alphabetic characters before and after encoding or decoding", () => {
		actual = caesar("xyz !!!", 3);
		expect(actual).to.equal("abc !!!");
		const decode = caesar("abc !!!", 3, false);
		expect(decode).to.equal("xyz !!!");
	});
});
