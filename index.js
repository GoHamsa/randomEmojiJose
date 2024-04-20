import { argv } from 'node:process';
import * as emoji from 'node-emoji';

const randomEmoji = emoji.random();

const userInput = argv[2];
if (userInput) {
  console.log(emoji.get(userInput));
} else {
  console.log(randomEmoji.emoji);
}
