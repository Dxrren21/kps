import {Routes, Route, useNavigate, useLocation} from 'react-router'

import Home from './pages/Home'
import Register from './pages/Register'
import Login from './pages/Login'
import About from './pages/About'
import Events from './pages/Media'
import Shop from './pages/Shop'
import NavBar from './components/NavBar'
import Spons from './pages/Spons'
import Newsletter from './pages/Newsletter'


export default function Router() {
    const location = useLocation()
    return (
        <>
            <section>
                {location.pathname !== "/" && <NavBar />}
            </section>
           
            <Routes classname="main">
                <Route path="/" element={<Home />}/>
                <Route path='/register' element={<Register />}/>
                <Route path='/login' element={<Login />}/>
                <Route path='/about' element={<About />}/>
                <Route path='/media' element={<Events />}/>
                <Route path='/shop' element={<Shop />}/>
                <Route path='/spons' element={<Spons />}/>
                <Route path='/newsletter' element={<Newsletter />}/>
            </Routes>
        </>
    )
}