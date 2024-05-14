import React from "react"
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import {addTask, deleteTask} from "./redux/task/taskSlice"
import { Task } from "./types";

function App() {
  const [input, setInput] = React.useState<string>("");
  const dispatch = useDispatch();
  const tasks = useSelector((state: any) => state);
  console.log('//.. task: ', tasks)
  
  const addTaskHandler = () => {
    dispatch(addTask(input));
    setInput("");
  }

  const deleteTaskHandler = (id: string) => {
    dispatch(deleteTask(id));
  }

  return (
    <>
      <div >
        <h1 >Todo App</h1>
          <div>
            <input type="text" value={input} placeholder="enter task"
              onChange={(e) => setInput(e.target.value)}
            />
          </div>
          <button type="submit" onClick={() => addTaskHandler()}>
            Add Task
          </button>
          <ul>
            {tasks && tasks.map((task: Task) => (
              <li key={task.id}>
                {task.description}
                <button onClick={() => deleteTaskHandler(task.id)}>Delete</button>
              </li>
            ))}
          
          </ul>
      </div>
    </>
  )
}

export default App
