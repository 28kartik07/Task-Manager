Question 1 : How long did you spend on the coding test? 

Answer 1 : It took me 2 days to complete the given functionality with a basic UI.

----------------------------------------------------------------------------------------------

Question 2 : What was the most useful feature that was added to the latest version of your chosen language? Please include a snippet of code that shows how you've used it.

Answer 2 : One of the most useful features added to React is the "Hooks API", introduced in React 16.8. It revolutionized functional components by allowing them to manage state and side effects without needing class components. Another indispensable tool in modern React applications is React Router DOM, which enables declarative routing to manage navigation and dynamic rendering based on URL paths. Together, they simplify state management, side effects, and navigation.

    Hooks code snippet : It is used in every component file for e.g in Popup.jsx

    import React, { useState } from 'react';

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
    }
    
            -----------------------------------------------------------------

    React router code snippet : in file :- App.jsx
        const router = createBrowserRouter([
        {
        path : "/",
        element : <Applayout />,
        children :[
            {
            path : "/",
            element : <Home/>
            }
        ] 
        }
    ]);

----------------------------------------------------------------------------------------------

Question 3 : How would you track down a performance issue in production? Have you ever had to do this?
Answer 3 : 
    -> Use monitoring tools to identify the symptoms like slow endpoints, resource spikes, and error patterns reported by users.

    -> Recreate the problem in a staging environment under similar production conditions using traffic simulators.

    -> Analyze logs and metrics for anomalies in server, application, or database performance.

    -> Use profiling and debugging tools to trace slow operations, resource bottlenecks, or excessive computation.

    -> Apply fixes and validate solution in staging before rolling it out to production.

----------------------------------------------------------------------------------------------

Question 4 : If you had more time, what additional features or improvements would you consider adding to the task management application?
Answer 4 : 
-> Enhanced UI/UX : 
    I would Upgrade the UI of the app, As in given time I focused more on the funcationality rather than the UI.

-> User Authentication : 
    Allow multiple users with individual task lists and have their personal account. We can also add integration with third-party login options (e.g., Google, Facebook).

-> Notifications and Reminders : 
    Set reminders for due tasks via email or push notifications.

-> Backend Implementaion : 
    I would definitely integrate it with a Database to make it more scalable.

