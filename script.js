const gameBoard = (() => {
    let boardArray = [];
    let turn = null;

    _initTurn = function(){
        turn = (Math.floor(Math.random() * 2) === 0) ? "C" : "P";
    }

    _alterTurn = function(){
        turn = (turn === "C") ? "P" : "C";
    }

    return {
        init: function () {
            boardArray = [];
            for (let i = 0; i < 9; i++){
                boardArray.push(" ");
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

        setToken: function (tok, ind) {
            boardArray[ind] = tok;
        },

        getTokens: function (tok) {
            let indIndex = [];
            for (let i = 0; i < 9; i++){
                if (boardArray[i] === tok){
                    indIndex.push(i);
                }
            }
            return indIndex;
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
            btn.disabled = true;
            btn.style.backgroundColor = "#faaa23";
            gameBoard.alterTurn();
            break;
        case "P":
            btn.innerHTML = "O";
            btn.disabled = true;
            btn.style.backgroundColor = "#2ab7e2";
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