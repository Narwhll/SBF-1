import './App.css'
import { BrowserRouter as Router, Route, Routes, Link, useParams } from 'react-router-dom'

import CreateList from './createlist'
import { useState } from 'react'
import ListofCard from './tasklistt'

function App() {
    const [task, newTask] = useState([])
    const [date, newDate] = useState([])

    return (
    <div>
        <div class="navbar">
            <Link class="logo" to="/">
                <i class="bx bxs-pen"></i>
                {" "} letsdoit!
            </Link>
            <div class="isi">
                <div class="drop">
                    <button class="dropb">
                        Your Lists
                    </button>
                    <div class="content">
                        <Link to="/savedlists">Saved Lists</Link>
                        <Link to="/createlist">Create a List</Link>
                    </div>
                    </div>
            </div>
            <Link class="logout" to="/logout">
                <i class='bx bxs-user-circle' ></i>
                {" "} Logout
            </Link>
        </div>
        <Routes>
        <Route path="/savedlists" element={<ListofCard task={task} newTask={newTask} date={date} newDate={newDate}/>} />
        <Route path="/createlist" element={<CreateList task={task} newTask={newTask} date={date} newDate={newDate}/>} />
        </Routes>
    </div>
  )
}

export default App
