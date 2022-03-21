
import {InitProject} from "./InitProject";

describe('InitProject', () => {

    it('Test test', () => {
        const obj = new InitProject();
        expect(obj.returnTrue()).toBeTruthy();
    })

    xit('Test test false', () => {
        const obj = new InitProject();
        expect(obj.returnTrue()).toBeFalsy();
    })

    it('Test test exception', () => {
        const obj = new InitProject();
        expect(() => obj.throwException()).toThrow(Error('This is an exception'));
    })

});
