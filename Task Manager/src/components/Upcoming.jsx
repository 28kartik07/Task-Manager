import {useState,useEffect} from "react"
import Taskcard from "./cards/Taskcard";
function Upcoming({tasks , setNewTasks})
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
            
                if (taskDueDate > currentDate && task.completed == false) {
                return <Taskcard key={index} task={task} tasks={tasks} setNewTasks={setNewTasks}/>;
                }
                return null;
            })}
        </div>
    )
}

export default Upcoming