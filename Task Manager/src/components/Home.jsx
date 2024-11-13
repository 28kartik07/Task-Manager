import '../css/home.css'
function Home()
{
    function handleClick()
    {
        console.log("add is clicked");
    }
    return (
        <div className="home">

            <div className="add_task">
                <button className="add_task_element" onClick={handleClick}>Add Task</button>
                <button className="add_task_element" onClick={handleClick}>Search Task</button>
            </div>

            <div className="task_category">
                <div className="task_element">
                    <h1>upcoming tasks</h1>
                </div>
                <div className="task_element">
                    <h1>over due tasks</h1>
                </div>
                <div className="task_element">
                    <h1>competed tasks</h1>
                </div>
            </div>
            
        </div>

    )
}

export default Home;