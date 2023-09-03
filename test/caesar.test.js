// Write your tests here!
const { expect } = require("chai");
const { caesar } = require("../src/caesar");

describe("caesar() shift function tests", () => {
it("should return false if shift value =0", ()=>{
    const input = "coding ciphers";
    const shift = 0;
    const actual = caesar(input, shift);

    expect(actual).to.be.false;
  });
it("should return false if shift value is less than -25", () => {
    const input = "coding ciphers";
    const shift = -26;
    const actual = caesar(input, shift);

    expect(actual).to.be.false;
})  
it("should return false if shift value is greater than 25", () => {
    const input = "coding ciphers";
    const shift = 26;
    const actual = caesar(input, shift);

    expect(actual).to.be.false;
}) 
it("should return false if shift value is not present", () => {
    const input = "coding ciphers";
    const shift = "";
    const actual = caesar(input, shift);

    expect(actual).to.be.false;
})
it("should appropriately encode the input message based on shift", ()=>{
    const input = "coding ciphers";
    const shift = 1;
    const actual = caesar(input, shift);
    const expected = "dpejoh djqifst";

    expect(actual).to.equal(expected);
}) 
it("should ignore capital letters", ()=>{
    const input ="Coding Ciphers";
    const shift = 1;
    const actual = caesar(input, shift);
    const expected = "dpejoh djqifst";
    
    expect(actual).to.equal(expected);
})
it("should handles shifts that go past the end of the alphabet", ()=>{
    const input ="zebra magazine";
    const shift = 3;
    const actual = caesar(input, shift);
    const expected ="cheud pdjdclqh";

    expect(actual).to.equal(expected);
})
it("should maintains spaces and other nonalphabetic symbols in the message before and after encoding or decoding",()=>{
    const input ="coding ciphers!";
    const shift = 1;
    const actual = caesar(input, shift);
    const expected = "dpejoh djqifst!"

    expect(actual).to.equal(expected);
})
it("should be able to handle a negative shift", ()=>{
    const input ="coding ciphers";
    const shift = -3;
    const actual = caesar(input, shift);
    const expected ="zlafkd zfmebop"

    expect(actual).to.equal(expected);
})
it("should be able to decode the inputed message", ()=>{
    const input = "dpejoh djqifst";
    const shift = 1;
    const actual = caesar(input,shift, false);
    const expected = "coding ciphers" 

    expect(actual).to.equal(expected);
})
})

