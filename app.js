const tarotCards = [
  "The Fool", "The Magician", "The High Priestess", "The Empress", "The Emperor", "The Hierophant", "The Lovers", "The Chariot", "Strength", "The Hermit", "Wheel of Fortune", "Justice", "The Hanged Man", "Death", "Temperance", "The Devil", "The Tower", "The Star", "The Moon", "The Sun", "Judgement", "The World", "The Universe"];

let userName = prompt("Welcome to the Tarot Path. What is your name?");
alert(`Hello ${userName}, take a moment and think about something you’d like to gain insight on.`);

let number = Number(prompt("What is your favourite number from 0 to 22?"));

if (number >= 0 && number <= 22) {
  alert(`Good Luck, ${userName}! Your chosen number ${number} reveals "${tarotCards[number]}" —a symbol guiding your path. Consider what insight this card might offer you today.`);
} else {
  alert(`Sorry ${userName}, that’s not a valid number from 0 to 22.`);
 }