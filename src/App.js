import React from 'react'
import './App.css'

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import Join from './component/Join'
import Chat from './component/Chat/Chat'

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path='/' exact element={<Join/>} />
                <Route path='/chat' element={<Chat/>} />
            </Routes>
        </Router>
    )
}

export default App;