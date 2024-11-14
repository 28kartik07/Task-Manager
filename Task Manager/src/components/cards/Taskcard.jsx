import '../../css/taskcard.css'
function Taskcard({task,tasks,setNewTasks})
{
    function handleDelete(taskid)
    {
        // Filter out the task by its id
        const updatedTasks = tasks.filter(task => task.id !== taskid);
        
        // Update the tasks state
        setNewTasks(updatedTasks);
        
        // Optionally, update localStorage to persist the changes
        localStorage.setItem("tasks", JSON.stringify(updatedTasks));
    }
    return (
        <div className="main_card">

            <div style={{display:'flex', justifyContent:'space-between'}}>
                <h1 style={{marginLeft:'10px',marginTop:'0px',marginBottom:'0px'}}>{task.title}</h1>
                <button className={`priority-button ${task.priority === "high"? "high": task.priority === "medium" ? "medium": "low"}`}>
                    {task.priority}
                </button>
            </div>

            <div style={{display:'flex', justifyContent:'space-between'}}>
                <h4 style={{marginLeft:'30px',marginTop:'5px'}}>Due Date : {task.duedate}</h4>
            </div>

            <div style={{display:'flex',justifyContent:'space-evenly'}}>

                <button className="image-button">
                    <img className="image" src="/images/edit.png" alt="Delete" />
                </button>
                <button className="image-button" onClick={() => handleDelete(task.id)}>
                    <img className="image" src="/images/delete.png" alt="Delete" />
                </button>

                <button className="descbutton">Description</button>
            </div>
        </div>
    )
}
export default Taskcard