import '../css/home.css'
import Popup from './Popup';
import Upcoming from './Upcoming';
import { useState,useEffect } from 'react';
function Home()
{
    const [tasks, setTasks] = useState(() => {
        // Initialize tasks from local storage
        const storedTasks = localStorage.getItem("tasks");
        return storedTasks ? JSON.parse(storedTasks) : [];
    });

    function setNewTasks(data)
    {
        setTasks(data);
    }
    
    return (
        <div className="home">

            <div className="add_task">
                <Popup tasks={tasks} setNewTasks={setNewTasks}/>
                <button>hello world</button>
            </div>

            <div className="task_category_label">
                <h3>upcoming tasks</h3>
                <h3>over due tasks</h3>
                <h3>competed tasks</h3>
            </div>

            <div className="task_category">
                <div className="task_element">
                    <Upcoming tasks={tasks} setNewTasks={setNewTasks}/>
                </div>
                <div className="task_element">
                    
                </div>
                <div className="task_element">
                    
                </div>
            </div>
            
        </div>

    )
}

export default Home;