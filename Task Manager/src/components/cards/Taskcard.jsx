import '../../css/taskcard.css'
function Taskcard({task})
{

    return (
        <div className="main_card" style={{display:'flex' , flexDirection:'column', marginTop:'1rem'}}>

            <div style={{display:'flex', justifyContent:'space-between'}}>
                <h1 style={{marginLeft:'10px',marginTop:'0px',marginBottom:'0px'}}>{task.title}</h1>
                <button className={`priority-button ${task.priority === "high"? "high": task.priority === "medium" ? "medium": "low"}`}>
                    {task.priority}
                </button>
            </div>

            <div style={{display:'flex', justifyContent:'space-between'}}>
                <h4 style={{marginLeft:'50px',marginTop:'2px',marginBottom:'0px'}}>Due Date : {task.duedate}</h4>
            </div>
            <div style={{display:'flex',justifyContent:'space-evenly'}}>
                <button style={{marginTop:'20px',marginRight:'10px',height:'2rem' }}>
                    <img src="" alt="" />
                </button>
                <button style={{marginTop:'20px',marginRight:'10px',height:'2rem' }}> 
                    Delete
                </button>
                <button style={{marginTop:'20px',marginRight:'10px',height:'2rem' }}> Description</button>
            </div>
        </div>
    )
}
export default Taskcard