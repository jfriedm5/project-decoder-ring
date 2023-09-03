const { expect } = require("chai");
const { polybius } = require("../src/polybius");

describe("polybius() cipher tests", ()=>{
    it("Should return a string when encoding",()=>{
        const input = "polybius";
        const actual = polybius(input);
        const expected = "5343134521425434"

        expect(actual).to.equal(expected);
    });
    it("should return false if the length of numbers being decoded is odd excluding spaces", () =>{
       const input = "5343134521425434 1"
       const actual = polybius(input, false);
       
       expect(actual).to.be.false;
    });
    it("should ignore all capital letters", ()=>{
        const input = "Polybius";
        const actual = polybius(input);
        const expected = "5343134521425434";

        expect(actual).to.equal(expected);
    });
    it("should convert both I and J to 42 when encoding",()=>{
        const input = "injury";
        const actual = polybius(input);
        const expected = "423342542445";

        expect(actual).to.equal(expected);
    })
    it("should convert 42 back to I&J together when decoding",()=>{
        const input = "423342542445";
        const actual = polybius(input,false);
        const expected = "[i/j]n[i/j]ury";

        expect(actual).to.equal(expected);
    })
    it("should maintain spaces in the message when encoding", ()=>{
        const input = "polybius cipher";
        const actual = polybius(input);
        const expected = "5343134521425434 314253325124";

        expect(actual).to.equal(expected);
    })
    it("should maintain spaces in the message when decoding", ()=>{
        const input = "5343134521425434 314253325124";
        const actual = polybius(input, false);
        const expected = "polyb[i/j]us c[i/j]pher";

        expect(actual).to.equal(expected);
});
});
