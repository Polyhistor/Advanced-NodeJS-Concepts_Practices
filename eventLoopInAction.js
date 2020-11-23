const fs = require('fs');

setImmediate(() => console.log('Immediate 1 finished'), 0);

setTimeout(() => {
  console.log('Timer 1 finished'), 0;
});

fs.readFile('texto.txt', () => {
  console.log('i/o finished');

  setTimeout(() => {
    console.log('Timer 2 finished'), 0;
  });

  setTimeout(() => {
    console.log('Timer 3 finished'), 3000;
  });

  setImmediate(() => console.log('Immediate 2 finished'));

  process.nextTick(() => console.log('next tick'));
});

console.log('Hello from top-level code');
