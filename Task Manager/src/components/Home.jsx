import '../css/home.css';
import Completed from './Completed';
import Overdue from './Overdue';
import Popup from './Popup';
import Upcoming from './Upcoming';
import Search from './Search';
import { useState, useEffect } from 'react';

function Home() {
    const [tasks, setTasks] = useState(() => {
        const storedTasks = localStorage.getItem("tasks");
        return storedTasks ? JSON.parse(storedTasks) : [];
    });
    const [isSearchVisible, setSearchVisible] = useState(false);
    const [filteredTasks, setFilteredTasks] = useState(tasks);

    function setNewTasks(data) {
        setTasks(data);
    }

    useEffect(() => {
        setFilteredTasks(tasks);
    }, [tasks]);

    return (
        <div className="home">
            <div className="add_task">
                <Popup tasks={tasks} setNewTasks={setNewTasks} />
                <button
                    className="add-task-button"
                    onClick={() => setSearchVisible(true)}
                >
                    Search
                </button>
            </div>

            {isSearchVisible && (
                <Search
                    tasks={tasks}
                    onApply={(filtered) => setFilteredTasks(filtered)}
                    onClose={() => setSearchVisible(false)}
                />
            )}

            <div className="task_category">
                <div className="task_element">
                    <h3>Upcoming Tasks</h3>
                    <div className="scrollable-content">
                        <Upcoming tasks={filteredTasks} setNewTasks={setNewTasks} />
                    </div>
                </div>
                <div className="task_element">
                    <h3>Overdue Tasks</h3>
                    <div className="scrollable-content">
                        <Overdue tasks={filteredTasks} setNewTasks={setNewTasks} />
                    </div>
                </div>
                <div className="task_element">
                    <h3>Completed Tasks</h3>
                    <div className="scrollable-content">
                        <Completed tasks={filteredTasks} setNewTasks={setNewTasks} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;
