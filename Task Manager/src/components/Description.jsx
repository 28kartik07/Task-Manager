import React, { useState } from "react";
import "../css/description.css";

const Description = ({ task, onUpdate }) => {
    const [isPopupVisible, setPopupVisible] = useState(false);

    const handleMarkAsCompleted = () => {
        const updatedTask = { ...task, completed: true };
        onUpdate(updatedTask); 
        setPopupVisible(false); 
    };

    return (
        <>
            <button
                className="completed-button"
                onClick={() => setPopupVisible(true)}
            >
                Description
            </button>

            {isPopupVisible && (
                <div className="popup-overlay">
                    <div className="popup-content">
                        <h3>Task Details</h3>
                        <div className="task-details">
                            <p><strong>Title:</strong> {task.title}</p>
                            <p><strong>Description:</strong> {task.description}</p>
                            <p><strong>Due Date:</strong> {task.duedate}</p>
                            <p><strong>Priority:</strong> {task.priority}</p>
                            <p><strong>Completed:</strong> {task.completed ? "Yes" : "No"}</p>
                        </div>
                        <div className="popup-actions">
                            <button onClick={handleMarkAsCompleted}>
                                Mark as Completed
                            </button>
                            <button
                                onClick={() => setPopupVisible(false)}
                                className="cancel-button"
                            >
                                Close
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default Description;
