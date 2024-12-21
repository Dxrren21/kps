import {Routes, Route, useNavigate, useLocation} from 'react-router'

import Home from './pages/Home'
import Register from './pages/Register'
import Login from './pages/Login'
import About from './pages/About'
import Events from './pages/Events'
import Shop from './pages/Shop'

export default function Router() {
    return (
        <>
            <Routes classname="main">
                <Route path="/" element={<Home />}/>
                <Route path='/register' element={<Register />}/>
                <Route path='/login' element={<Login />}/>
                <Route path='/about' element={<About />}/>
                <Route path='/events' element={<Events />}/>
                <Route path='/shop' element={<Shop />}/>
            </Routes>
        </>
    )
}