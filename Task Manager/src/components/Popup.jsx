import React, { useState } from 'react';
import '../css/popup.css';

const Popup = ({tasks , setNewTasks}) => {
    const [isPopupVisible, setIsPopupVisible] = useState(false);
    const togglePopup = () => setIsPopupVisible(!isPopupVisible);

    const [formData, setFormData] = useState({
        title: "",
        description: "",
        duedate: "",
        priority: "",
        completed: false,
        id: ""
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const addTask = (e) => {
        e.preventDefault();
        const newid = Date.now().toString();
        const newtask = {
            ...formData,
            id: newid
        }
        const updatedTasks = [...tasks, newtask];
        setNewTasks(updatedTasks);
        togglePopup();
    };

    return (
        <div>
            <button className='add-task-button' onClick={togglePopup}>Add Task</button>

            {isPopupVisible && (
                <div
                    style={{
                        position: 'fixed',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        backgroundColor: 'rgb(24, 24, 24)',
                        padding: '20px',
                        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
                        height: '20rem',
                        width: '20rem',
                        zIndex: 1000,
                    }}
                >

<form>
    <div>
        <label htmlFor="title">Title:</label>
        <input
            type="text"
            name="title"
            id="title"
            placeholder="Enter title"
            value={formData.title}
            onChange={handleChange}
        />
    </div>

    <div>
        <label htmlFor="description">Description:</label>
        <textarea
            name="description"
            id="description"
            placeholder="Enter description"
            value={formData.description}
            onChange={handleChange}
        ></textarea>
    </div>

    <div>
        <label htmlFor="duedate">Due Date:</label>
        <input
            type="date"
            name="duedate"
            id="duedate"
            value={formData.duedate}
            onChange={handleChange}
        />
    </div>

    <div>
        <label htmlFor="priority">Priority:</label>
        <input
            type="text"
            name="priority"
            id="priority"
            placeholder="Enter priority"
            value={formData.priority}
            onChange={handleChange}
        />
    </div>

    <div className="form-actions">
        <button type="button" onClick={addTask}>Add</button>
        <button type="button" onClick={togglePopup} className="cancel-button">Cancel</button>
    </div>
</form>

                    
                </div>
            )}

            {isPopupVisible && (
                <div
                    style={{
                        position: 'fixed',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        backgroundColor: 'rgba(0, 0, 0, 0.5)',
                        zIndex: 999,
                    }}
                    onClick={togglePopup}
                />
            )}
        </div>
    );
};

export default Popup;
