/* eslint-disable indent */
const stack = require('./Stack.js');

let starTrek = new stack();

starTrek.push('Kirk');
starTrek.push('Spock');
starTrek.push('McCoy');
starTrek.push('Scotty');

function peek(stack) {
    console.log(stack.top.data);
}

function isEmpty(stack) {
    if (!stack.top) {
        return console.log('It is Empty');
    }
     return console.log('it\'s not empty');
}

function display(stack) {
    if (!stack.top) {
        return console.log('it is empty');
    }
    let currNode = stack.top;
    while(currNode) {
        console.log(currNode.data);
        currNode = currNode.next;
    }
}

function is_palindrome(s) {
    s = s.toLowerCase().replace(/[^a-zA-Z0-9]/g, '');
    let palStack = new stack();
    let sReverse = '';
    for (let i=0; i<s.length; i++) {
        palStack.push(s[i]);
    }
    let currNode = palStack.top;
    for (let i=0; i<s.length; i++) {
        sReverse += palStack.pop();
    }  
    if (s === sReverse) {
        return true;
    }
    else {
        return false;
    }
}


let emptyStack = new stack();
//peek(starTrek);
//isEmpty(starTrek);
//isEmpty(emptyStack);
//display(starTrek);

starTrek.pop();
starTrek.pop();
starTrek.push('Scotty');
//display(starTrek);

console.log(is_palindrome('dad'));
console.log(is_palindrome('A man, a plan, a canal: Panama'));
console.log(is_palindrome('1001'));
console.log(is_palindrome('Tauhida'));



//5
function sortStack(inputStack){
    let sortedStack = new stack();
    let highestNum;

    while (inputStack.top) {
        highestNum = inputStack.pop();
        while (sortedStack.top && sortedStack.top.data > highestNum){
            inputStack.push(sortedStack.pop());
        }
        sortedStack.push(highestNum);
    }
    while(sortedStack.top) {
        inputStack.push(sortedStack.pop());
    }
    return inputStack;
}
const test = function () {
    let testStack = new stack();

    testStack.push(3);
    testStack.push(4);
    testStack.push(55);
    testStack.push(21);

    return testStack;
};
let whatever = sortStack(test());
// console.log('sort number: ', sortStack(test()));
// console.log('sort stack', sortStack(main()));
display(whatever);


