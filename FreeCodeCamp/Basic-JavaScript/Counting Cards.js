/* You will write a card counting function. It will receive a card parameter and increment or decrement the global count variable according to the card's value (see table). The function will then return a string with the current count and the string "Bet" if the count is positive, or "Hold" if the count is zero or negative. The current count and the player's decision ("Bet" or "Hold") should be separated by a single space. */
var count = 0;

function cc(card) {
  // Only change code below this line
  if (card == 2 || card == 3 || card == 4 || card==5 || card==6) {
    count++;
  } else if (card == 10 || card == 'J' || card == 'Q' || card == 'K' || card == 'A'){
    count--;
  } else {
    count = 0 + count;
  } 
  
  if (count <= 0){
    return count+" Hold";
  } else {
    return count+" Bet";
  }
  // Only change code above this line
}

// Add/remove calls to test your function.
// Note: Only the last will display
cc(7); cc(8); cc(9);
