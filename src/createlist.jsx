import { useState } from "react"
import "./create.css"

function CreateList({task, newTask, date, newDate}) {

    const [inputDate, newinputDate] = useState("")
    const [inputTask, newInput] = useState("")

    const addTask = () => {
        if (inputTask.trim() && inputDate.trim()) {
            newTask([...task, inputTask]);
            newInput("");
            newDate([...date, inputDate])
            newinputDate("")
        }

    }
    

    return (
        <div class="box">
            <div class="title">
                <h2>Create a new task.</h2>
            </div>
            <div class="subtitle">
                <p2>Task Name</p2>
            </div>
            <div class="masuk">
                <input type="text" placeholder="Name" value={inputTask} onChange={(a) => newInput(a.target.value)}>
                </input>
            </div>  
            <div class="subtitle">
                <p2>Due Date</p2>
            </div>
            <div class="masuk">
                <input type="text" placeholder="Enter the due date" value={inputDate} onChange={(a) => newinputDate(a.target.value)}>
                </input>
            </div>
            <button onClick={addTask} class="addtask">
                Add Task
            </button>
        </div>
        
    )
}
export default CreateList;