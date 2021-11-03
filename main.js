// Size of the game area (in px)
const GAME_AREA_WIDTH = 700;
const GAME_AREA_HEIGHT = 500;

// Size of the paddles (in px)
const PADDLE_HEIGHT = 100;
const PADDLE_WIDTH = 20;

// Size of the ball (in px)
const BALL_SIZE = 20;

//==========================================================================================================================

// Get the computers && players paddle elements
const computerPaddle = document.querySelector('.computer-paddle');
const playerPaddle = document.querySelector('.player-paddle');
const ball = document.querySelector('.ball');

// The y-velocity of the computers && players paddle
let computerPaddleYPosition = 200; // Determines start position for [paddle - right];
let computerPaddleYVelocity = 0; // Determines how direction, speed of [paddle - right] moves ** GOES PAST SCREEN FIX **

let playerPaddleYPosition = 200;
let playerPaddleYVelocity = 0;

//**

// Ball X/Y [Position/Velocity]
let ballPositionY = 300; // when its 480 position is [down] ** when its 0 positions [up] 
let ballVelocityY = 0.02; // when its POS # goes [up] ** when its NEG # it goes [down]

let ballPositionX = 340; // when its 680 position is [right] ** when its 0 position is [left]
let ballVelocityX = 0.02; // when its  POS # goes off to [left] ** when its NEG # goes off to [right] 

//==========================================================================================================================

// Update the pong world
function update() {

    // Update the computer && players paddle's position
    computerPaddleYPosition = computerPaddleYPosition + computerPaddleYVelocity; // ** RIGHT NOW GOING DOWN ** // Determines paddle moves up and down ** ' + ' [up] ** ' - ' [down]; 
    playerPaddleYPosition = playerPaddleYPosition - playerPaddleYVelocity; // ** RIGHT NOW GOING UP ** // Determines paddle moves up and down ** ' + ' [up] ** ' - ' [down]; 

    // Apply the y-position 
    computerPaddle.style.top = `${computerPaddleYPosition}px`;
    playerPaddle.style.top = `${playerPaddleYPosition}px`;

    // If statements for paddles reaching certain px to stop from leaving game area
    if (playerPaddleYPosition < 2) {
        playerPaddleYPosition = `${playerPaddleYPosition}px`;
    } else if (playerPaddleYPosition > 400) {
        playerPaddleYPosition = `${playerPaddleYPosition}px` + '300px';
    }

    // Computer if statements
    if (computerPaddleYPosition < 2) {
        computerPaddleYPosition = `${computerPaddleYPosition}px`;
    } else if (computerPaddleYPosition > 400) {
        computerPaddleYPosition = `${computerPaddleYPosition}px` + '300px';
    }
    //==========================================================================================================================

    //**

    // Update the ball's movement
    ballPositionY = ballPositionY - ballVelocityY;
    ball.style.top = ballPositionY + 'px';

    ballPositionX = ballPositionX - ballVelocityX;
    ball.style.left = ballPositionX + 'px';

    // Update the ball's velocity
    ballVelocityY = ballVelocityY - 0.05;
  // If statements for [Y] && [X] ball position to stay in area
    if (ballPositionY < 2) {
    ballPositionY = 0;
} else if (ballPositionY > 478) {
    ballPositionY = 480;
}

if (ballPositionX < 1) {
    ballPositionX = 0;
} else if (ballPositionX > 679) {
    ballPositionX = 680;
}

// If statements for [Y] && [X] ball velocity to stay in area
if (ballVelocityY < 0.05) { 
    ballVelocityY = ballVelocityY + 4; // POS # goes [up] && NEG # goes [down]
} else if(ballVelocityY > 0.05) {
    ballVelocityY = ballVelocityY - 1; 
}
if (ballVelocityX < 0.05 ) {
    ballVelocityX = 0; // POS # goes off to the [left] && NEG # goes of to the [right]
} 
}





// Call the update() function every 35ms
setInterval(update, 35);

//==========================================================================================================================

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
    } else if(event.key === 'SpaceBar') {
        
    }
    console.log('keydown', event.key);
});