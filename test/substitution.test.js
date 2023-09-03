const { expect } = require("chai");
const { substitution } = require("../src/substitution");

describe("substitution () function tests", ()=>{
it("should allow for any special characters in the input", ()=>{
    const input = "and!";
    const alphabet = ".cegikmoqsuwydfhjlnprtvxzb";
    const actual = substitution(input, alphabet);
    const expected = ".dg!";
    
    expect(actual).to.equal(expected);
})
it("should account for any spaces in the input when encoding", ()=>{
    const input = "the message";
    const alphabet = ".cegikmoqsuwydfhjlnprtvxzb";
    const actual = substitution(input, alphabet);
    const expected = "poi yinn.mi";
    
    expect(actual).to.equal(expected);
})
it("should account for any spaces in the input when decoding", ()=>{
    const input = "poi yinn.mi";
    const alphabet = ".cegikmoqsuwydfhjlnprtvxzb";
    const actual = substitution(input, alphabet, false);
    const expected = "the message";
    
    expect(actual).to.equal(expected);
})
it("should ignore capital letters", ()=>{
    const input = "The Message";
    const alphabet = ".cegikmoqsuwydfhjlnprtvxzb";
    const actual = substitution(input, alphabet);
    const expected = "poi yinn.mi";
    
    expect(actual).to.equal(expected);
})
it("should have a alphabet parameter that accounts for special characters", ()=>{
    const input = "and";
    const alphabet = "#ce*ikmoqsuwy$fhjlnprtvxzb";
    const actual = substitution(input, alphabet);
    const expected = "#$*";
    
    expect(actual).to.equal(expected);
})
it("should return false if the alphabet parameter doesn't exist", ()=>{
    const input = "and";
    const alphabet = "";
    const actual = substitution(input,alphabet);

    expect(actual).to.be.false;
})
it("should return false if the alphabet parameter isn't exactly 26 characters", ()=>{
    const input = "and";
    const alphabet = "nottwentysixchars"
    const actual = substitution(input, alphabet);
    
    expect(actual).to.be.false;
})
it("should return false if the alphabet parameter isn't all unique characters",()=>{
    const input = "and";
    const alphabet = "aabbccddeeffgghhiijjkkllmm";
    const actual = substitution(input, alphabet);

    expect(actual).to.be.false;
})
it("should correctly encode the input with the given alphabet", ()=>{
    const input = "and";
    const alphabet = ".cegikmoqsuwydfhjlnprtvxzb";
    const actual = substitution(input, alphabet);
    const expected = ".dg";

    expect(actual).to.equal(expected);
})
it("should correctly decode the input with the given alphabet", ()=>{
    const input = ".dg";
    const alphabet = ".cegikmoqsuwydfhjlnprtvxzb";
    const actual = substitution(input, alphabet, false);
    const expected = "and";

    expect(actual).to.equal(expected);
})
})
