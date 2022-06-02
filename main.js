// Size of the game area (in px)
const GAME_AREA_WIDTH = 700;
const GAME_AREA_HEIGHT = 500;

// Size of the paddles (in px)
const PADDLE_HEIGHT = 100;
const PADDLE_WIDTH = 20;

// Size of the ball (in px)
const BALL_SIZE = 20;

// Get the computers && players paddle elements
const computerPaddle = document.querySelector('.computer-paddle');
const playerPaddle = document.querySelector('.player-paddle');
const ball = document.querySelector('.ball');

// The y-velocity of the computer paddle
let computerPaddleYPosition = 200;
let computerPaddleYVelocity = 0;

// The y-velocity of the player paddle
let playerPaddleYPosition = 200;
let playerPaddleYVelocity = 0;

// The ball position
let ballXPosition;
let ballYPosition;
let ballXVelocity;
let ballYVelocity;


// Update the pong world
function update() {
    // Update the computer && players paddle's position
    computerPaddleYPosition = computerPaddleYPosition + computerPaddleYVelocity; // ** RIGHT NOW GOING DOWN ** // Determines paddle moves up and down ** ' + ' [up] ** ' - ' [down]; 
    playerPaddleYPosition = playerPaddleYPosition - playerPaddleYVelocity; // ** RIGHT NOW GOING UP ** // Determines paddle moves up and down ** ' + ' [up] ** ' - ' [down]; 

    // Apply the y-position 
    computerPaddle.style.top = `${computerPaddleYPosition}px`;
    if (computerPaddleYPosition <= 0 || computerPaddleYPosition >= 400) {
        computerPaddleYVelocity = computerPaddleYVelocity * -1;
    }

    playerPaddle.style.top = `${playerPaddleYPosition}px`;
    if (playerPaddleYPosition <= 0 || playerPaddleYPosition >= 400) {
        playerPaddleYVelocity = `${playerPaddleYVelocity}px`;
    }

    // // Update the ball's movement
    ballXPosition = ballXPosition + ballXVelocity;
    ballYPosition = ballYPosition + ballYVelocity;
    ball.style.left = ballXPosition + 'px';
    ball.style.top = ballYPosition + 'px';

    // Update the ball's velocity
    ballYVelocity = ballYVelocity - 0.05;

    //If statements for [Y] && [X] ball position to stay in area
    
}

// Call the update() function every 35ms
setInterval(update, 35);



// Event listeners to paddles
document.addEventListener('keydown', function (event) {
    if (event.key === 'w') {
        playerPaddleYVelocity = 3;
    } else if (event.key === 's') {
        playerPaddleYVelocity = - 3;
    } else if (event.key === 'ArrowDown') {
        computerPaddleYVelocity = 3;
    } else if (event.key === 'ArrowUp') {
        computerPaddleYVelocity = - 3;
    } else if (event.key === 'SpaceBar') {

    }
    console.log('keydown', event.key);
});