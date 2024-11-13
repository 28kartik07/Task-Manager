import {useState,useEffect} from "react"
import Taskcard from "./cards/Taskcard";
function Upcoming({tasks})
{
    useEffect(() => {
        // Persist tasks in local storage
        localStorage.setItem("tasks", JSON.stringify(tasks));
    }, [tasks]);
    return (
        <div>
            {tasks.map((task, index) => {
                const taskDueDate = new Date(task.duedate);
                const currentDate = new Date();
              
                if (taskDueDate > currentDate) {
                  return <Taskcard key={index} task={task} />;
                }
                return null;
            })}
        </div>
    )
}

export default Upcoming