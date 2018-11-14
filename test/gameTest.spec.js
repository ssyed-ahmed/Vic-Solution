import { expect } from "chai"
import { Child } from '../src/modules/child'
import { Game } from "../src/modules/game"

describe('Game', () => {

    it('should check child array size to be zero/undefined before initialization', () => {
        let arr = Game.getChildArray();

        expect(arr).to.be.undefined;
    })

    it('should check removed children array size to be zero/undefined before initialization', () => {
        let arr = Game.getRemovedChildrenArray();

        expect(arr).to.be.undefined;
    })

    it('should initialize child array with 5 elements', () => {
        Game.initializeChildArray(5);
        let arr = Game.getChildArray();

        expect(arr.length).to.equal(5);
    })

    it('should return empty child array when game is reset', () => {
        Game.resetGame();
        let arr = Game.getChildArray();
        expect(arr.length).to.equal(0);
    })

    it('should return empty removed children array when game is reset', () => {
        Game.resetGame();
        let arr = Game.getRemovedChildrenArray;
        expect(arr.length).to.equal(0);
    })

    it('should return a child object when game is started', () => {
        Game.initializeChildArray(5);
        Game.startGame(10, 1);
        let winner = Game.getWinner();
        expect(winner).to.be.an.instanceof(Child);
        Game.resetGame();
    })

    it('should return a child object with id 3', () => {
        Game.initializeChildArray(5);
        Game.startGame(10, 1);
        let winner = Game.getWinner();
        expect(winner.id).to.equal(3);
        Game.resetGame();
    })
})