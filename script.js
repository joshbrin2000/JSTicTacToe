const gameBoard = (() => {
    let boardArray = new Map();
    let turn = null;

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

        setToken: function (ind, tok) {
            boardArray.set(+ind, tok);
        },

        calculateWin: function (tok) {
            return ((boardArray.get(+1) === tok && boardArray.get(+2) === tok && boardArray.get(+3) === tok) ||
            (boardArray.get(+4) === tok && boardArray.get(+5) === tok && boardArray.get(+6) === tok) ||
            (boardArray.get(+7) === tok && boardArray.get(+8) === tok && boardArray.get(+9) === tok) ||
            (boardArray.get(+1) === tok && boardArray.get(+4) === tok && boardArray.get(+7) === tok) ||
            (boardArray.get(+2) === tok && boardArray.get(+5) === tok && boardArray.get(+8) === tok) ||
            (boardArray.get(+3) === tok && boardArray.get(+6) === tok && boardArray.get(+9) === tok) ||
            (boardArray.get(+1) === tok && boardArray.get(+5) === tok && boardArray.get(+9) === tok) ||
            (boardArray.get(+3) === tok && boardArray.get(+5) === tok && boardArray.get(+7) === tok));
        },

        getTurn: function(){
            return turn;
        }
    }
})();

function updateBtn(btn){
    switch(gameBoard.getTurn()){
        case "C":
            btn.innerHTML = "X";
            gameBoard.setToken(btn.value, "X");
            btn.disabled = true;
            btn.style.backgroundColor = "#faaa23";
            console.log(gameBoard.calculateWin("X"));
            gameBoard.alterTurn();
            break;
        case "P":
            btn.innerHTML = "O";
            gameBoard.setToken(btn.value, "O");
            btn.disabled = true;
            btn.style.backgroundColor = "#2ab7e2";
            console.log(gameBoard.calculateWin("O"));
            gameBoard.alterTurn();
            break;
        default:
            break;
    }
}

const buttons = document.querySelectorAll('.section');
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        updateBtn(button);
    });
});

gameBoard.init();