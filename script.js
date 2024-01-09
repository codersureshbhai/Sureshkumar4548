
    
    const board = document.getElementById('board');
    let currentPlayer = 'X';
    let gameBoard = ['', '', '', '', '', '', '', '', ''];
    let gameOver = false;

    function checkWinner() {
        const winningCombinations = [
            [0, 1, 2], [3, 4, 5], [6, 7, 8],
            [0, 3, 6], [1, 4, 7], [2, 5, 8],
            [0, 4, 8], [2, 4, 6]
        ];

        for (const combo of winningCombinations) {
            const [a, b, c] = combo;
            if (gameBoard[a] && gameBoard[a] === gameBoard[b] && gameBoard[a] === gameBoard[c]) {
                return true;
            }
        }

        return false;
    }

    function checkTie() {
        return gameBoard.every(cell => cell !== '');
    }

    function handleClick(index) {
        if (!gameBoard[index] && !gameOver) {
            gameBoard[index] = currentPlayer;
            render();
            if (checkWinner()) {
                alert(`Player ${currentPlayer} wins!`);
                gameOver = true;
            } else if (checkTie()) {
                alert('It\'s a tie!');
                gameOver = true;
            } else {
                currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
            }
        }
    }

    function render() {
        board.innerHTML = '';
        gameBoard.forEach((value, index) => {
            const cell = document.createElement('div');
            cell.classList.add('cell');
            cell.textContent = value;
            cell.addEventListener('click', () => handleClick(index));
            board.appendChild(cell);
        });
    }

    render();


