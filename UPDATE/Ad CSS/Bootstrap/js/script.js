var allCol = document.getElementsByClassName('col');
var potez = document.getElementById('potez');
var gameState = ['', '', '', '', '', '', '', '', ''];
var gameRules = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];
var gameActive = true;
var currentPlayer = 'X';

for (const col of allCol) {
    col.addEventListener('click', colClicked)
}
potez.innerHTML = playerTurn();

function colClicked(event) {
    // ovdje se desava click na col
    var colSelected = event.target;
    var colIndex = parseInt(
        colSelected.getAttribute('data-col-index')
    );

    if (gameState[colIndex] !== '' || !gameActive) {
        return;
    }

    handleCellSelected(colSelected, colIndex);
    handleGameRules();

    console.log(gameState);

}

function handleCellSelected(colSelected, colIndex) {
    // ovdje logika za popunjavanje gameState
    console.log(colIndex);
    colSelected.innerHTML = currentPlayer;
    gameState[colIndex] = currentPlayer;
}

function handleGameRules() {
    var won = false;
    for (var i = 0; i <= 7; i++) {
        // [0, 1, 2], ['X', 'X', 'X']
        var rule = gameRules[i];
        var a = gameState[rule[0]]; // X
        var b = gameState[rule[1]]; // X
        var c = gameState[rule[2]]; // X

        if (a === '' || b === '' || c === '') {
            continue;
        }

        if (a === b && b === c) {
            won = true;
            break;
        }
    }

    if (won) {
        potez.innerHTML = winMessage();
        gameActive = false;
        return;
    }

    var draw = !gameState.includes('');
    if (draw) {
        potez.innerHTML = drawMessage();
        gameActive = false;
        return;
    }

    changePlayer();
}

function changePlayer() {
    currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
    potez.innerHTML = playerTurn();
}

function winMessage() {
    return `Pobijedio je igrac ${currentPlayer}`;
}

function drawMessage() {
    return 'Nerijeseno'
}

function playerTurn() {
    return `Na potezu je igrac ${currentPlayer}`;
}

function restartGame() {
    currentPlayer = 'X';
    gameActive = true;
    gameState = ['', '', '', '', '', '', '', '', ''];
    potez.innerHTML = playerTurn();
    for (const col of allCol) {
        col.innerHTML = '';
    }
}