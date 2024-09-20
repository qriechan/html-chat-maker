import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { useState, useEffect } from 'react'
import axios from 'axios'

import About from './components/About'
import Contact from './components/Contact'
import HSR from './components/HSR/HSR'
import Nav from './components/Nav'
import Phone from './components/HSR/Phone'
import PostText from './components/HSR/PostText'
import Workskin from './components/Workskin'

import './css/main.css'

function App() {
  
    return (
        <div className='App'>
            <Router>

                <Nav />

                <Routes>
                    <Route exact path='about' element={ <About /> } />
                    <Route exact path='hsr' element={ <HSR /> } />
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
