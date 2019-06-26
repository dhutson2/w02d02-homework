console.log('go to work!')



// OOO:

// ## The `game` object

// For each part, think about:
// * What's the best data type for this property? Number? String? Array? object? boolean? Some crazy combination of these).  
//   * Hint/reminder: use a property when you want to "keep track" of something
// * Or should you create a method?
//   * Hint/reminder: use a method when you want to "do" something

// #### The game should be able to:

// 1. keep a library of all the Pokemon cards that can be played (see the array in the "The Cards" section)
// 2. know what cards have been played
// 3. know how many cards are left to be played/dealt overall
// 4. track points for both the player and the computer
//     Note: Points are determined by the following: If the player's card beats the computer's card, the player gets one point (and vice versa). If there is a tie, no one gets a point.
// 5. track rounds
// 6. track number of rounds won for both player and computer
// 7. automatically deal 3 cards from the library to the player and 3 cards to the computer each round
// 8. determine the winner of each play
// 9. stop once there are no cards left or not enough to deal 3 to each the player and computer


// ## The `player` object

// ### The player should be able to:

// 1. see their stats: their points and how many rounds they've won.
// 2. see what cards they have been dealt/see what cards are left in their hand
// 3. pick a card from the hand that has been dealt to them (thereby playing this card agaist the computer's card). The round ends once this has happened 3 times.
// 4. receive new cards given to them by the game each round.
// 5. see the cards that they have played in the past.


// ## The "UI"

// The user should see the following in the console:

// - the scoreboard after each round
// - the cards in the player's hand
// - the cards in the computer's hand
// - the cards that are in play
// - the winner of each round (or if there was a tie)
// - the winner of the game when the game is over 
// - the final score when the game is over









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





class Player {
    
}




















