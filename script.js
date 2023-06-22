const gameBoard = (() => {
    let boardArray = [];
    let turn = null;
    return {
        init: function () {
            boardArray = [];
            for (let i = 0; i < 9; i++){
                boardArray.push(" ");
            }
            turn = gameBoard.goesFirst();
        },

        goesFirst: function(){
            let result = Math.floor(Math.random() * 2);
            return result;
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
    btn.innerHTML = "clicked";
    console.log(gameBoard.getTurn());
}

const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        updateBtn(button);
    });
});

gameBoard.init();