import { Child } from './child';

export class Game {

	constructor() {
        this.childArray = [];
	
        this.removedChildren = [];
    }

	static initializeChildArray(arrayLength) {
        if (!this.childArray) {
            this.childArray = [];
        }
        if (!this.removedChildren) {
            this.removedChildren = [];
        }
		for (let i = 0; i < arrayLength; i++) {
			let child = new Child(i+1);
			this.childArray.push(child);
        }
        console.log("Children's array");
        console.log(this.childArray);
        return this.childArray.length;
	}

	static startGame(k, startPos) {
        if (this.childArray.length === 1) {
			console.log('Winner is');
            console.log(this.childArray[0]);
            console.log('Removed children');
            console.log(this.removedChildren);		
            
            this.childArray = [];
            this.removedChildren = [];
            
			return;
		}
		let rem = (k + startPos) % this.childArray.length;
		let index = rem === 0 ? this.childArray.length - 1: rem - 1;			
		let child = this.childArray[index];
		this.removedChildren.push(child);
		this.childArray.splice(index, 1);
		startPos += 1;
		Game.startGame(k, startPos);
	}
}