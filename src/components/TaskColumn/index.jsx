import React, { useContext } from "react";
import { ThemeContext, THEMES } from "../../App";


const TaskColumn = (props) => {
    const theme = useContext(ThemeContext);

    let taskCardClasses = "card mb-3 text-bg-info";
    if (theme === THEMES.dark) {
        taskCardClasses += " card mb-3 text-bg-dark";
    }
   
    return (
        <div className="col">

            <h3>{props.status}</h3>

            {props.tasks
            .filter((task) => task.status === props.status)
            .sort((a,b) => b.priority - a.priority)
            .map((task) => (
                <div className={taskCardClasses} key={task.id}>
                    <div className="card-body">
                        <h5 className="card-title">{task.title}</h5>
                        <p>{task.status}</p>
                        <p>{task.priority}</p>
                    </div>

                    <select className="form-select" 
                    aria-label="Default select example" 
                    defaultValue={props.status} 
                    onChange={(e) => props.onStatusChange(task.id, e.target.value)}>
                        {props.statuses.map((status) => (
                            <option key={status} value={status}>{status}</option>
                        ))}
                    </select>
                </div>
            ))}
        </div>            
    )
}

export default TaskColumn;