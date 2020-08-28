// A new task will be created as incomplete
function newTask(title, description) {
  const task = {
    title: title,
    description: description,
    complete: false,
    markComplete: function completeTask() {
      this.complete = true;
    },
    logState: function logTaskState() {
      console.log(`${this.title} has${this.complete ? " " : " not "}been completed`);
    }
  };
  return task;
}

// DRIVER CODE BELOW
const task1 = newTask('Clean Cat Litter', 'Take all the doodoo out of the litter box');
const task2 = newTask('Do Laundry', '😢');
const tasks = [task1, task2];


task1.logState(task1); // Clean Cat Litter has not been completed
task1.markComplete(task1);
task1.logState(task1); // Clean Cat Litter has been completed

console.log(tasks)
