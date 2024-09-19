import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { useState, useEffect } from 'react'
import axios from 'axios'

import About from './components/About'
import Contact from './components/Contact'
import Home from './components/Home'
import Nav from './components/Nav'
import Phone from './components/Phone'
import PostText from './components/PostText'
import Workskin from './components/Workskin'

import './css/main.css'

function App() {
  
    return (
        <div className='App'>
            <Router>

                <Nav />

                <Routes>
                    <Route exact path='/' element={ <Home /> } />
                    <Route exact path='about' element={ <About /> } />
                    <Route exact path='contact' element={ <Contact /> } />
                    <Route exact path='workskin' element={ <Workskin /> } />
                    <Route exact path='phone' element={ <Phone /> }>
                        <Route path='posttext' element={ <PostText /> } />
                    </Route>
                </Routes>

            </Router>  
        </div>
    )
}

export default App
