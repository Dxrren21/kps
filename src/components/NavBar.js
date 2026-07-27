import { useNavigate, useLocation } from "react-router-dom"
import { useRef, useState, useEffect, useCallback } from "react"
import sidebar from "../assets/sidebar.png"
import logo from '../assets/kpopLogo.png'
import boy from "../assets/boy.png"
import girl from "../assets/girl.png"

export default function NavBar() {
    const navigate = useNavigate()
    const location = useLocation()

    const navItems = [
        { path: "/", label: "Home"},
        { path: "/about", label: "About Us"},
        { path: "/spons", label: "Sponsors"},
        { path: "/newsletter", label: "Archives"},
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

    return (
        <>
            {/* Mobile hamburger trigger */}
            <div className="group fixed z-[60] md:hidden" onClick={toggleVisible}>
                <div className="fixed ml-4 mt-3 w-10 h-10 rounded-full bg-white/90 shadow-md flex items-center justify-center backdrop-blur">
                    <img className="w-5 h-5 opacity-70" alt="menu" src={sidebar}></img>
                </div>
            </div>

            {/* Mobile sidebar */}
            {
                barVisible && (
                    <section
                        ref={sidebarRef}
                        className="fixed w-3/5 min-h-screen bg-pastel-hero z-50 flex flex-col items-center h-full pt-[20%] shadow-2xl"
                    >
                        {
                            navItems.map(({path, label}) => (
                                <button
                                    key={path}
                                    onClick={() => { navigate(path); toggleVisible(); }}
                                    className={`block px-3 py-3 text-xl font-semibold max-md:text-base shadow-none focus:shadow-none focus:outline-none transition-colors ${
                                        location.pathname === path
                                            ? "text-ink underline underline-offset-8 decoration-pastel-purple-dark"
                                            : "text-ink/70 hover:text-ink hover:underline hover:underline-offset-8 hover:decoration-pastel-pink-dark"
                                    }`}
                                >
                                    {label}
                                </button>
                            ))
                        }

                        <button
                            className="block py-4 text-lg text-ink/70 hover:text-ink hover:underline hover:underline-offset-8 hover:decoration-pastel-pink-dark shadow-none"
                            onClick={() => { navigate("/", { state: { scrollToNotices: true } }); toggleVisible(); }}
                        >
                            Notices
                        </button>
                        <div className="group relative mt-4">
                            <button
                                className="px-8 py-3 rounded-full text-base font-semibold text-white bg-gradient-to-r from-pastel-blue-dark via-pastel-pink-dark to-pastel-purple-dark shadow-md hover:shadow-lg transition-shadow"
                                onClick={() => { navigate("/about", { state: { scrollToJoin: true } }); toggleVisible(); }}
                            >
                                Join Us
                            </button>
                            <img src={girl} alt="" className="absolute top-[-35%] right-0 w-[60px] h-[60px] object-contain opacity-0 group-hover:opacity-100 transition-opacity duration-150 pointer-events-none z-10" />
                        </div>
                    </section>
                )
            }

            {/* Desktop sticky navbar */}
            <div className="hidden md:flex h-[76px] bg-white/80 backdrop-blur-md fixed w-full z-[100] items-center justify-between px-8 shadow-sm border-b border-pastel-purple-light">
                <img
                    src={logo}
                    className="w-[56px] h-[50px] object-contain cursor-pointer"
                    alt="KPS logo"
                    onClick={() => navigate("/")}
                ></img>

                <div className="flex items-center gap-2">
                    {
                        navItems.map(({path, label}) => (
                            <button
                                key={path}
                                onClick={() => navigate(path)}
                                className={`px-4 py-2 text-base font-semibold rounded-full transition-colors ${
                                    location.pathname === path
                                        ? "text-ink bg-pastel-purple-light"
                                        : "text-ink/70 hover:text-ink hover:bg-pastel-blue-light shadow-none"
                                }`}
                            >
                                {label}
                            </button>
                        ))
                    }
                    <button
                        className="px-4 py-2 text-base font-semibold rounded-full text-ink/70 hover:text-ink hover:bg-pastel-pink-light transition-colors shadow-none"
                        onClick={() => navigate("/", { state: { scrollToNotices: true } })}
                    >
                        Notices
                    </button>
                </div>

                <div className="group relative">
                    <button
                        className="px-6 py-2.5 rounded-full text-base font-semibold text-white bg-gradient-to-r from-pastel-blue-dark via-pastel-pink-dark to-pastel-purple-dark shadow-md hover:shadow-lg hover:scale-105 transition-all"
                        onClick={() => navigate("/about", { state: { scrollToJoin: true } })}>
                        Join Us
                    </button>
                    <img src={boy} alt="" className="absolute top-[-35%] right-0 w-[60px] h-[60px] object-contain opacity-0 group-hover:opacity-100 transition-opacity duration-150 pointer-events-none z-10" />
                </div>
            </div>
        </>
    )
}
