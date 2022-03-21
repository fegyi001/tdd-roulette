
import {InitProject} from "./InitProject";

describe('InitProject', () => {
    const initProject = new InitProject();

    it('Test test', () => {
        expect(initProject.returnTrue()).toBeTruthy();
    })

    xit('Test test false', () => {
        expect(initProject.returnTrue()).toBeFalsy();
    })

    it('Test test exception', () => {
        expect(() => initProject.throwException()).toThrow(Error('This is an exception'));
    })

});
