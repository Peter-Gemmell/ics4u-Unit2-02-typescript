/**
 * The program makes rock paper scissors
 *
 *
 * By: Peter Gemmell
 * Version: 1.0
 * Since:   2022-09-17
 */

import Stack from './Stack'
import promptSync from 'prompt-sync'

const prompt = promptSync()
const myStack = new Stack()

// Input & Process
while (true) {
  const userInput = prompt('Enter a number (! to leave loop): ')

  if (userInput === '!') {
    break
  } else {
    const number = parseInt(userInput)
    if (isNaN(number)) {
      console.log(`${userInput} is NaN`)
    } else {
      myStack.Push(number)
    }
  }
}
let tempStack = myStack.getStack()
console.log(tempStack)

console.log('Popped!')
myStack.popNumber()
tempStack = myStack.getStack()
console.log(tempStack)

console.log('\nDone.')
