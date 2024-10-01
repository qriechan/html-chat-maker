import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import About from './components/About'
import HSR from './components/HSR/HSR'
import Nav from './components/Nav'
import Ios from './components/iOS/iOS'
import Workskin from './components/Workskin'
import Feedback from './components/Feedback'
import KKT from './components/KKT/KKT'
import Login from './components/accounts/Login'
import Profile from './components/accounts/Profile'
import Account from './components/accounts/Account'

import './css/main.css'

function App() {
  
    return (
        <div className='App'>
            <Router>

                <Nav />

                <Routes>
                    <Route exact path='/' element={ <About /> } />
                    <Route exact path='hsr' element={ <HSR /> } />
                    <Route exact path='ios' element={ <Ios /> } />
                    <Route exact path='kkt' element={ <KKT /> } />
                    <Route exact path='workskin' element={ <Workskin /> } />
                    <Route exact path='feedback' element={ <Feedback /> } />
                    <Route exact path='account' element={ <Account /> } />
                    <Route exact path='login' element={ <Login /> } />
                    <Route exact path='profile' element={ <Profile /> } />
                </Routes>

            </Router>  
        </div>
    )
}

export default App
