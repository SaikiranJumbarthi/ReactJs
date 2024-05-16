import React, { useState } from "react";

const Project1 = () => {
  const [tasks, setTasks] = useState([
    { id: 1, name: "Task 1", completed: false },
    { id: 2, name: "Task 2", completed: false },
    { id: 3, name: "Task 3", completed: false },
    { id: 4, name: "Task 4", completed: false },
    { id: 5, name: "Task 5", completed: false },
  ]);
  const [completedCount, setCompletedCount] = useState(0);

  const handleCheckboxClick = (taskId) => {
    const updatedTasks = tasks.map((task) => {
      if (task.id === taskId) {
        return { ...task, completed: !task.completed };
      }
      return task;
    });
    setTasks(updatedTasks);
    const newCompletedCount = updatedTasks.filter(
      (task) => task.completed
    ).length;
    setCompletedCount(newCompletedCount);
  };

  const completedTasksCount = tasks.filter((task) => task.completed).length;
  const pendingTasksCount = tasks.length - completedTasksCount;

  return (
    <div>
      <h1>Project1</h1>
      <div>
        <h2>
          Summary: {completedCount}/{tasks.length} todos completed
        </h2>
        <div>
          <p>Completed tasks: {completedTasksCount}</p>
        </div>
        <div>
          <p>Pending tasks: {pendingTasksCount}</p>
        </div>
      </div>
      <div>
        {tasks.map((task) => (
          <div key={task.id}>
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => handleCheckboxClick(task.id)}
            />
            <label>{task.name}</label>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Project1;
