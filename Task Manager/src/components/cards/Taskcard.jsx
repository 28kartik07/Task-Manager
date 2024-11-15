import '../../css/taskcard.css'
import HandleEdit from '../Handleedit';
import Description from '../Description';
function Taskcard({task,tasks,setNewTasks})
{
    function handleDelete(taskid)
    {
        const updatedTasks = tasks.filter(task => task.id !== taskid);
        setNewTasks(updatedTasks);
        localStorage.setItem("tasks", JSON.stringify(updatedTasks));
    }

    const handleUpdate = (updatedTask) => {
        const updatedTasks = tasks.map((task) =>
            task.id === updatedTask.id ? updatedTask : task
        );
        setNewTasks(updatedTasks);
    };

    return (
        <div className="main_card">
            <div style={{display:'flex', justifyContent:'space-between'}}>
                <h1 style={{marginLeft:'10px',marginTop:'0px',marginBottom:'0px'}}>{task.title}</h1>
                <button className={`priority-button ${task.priority === "high"? "high": task.priority === "medium" ? "medium": "low"}`}>
                    {task.priority}
                </button>
            </div>

            <div style={{display:'flex', justifyContent:'space-between'}}>
                <h4 style={{marginLeft:'10px',marginTop:'5px'}}>Due Date : {task.duedate}</h4>
            </div>

            <div style={{display:'flex',justifyContent:'space-evenly'}}>

                <HandleEdit task={task} onUpdate={handleUpdate}/>
                <button className="image-button" onClick={() => handleDelete(task.id)}>
                    <img className="image" src="/images/delete.png" alt="Delete" />
                </button>

                <Description task={task} onUpdate={handleUpdate} />

            </div>
        </div>
    )
}
export default Taskcard