// Game Board Display Layout:
// [0][1][2]
// [3][4][5]
// [6][7][8]

var board = ["[-]", "[-]", "[-]", "[-]", "[-]", "[-]", "[-]", "[-]", "[-]"];

gameBoard.addEventListener("load", refreshBoard());

topLeftBtn.onclick = () => {
    setPlayerButton(0);
};
topCenterBtn.onclick = () => {
    setPlayerButton(1);
};
topRightBtn.onclick = () => {
    setPlayerButton(2);
};
midLeftBtn.onclick = () => {
    setPlayerButton(3);
};
midCenterBtn.onclick = () => {
    setPlayerButton(4);
};
midRightBtn.onclick = () => {
    setPlayerButton(5);
};
bottomLeftBtn.onclick = () => {
    setPlayerButton(6);
};
bottomCenterBtn.onclick = () => {
    setPlayerButton(7);
};
bottomRightBtn.onclick = () => {
    setPlayerButton(8);
};

function refreshBoard() {
    topLeftBtn.innerHTML = board[0];
    topCenterBtn.innerHTML = board[1];
    topRightBtn.innerHTML = board[2];
    midLeftBtn.innerHTML = board[3];
    midCenterBtn.innerHTML = board[4];
    midRightBtn.innerHTML = board[5];
    bottomLeftBtn.innerHTML = board[6];
    bottomCenterBtn.innerHTML = board[7];
    bottomRightBtn.innerHTML = board[8];
}

function setPlayerButton(boardPosition) {
    if (board[boardPosition] === "[-]") {
        board[boardPosition] = "[X]";
    }
    
    refreshBoard();
    
    // This is only here for testing at this point 
    setOpponentButton();
}

// I know this is broken at the moment until I implement actual game logic
function setOpponentButton() {
    var choice = Math.floor(Math.random() * 9);
    if (board[choice] === "[X]" || board[choice] === "[O]") {
        setOpponentButton();
    } else {
        board[choice] = "[O]";
        refreshBoard();
    }
}