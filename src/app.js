import { Game } from './modules/game';

const button = $('#startButton');
button.on('click', () => {
    let numChildren = $('#numChildren').val();
    numChildren = parseInt(numChildren);
    
    let childCount = Game.initializeChildArray(numChildren);

    let count = $('#count').val();
    count = parseInt(count);

    let startPos = $('#startPos').val();
    startPos = parseInt(startPos);
    if (startPos > childCount - 1) {
        console.log('Array position cannot be greater than the array length.');
        return;
    }
    Game.startGame(count, startPos);

})



console.log('Working!');