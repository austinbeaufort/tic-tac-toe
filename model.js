'use strict'

import { freeze } from 'ez-read'

const gameObject = freeze({
    winningCombos: [
        [1,2,3],
        [4,5,6],
        [7,8,9],
        [1,4,7],
        [2,5,8],
        [3,6,9],
        [1,5,9],
        [3,5,7],
    ],
    gameContainer: document.querySelector('.game-container'),
    gameResult: document.querySelector('.game-result'),
    clearButton: document.querySelector('.clear-board'),
})

module.exports = gameObject