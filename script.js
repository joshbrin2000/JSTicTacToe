const gameBoard = (() => {
    let boardArray = new Map();
    let turn = null;
    let winFound = false;

    _initTurn = function(){
        turn = (Math.floor(Math.random() * 2) === 0) ? "C" : "P";
    }

    _alterTurn = function(){
        turn = (turn === "C") ? "P" : "C";
    }

    return {
        init: function () {
            boardArray.clear();
            for (let i = 0; i < 9; i++){
                boardArray.set(+i, " ");
            }
            gameBoard.initTurn();
        },

        initTurn: function(){
            _initTurn();
        },

        alterTurn: function(){
            _alterTurn();
        },

        getTurn: function(){
            return turn;
        },

        getWinFound: function(){
            return winFound;
        },

        setToken: function (ind, tok) {
            boardArray.set(+ind, tok);
        },

        calculateWin: function (tok) {
            if ((boardArray.get(+1) === tok && boardArray.get(+2) === tok && boardArray.get(+3) === tok) ||
            (boardArray.get(+4) === tok && boardArray.get(+5) === tok && boardArray.get(+6) === tok) ||
            (boardArray.get(+7) === tok && boardArray.get(+8) === tok && boardArray.get(+9) === tok) ||
            (boardArray.get(+1) === tok && boardArray.get(+4) === tok && boardArray.get(+7) === tok) ||
            (boardArray.get(+2) === tok && boardArray.get(+5) === tok && boardArray.get(+8) === tok) ||
            (boardArray.get(+3) === tok && boardArray.get(+6) === tok && boardArray.get(+9) === tok) ||
            (boardArray.get(+1) === tok && boardArray.get(+5) === tok && boardArray.get(+9) === tok) ||
            (boardArray.get(+3) === tok && boardArray.get(+5) === tok && boardArray.get(+7) === tok)){
                winFound = true;
            }
            return winFound;
        },

        getTurn: function(){
            return turn;
        }
    }
})();

function disableBtns(){
    const buttons = document.querySelectorAll('.section');
    for (const button of buttons){
        button.disabled = true;
        button.style.pointerEvents = "none";
    }
}

function winDiv(winner){
    let winCard = document.createElement('div');
    winCard.className = 'win-div';
    let winMessage = document.createElement('p');
    winMessage.textContent = `Winner: ${winner} has won the game!`;
    winCard.appendChild(winMessage);
    document.getElementsByClassName("container")[0].appendChild(winCard);
}

function updateBtn(btn){
    if (!gameBoard.getWinFound()){
        switch(gameBoard.getTurn()){
            case "C":
                btn.innerHTML = "X";
                gameBoard.setToken(btn.value, "X");
                btn.disabled = true;
                btn.style.backgroundColor = "#faaa23";
                if (gameBoard.calculateWin("X")){
                    console.log("X Wins!");
                    disableBtns();
                    winDiv("X");
                    //add html addition stating winner
                }
                gameBoard.alterTurn();
                break;
            case "P":
                btn.innerHTML = "O";
                gameBoard.setToken(btn.value, "O");
                btn.disabled = true;
                btn.style.backgroundColor = "#2ab7e2";
                if (gameBoard.calculateWin("O")){
                    console.log("O Wins!");
                    disableBtns();
                    winDiv("O");
                    //add html addition stating winner
                }
                gameBoard.alterTurn();
                break;
            default:
                break;
        }
    }
}

const buttons = document.querySelectorAll('.section');
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        updateBtn(button);
    });
});

gameBoard.init();