import { useNavigate, useLocation } from "react-router-dom"
import { useRef, useState, useEffect, useCallback } from "react"
import sidebar from "../assets/sidebar.png"
import logo from '../assets/kpoplogo.PNG'

export default function NavBar() {
    const navigate = useNavigate()
    const location = useLocation()

    const navItems = [
        { path: "/", label: "Home"}, 
        { path: "/about", label: "About Us"}, 
        { path: "/spons", label: "Sponsors"}, 
        { path: "/newsletter", label: "Newsletter"}, 
    ]


    const [barVisible, setBarVisible] = useState(false)

    const toggleVisible = useCallback(() => {
        setBarVisible((prevVisible) => !prevVisible);
    }, []);

    const sidebarRef = useRef(null);

    useEffect(() => {
        function handleClickOutside(event) {
            if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
                toggleVisible(); // Close sidebar when clicking outside
            }
        }

        if (barVisible) {
            document.addEventListener("mousedown", handleClickOutside);
        }

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [barVisible, toggleVisible]);

    // if the dimensions change, bar visible must be set to false ?

    return (
        <>  
            
            <div className="group fixed z-[60]" onClick={toggleVisible}>
                <img className="md:hidden fixed w-8 h-8 ml-4 mt-3 opacity-[70%]" alt="sidebar logo" src={sidebar}></img>
            </div>
            
            {
                barVisible && (
                    <section ref={sidebarRef} className="fixed w-3/5 min-h-screen bg-white z-50 opacity-90 flex flex-col items-center h-full pt-[20%]">
                        
                      {
                        navItems.map(({path, label}) => (
                            <button 
                                key={path}
                                onClick={() => navigate(path)}
                                className={`block text-l shadow-none ${
                                    location.pathname === path 
                                        ? "text-blue-400 underline underline-offset-8 decoration-pink-400 py-5"
                                        : "text-blue-400 hover:underline hover:underline-offset-8 hover:decoration-pink-400 py-5"
                                }`}
                            >
                                {label}
                            </button>
                        ))

                      }
                        
                        <button 
                            className="block py-5 text-l text-blue-400 hover:underline hover:underline-offset-8 hover:decoration-pink-400 shadow-none"
                            onClick={() => navigate("/", { state: { scrollToNotices: true } })}
                        >
                            Notices
                        </button>
                        <button 
                            className=" block py-5 text-l text-blue-400 hover:underline hover:underline-offset-8 hover:decoration-pink-400 shadow-none"
                            onClick={() => navigate("/about", { state: { scrollToJoin: true } })}>
                            Join Us
                        </button>
                        
                    </section>
                    
                )
            }
            <div className="flex h-[70px] bg-white max-md:hidden fixed w-full z-[100] align-center">  
                <img src={logo} className="w-15 h-12 pl-5 pt-2 pr-1" onClick={() => navigate("/")}></img>
                {
                    navItems.map(({path, label}) => (
                        <button
                            key={path}
                            onClick={() => navigate(path)}
                            className={`block px-3 py-2 text-xl font-semibold max-md:text-sm ${
                                location.pathname === path
                                    ? "text-blue-400 underline underline-offset-8 decoration-pink-400"
                                    :  "text-blue-400 hover:underline hover:underline-offset-8 hover:decoration-pink-400"
                            }`}
                        >
                            {label}
                        </button>
                    ))
                    
                }
                    <button 
                        className="  max-md:text-sm block px-3 py-2 text-xl text-blue-400 hover:underline hover:underline-offset-8 hover:decoration-pink-400 font-semibold"
                        onClick={() => navigate("/", { state: { scrollToNotices: true } })}
                    >
                        Notices
                    </button>
                    <button 
                        className="  max-md:text-sm block px-3 py-2 text-xl text-blue-400 hover:underline hover:underline-offset-8 hover:decoration-pink-400 font-semibold"
                        onClick={() => navigate("/about", { state: { scrollToJoin: true } })}>
                        Join Us
                    </button>
                
                </div>
        </>
        
    )
}