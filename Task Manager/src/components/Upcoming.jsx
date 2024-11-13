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
            {tasks.map((task, index) => (

                <Taskcard key={index} task={task}/>

            ))}
        </div>
    )
}

export default Upcoming