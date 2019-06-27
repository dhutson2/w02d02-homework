console.log('go to work!')

const cardDeck = [
  {
    name: "Bulbasaur",
    damage: 60
  }, {
    name: "Caterpie",
    damage: 40
  }, {
    name: "Charmander",
    damage: 60
  }, {
    name: "Clefairy",
    damage: 50
  }, {
    name: "Jigglypuff",
    damage: 60
  }, {
    name: "Mankey",
    damage: 30
  }, {
    name: "Meowth",
    damage: 60
  }, {
    name: "Nidoran - female",
    damage: 60
  }, {
    name: "Nidoran - male",
    damage: 50
  }, {
    name: "Oddish",
    damage: 40
  }, {
    name: "Pidgey",
    damage: 50
  }, {
    name: "Pikachu",
    damage: 50
  }, {
    name: "Poliwag",
    damage: 50
  }, {
    name: "Psyduck",
    damage: 60
  }, {
    name: "Rattata",
    damage: 30
  }, {
    name: "Squirtle",
    damage: 60
  }, {
    name: "Vulpix",
    damage: 50
  }, {
    name: "Weedle", 
    damage: 40
  }
];

const playerCards = [];
const computerCards = [];


const getRandomCard = (obj) => {
  const card = obj[Math.floor(Math.random()*obj.length)];
  return card;
}

const winCheck = () => {
  if(player.score === 3){
    console.log('Congrats! You are the true poke master!!')
  } else if(computer.score === 3){
    console.log('You still have much training to do... try again')
  } else{
    playGame();
  }
}

for(let i =0; i < 3; i++){
playerCards.push(getRandomCard(cardDeck));
computerCards.push(getRandomCard(cardDeck));

}


const player = {
  name: 'D',
  cards: playerCards,
  score: 0,
  playCard(){
    let card = getRandomCard(playerCards);
    return card
  }
}

const computer = {
  name: 'Ziggler',
  cards: computerCards,
  score: 0,
  playCard(){
    let card = getRandomCard(computerCards);
    return card
  }
}

// run play game function in console to start game... refresh browser before playing again otherwise you get endless game of pokemon!!
const playGame = () => {
  let playerCard = player.playCard();
  let computerCard = computer.playCard();
  if(playerCard.damage > computerCard.damage){
    console.log(`You played a wild ${playerCard.name}! and computer played a wild ${computerCard.name}`)
    player.score += 1
    console.log(`You won this round! You now have ${player.score} points and the computer has ${computer.score} points.`)
  } else if(playerCard.damage < computerCard.damage){
    console.log(`Computer played a wild ${computerCard.name} and You played a wild ${playerCard.name}!`)
    computer.score += 1
    console.log(`You lost this round! You now have ${player.score} points and the computer has ${computer.score} points.`)
  } else{
    playGame();
  } winCheck();
}








