import React, { useState } from "react";
import "../css/handleedit.css"; 

const HandleEdit = ({ task, onUpdate }) => {
    const [isPopupVisible, setPopupVisible] = useState(false);
    const [formData, setFormData] = useState(task);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSave = () => {
        onUpdate(formData); 
        setPopupVisible(false); 
    };

    return (
        <>
            <button
                className="image-button"
                onClick={() => setPopupVisible(true)}
            >
                <img className="image" src="/images/edit.png" alt="Edit" />
            </button>

            {isPopupVisible && (
                <div className="popup-overlay">
                    <div className="popup-content">
                        <h3>Edit Task</h3>
                        <form>
                            <label>
                                Title:
                                <input
                                    type="text"
                                    name="title"
                                    value={formData.title}
                                    onChange={handleInputChange}
                                />
                            </label>
                            <label>
                                Description:
                                <textarea
                                    name="description"
                                    value={formData.description}
                                    onChange={handleInputChange}
                                />
                            </label>
                            <label>
                                Due Date:
                                <input
                                    type="date"
                                    name="duedate"
                                    value={formData.duedate}
                                    onChange={handleInputChange}
                                />
                            </label>
                            <label>
                                Priority:
                                <select
                                    name="priority"
                                    value={formData.priority}
                                    onChange={handleInputChange}
                                >
                                    <option value="low">Low</option>
                                    <option value="medium">Medium</option>
                                    <option value="high">High</option>
                                </select>
                            </label>
                        </form>
                        <div className="popup-actions">
                            <button onClick={handleSave}>Save</button>
                            <button
                                onClick={() => setPopupVisible(false)}
                                className="cancel-button"
                            >
                                Cancel
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default HandleEdit;
