const queue = require('./queue');


const starTrekQ = new queue();

// starTrekQ.enqueue("Kirk");
starTrekQ.enqueue("Spock");
starTrekQ.enqueue("Uhura");
starTrekQ.enqueue("Sulu");
starTrekQ.enqueue("Checkov");
// console.log(JSON.stringify(starTrekQ));

const peek = queue => {
  console.log(queue.first);
};

// peek(starTrekQ);

const isEmpty = queue => {
  if (!queue.first) {
    return true;
  }

  return false;
};

// isEmpty(starTrekQ);

const display = queue => {
  console.log(JSON.stringify(queue));
};