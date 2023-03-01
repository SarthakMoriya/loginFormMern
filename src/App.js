import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { Username, Password, Recovery, Profile, Register, Reset, PageNotFound } from './components'

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Username/>} />
                <Route path='/password' element={<Password/>} />
                <Route path='/recovery' element={<Recovery/>} />
                <Route path='/profile' element={<Profile/>} />
                <Route path='/register' element={<Register/>} />
                <Route path='/reset' element={<Reset/>} />
                <Route path='*' element={<PageNotFound/>} />
            </Routes>
        </BrowserRouter>
    )
}

export default App