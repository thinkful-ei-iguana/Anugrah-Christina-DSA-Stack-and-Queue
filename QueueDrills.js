const queue = require('./queue');


const starTrekQ = new queue();

starTrekQ.enqueue('Kirk');
// starTrekQ.enqueue('Spock');
starTrekQ.enqueue('Uhura');
starTrekQ.enqueue('Sulu');
starTrekQ.enqueue('Checkov');


const peek = queue => {
  console.log(queue.first);
};

peek(starTrekQ);

const isEmpty = queue => {
  if (!queue.first) {
    return true;
  }

  return false;
};

isEmpty(starTrekQ);

function display(queue) {
  if (!queue.first) {
    return console.log('it is empty');
  }
  let currNode = queue.first;
  while(currNode) {
    console.log(currNode.data);
    currNode = currNode.next;
  }

// const display = queue => {
//   console.log(JSON.stringify(queue));
}

display(starTrekQ);