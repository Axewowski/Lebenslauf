const grid = document.querySelectorAll('.grid')
const mole = document.querySelector('.mole')
const timeLeft = document.querySelector('#time-left')
const score = document.querySelector('#score')

let result = 0;
let hitPosition;
let coutDownTimerId = setInterval(countDown, 1000)
let currentTime = 60;

function RandomSquare()
{
    grid.forEach(square => {
        square.classList.remove('mole')
    })

    let RandomSquare = grid[Math.floor(Math.random() * 9)]
    RandomSquare.classList.add('mole')
    
    hitPosition = RandomSquare.id
}

grid.forEach(square => {
    square.addEventListener('mousedown', () => {
        if (square.id === hitPosition) {
            result++;
            score.textContent = result;
            hitPosition = null;
        }
    })
})


function moveMole() {
    let timerId = null
    timerId = setInterval(RandomSquare, 1000)
}

moveMole()

function countDown() {

    currentTime--
    timeLeft.textContent = currentTime;

    if (currentTime == 0) {
        clearInterval(coutDownTimerId)
        alert("koniec gry" + result);
    }

}
