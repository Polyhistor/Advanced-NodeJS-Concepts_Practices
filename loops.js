// Start
const pendingTimers = [];
const pendingOSTasks = [];
const pendingOperations = [];

// New timers, tasks, operations are recorded from my file running
myFile.runContents();

function shouldContinue() {
  // Check one: any pending setTimout, setInterval, setImmediate?
  // Check two: any pending OS tasks ? (like server listening to port)
  // Check three: any pending long running operations ? (like fs modules)
  return (
    pendingTimers.length || pendingOSTasks.length || pendingOperations.length
  );
}

// Entiry body executes in one 'tick'
while (shouldContinue()) {
  // 1) Node looks at pending times and see if any functions are ready to be called. setTimeout, setInterval.
  // 2) Node looks at pending OS tasks and pending operations and callsbacks
  // 3) Pause execution. Continue when ...
  //       - a new pending OS task is done
  //       - a new pending operation is done
  //       - a timer is about to complete
  // 4) Look at pending timers.
  // 5) Handle any 'close' events
}

// exit back to terminal
