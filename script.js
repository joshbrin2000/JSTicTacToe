const gameBoard = (() => {
    const boardArray = [];
    return {
        init: function () {
            boardArray = [];
            for (let i = 0; i < 9; i++){
                boardArray.push(" ");
            }
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
        }
    }
})();

const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        
    });
});