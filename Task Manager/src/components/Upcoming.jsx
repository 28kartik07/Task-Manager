import {useState,useEffect} from "react"
function Upcoming()
{
    useEffect(() => {
        // Persist tasks in local storage
        localStorage.setItem("tasks", JSON.stringify(tasks));
    }, [tasks]);
    return (
        <div>
            hello world
            {/* {tasks.map((task, index) => (
                <li key={index}>{task}</li>
            ))} */}
        </div>
    )
}

export default Upcoming