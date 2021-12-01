
// Create event listener on start button
// When user clicks on button
// use event listener click to then call makeBoard & makeHtmlBoard\

let button = document.querySelector('button')


 button.addEventListener("click", function(e) {
  e.preventDefault();
  playerOne = document.querySelector('#player-one').value;
  playerTwo = document.querySelector('#player-two').value;
  const game = new Game(6, 7, playerOne, playerTwo);
   game.makeBoard();
   game.makeHtmlBoard();
 })

// const game = new Game(6, 7);
// game.makeBoard();
// game.makeHtmlBoard();