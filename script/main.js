
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
}