'use strict'

import { empty, is, randomChoice, take } from 'ez-read'
import { gameContainer, gameResult, clearButton } from './model'
import { getBoxNum, getWin } from './pure'

// ---------------------- IO / DOM Functions --------------------------
let gameSquares = [
    'box1', 
    'box2',
    'box3',
    'box4',
    'box5',
    'box6',
    'box7',
    'box8',
    'box9',
]
let userItems = []
let compItems = []


gameContainer.addEventListener('click', main)
clearButton.addEventListener('click',clearBoard)


function main(event) {
    const boxString = take(4, event.target.className)
    const box = document.querySelector(`.${boxString}`)
    if (is(empty(box.textContent))) box.textContent = 'X'
    else return
    gameSquares = gameSquares.filter(item => item !== boxString)
    const isWin = checkGameResults(boxString, userItems, 'user')
    if (isWin) return
    if (is(empty(gameSquares))) return
    runComputersTurn()
}


function runComputersTurn() {
    const boxString = randomChoice(gameSquares)
    const box = document.querySelector(`.${boxString}`)
    if (is(empty(box.textContent))) box.textContent = 'O'
    else return
    gameSquares = gameSquares.filter(item => item !== boxString)
    checkGameResults(boxString, compItems, 'computer')
}


function checkGameResults(boxString, array, player) {
    checkForDraw(gameSquares)
    const num = getBoxNum(boxString)
    array.push(num)
    const isWin = checkForWin(array, player)
    return isWin
}


function checkForDraw(gameSquares) {
    if (is(empty(gameSquares))) {
        gameResult.textContent = 'Draw. Play Again?'
    }
}

function checkForWin(itemList, player) {
    const isWin = getWin(itemList)
    if (isWin && player === 'computer') {
        gameResult.textContent = 'Sorry, you lose :('
        return true
    } else if (isWin && player === 'user') {
        gameResult.textContent = 'You Win!'
        return true
    }
    return false
}



// -------------------- Clearing the game board --------------------------------------------
function clearBoard() {
    resetGameSquares()
    gameResult.textContent = ''
    userItems = []
    compItems = []
    resetBoxes()
}


function resetBoxes() {
    for (let i = 1; i <= 9; i++) {
        const box = document.querySelector(`.box${i}`)
        box.textContent = ''
    }
}

function resetGameSquares() {
    gameSquares = [
        'box1', 
        'box2',
        'box3',
        'box4',
        'box5',
        'box6',
        'box7',
        'box8',
        'box9',
        ]
}