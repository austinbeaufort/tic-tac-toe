'use strict'

import { any, drop } from 'ez-read'
import { winningCombos } from './model'

function allComboItemsInSortedList(combo, sortedList) {
    return combo.every(x => sortedList.includes(x))
}


const pureFuncs = {
    getBoxNum(boxString) {
        const strNum = drop(3, boxString)
        return Number(strNum)
    },
    getWin(itemList) {
        const sortedList = itemList.sort()
        const winConditions = winningCombos.map(combo => allComboItemsInSortedList(combo, sortedList))
        const isWin = any(bool => bool === true, winConditions)
        return isWin
    },
}

module.exports = pureFuncs


