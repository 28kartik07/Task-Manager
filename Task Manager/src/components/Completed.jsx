import {useState,useEffect} from "react"
import Taskcard from "./cards/Taskcard";
function Completed({tasks , setNewTasks})
{
    useEffect(() => {
        // Persist tasks in local storage
        localStorage.setItem("tasks", JSON.stringify(tasks));
    }, [tasks]);
    return (
        <div>
            {tasks.map((task, index) => {
                if (task.completed == true) {
                  return <Taskcard key={index} task={task} tasks={tasks} setNewTasks={setNewTasks}/>;
                }
                return null;
            })}
        </div>
    )
}

export default Completed