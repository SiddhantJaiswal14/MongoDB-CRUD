const mongoose = require("mongoose");
const Task = require("./task");
require("dotenv").config();

// database url
const dbURI = `mongodb+srv://siddhant:${process.env.PASSWORD}@cluster0.m7xi6.mongodb.net/Stige?retryWrites=true&w=majority`;

// connecting to database
mongoose
  .connect(dbURI)
  .then((result) => console.log("connected to db"))
  .catch((err) => console.log(err));

// Create Tasks
run();
async function run() {
  console.log("Created Tasks are:-");
  // Task 1
  const task1 = await Task.create({
    Description: "Play Cricket",
    Completed: false,
  });
  console.log(task1);

  // Task 2
  const task2 = await Task.create({
    Description: "Go to shopping",
    Completed: false,
  });
  console.log(task2);

  // Task 3
  const task3 = await Task.create({
    Description: "Complete Homework",
    Completed: true,
  });
  console.log(task3);

  // Task 4
  const task4 = await Task.create({
    Description: "Schedule an Appointment",
    Completed: true,
  });
  console.log(task4);

  // Task 5
  const task5 = await Task.create({
    Description: "Call your friends",
    Completed: true,
  });
  console.log(task5);

  // Task 6
  const task6 = await Task.create({
    Description: "Attend lectures",
    Completed: false,
  });
  console.log(task6);

  // Task 7
  const task7 = await Task.create({
    Description: "Go for cycling",
    Completed: false,
  });
  console.log(task7);

  // Task 8
  const task8 = await Task.create({
    Description: "Prepare some food",
    Completed: false,
  });
  console.log(task8);
}

// Read Tasks that are not completed

run();
async function run() {
  try {
    const isIncompleteTask = await Task.exists({ Completed: false });
    if (isIncompleteTask) {
      const incompleteTasks = await Task.find({ Completed: false });
      console.log("Incompleted Tasks are:-");
      console.log(incompleteTasks);
    } else {
      console.log("No incomplete task found!! All Tasks are completed");
    }
  } catch (err) {
    console.log(err.message);
  }
}

// Update all incomplete tasks as completed

run();
async function run() {
  try {
    await Task.updateMany({ Completed: true });
    console.log("All tasks are completed");
  } catch (err) {
    console.log(err.message);
  }
}

// Delete Task by Specific ID

run();
async function run() {
  const doesExist = await Task.exists({ _id: "61e190b3a6594078d33789ff" });
  if (doesExist) {
    try {
      await Task.deleteOne({ _id: "61e190b3a6594078d33789ff" });
      console.log("Task deleted successfully");
    } catch (err) {
      console.log(err.message);
    }
  } else {
    console.log("Sorry!! Could not find Task of this ID");
  }
}
