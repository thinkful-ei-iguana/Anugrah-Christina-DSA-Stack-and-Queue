const queue = require('./queue');


// const starTrekQ = new queue();

// starTrekQ.enqueue('Kirk');
// // starTrekQ.enqueue('Spock');
// starTrekQ.enqueue('Uhura');
// starTrekQ.enqueue('Sulu');
// starTrekQ.enqueue('Checkov');


// const peek = queue => {
//   console.log(queue.first.data);
// };

// peek(starTrekQ);

// const isEmpty = queue => {
//   if (!queue.first) {
//     return true;
//   }

//   return false;
// };

// isEmpty(starTrekQ);

// function display(queue) {
//   if (!queue.first) {
//     return console.log('it is empty');
//   }
//   let currNode = queue.first;
//   while(currNode) {
//     console.log(currNode.data);
//     currNode = currNode.next;
//   }


// }

// display(starTrekQ);


let mDancers = new queue();

mDancers.enqueue('Frank');
mDancers.enqueue('John');
mDancers.enqueue('Sherlock');
mDancers.enqueue('David');
mDancers.enqueue('Christopher');

let fDancers = new queue();

fDancers.enqueue('Jane');
fDancers.enqueue('Madonna');
fDancers.enqueue('Beyonce');

console.log(fDancers);
console.log(mDancers);

// function SquareDance(F, M) {
//   while (F.first && M.first) {
//     F.dequeue();
//     M.dequeue();
//   }
//   display(F);
//   display(M);


// }
// SquareDance(fDancers, mDancers);


function ophidian(line) {
  while (line.first) {
    let paperwork = Math.random();
    let customer = line.first;
    if (paperwork <= .25) {
      line.dequeue();
      line.enqueue(customer); 
      console.log('Bad! Back of the line for you!');       
    } else {
      line.dequeue();
      console.log('It was a pleasure serving you.  Next, please!');
    }      
  }
}

ophidian(mDancers);