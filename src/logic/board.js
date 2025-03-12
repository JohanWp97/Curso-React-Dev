import { WINNER_COMBOS } from "../constants"

export const checkWinner = (boardToCheck) => {
    //check for every posible combos to win
    for(const combo of WINNER_COMBOS){
      const[a, b, c] = combo
      if(
        boardToCheck[a] && boardToCheck[a] === boardToCheck[b] &&
        boardToCheck[a] === boardToCheck[c]
      ){
        return boardToCheck[a]
      }
    }
    //if there is a draw
    return null
  }

export const checkEndGame = (newBoard) =>{
    return newBoard.every((square) => square !== null)
  }