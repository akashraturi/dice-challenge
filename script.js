const player1_para = document.querySelector('#player1-para')
const player2_para = document.querySelector('#player2-para')
const player1_dice_img = document.querySelector('#player1-dice')
const player2_dice_img = document.querySelector('#player2-dice')
const winner = document.querySelector('#result')

roll = () => {
  const dice1_randNo = Math.floor(Math.random()*6)+1;
  const dice2_randNo = Math.floor(Math.random()*6)+1;
  
  player1_dice_img.setAttribute('src', `dice-images/dice-${dice1_randNo}-md.png`);
  player2_dice_img.setAttribute('src', `dice-images/dice-${dice2_randNo}-md.png`);

  if(dice1_randNo > dice2_randNo)
    winner.innerHTML = `<h3>Player 1 wins!</h3>`
  else if(dice1_randNo < dice2_randNo)
    winner.innerHTML = `<h3>Player 2 wins!</h3>`
  else
    winner.innerHTML = `<h3>It's a tie!</h3>`
}