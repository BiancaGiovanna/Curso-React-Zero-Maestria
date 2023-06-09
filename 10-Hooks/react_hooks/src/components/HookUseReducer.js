import { useReducer, useState } from "react";

export default function HookUserReducer() {
  const [number, dispatch] = useReducer((state, action) => {
    return Math.random(state);
  });

  const initialTaks = [
    { id: 1, text: "Fazer tarefa1" },
    { id: 2, text: "Fazer tarefa2" },
  ];
  const taskReducer = (state, action) => {
    switch (action.type) {
      case "ADD":
        const newTask = {
          id: Math.random(),
          text: taskText,
        };
        setTaskText("");
        return [...state, newTask];

      case "DELETE":
        return state.filter((task) => task.id !== action.id);
      default:
        return state;
    }
  };
  const [taskText, setTaskText] = useState("");
  const [tasks, dispatchTasks] = useReducer(taskReducer, initialTaks);

  function handleSubmit(e) {
    e.preventDefault();

    dispatchTasks({ type: "ADD" });
  }

  function removeTask(id) {
    dispatchTasks({ type: "DELETE", id: id });
  }
  return (
    <div>
      <h2>HookUseReducer</h2>
      <p>Numero: {number}</p>
      <button onClick={dispatch}>Alterar Numero</button>

      <h3>Tarefas:</h3>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          onChange={(e) => setTaskText(e.target.value)}
          value={taskText}
        />
        <input type="submit" value="Enviar" />
      </form>
      {tasks.map((task) => (
        <li key={task.id} onDoubleClick={() => removeTask(task.id)}>
          {task.text}
        </li>
      ))}
    </div>
  );
}
