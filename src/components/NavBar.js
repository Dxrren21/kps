import { useNavigate, useLocation } from "react-router-dom"

export default function NavBar() {
    const navigate = useNavigate()
    const location = useLocation()

    const navItems = [
        { path: "/", label: "Home"}, 
        { path: "/about", label: "About"}, 
        { path: "/spons", label: "Sponsors"}, 
        // { path: "/shop", label: "Shop"}, 
    ]

    return (
        <div className="flex h-[70px] bg-gray-100">  
        {
            navItems.map(({path, label}) => (
                <button
                    key={path}
                    onClick={() => navigate(path)}
                    className={`block px-3 py-2 text-xl ${
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
                className="block px-3 py-2 text-xl text-blue-400 hover:underline hover:underline-offset-8 hover:decoration-pink-400"
                onClick={() => navigate("/", { state: { scrollToNotices: true } })}
            >
                Notices
            </button>
            <button 
                className="block px-3 py-2 text-xl text-blue-400 hover:underline hover:underline-offset-8 hover:decoration-pink-400"
                onClick={() => navigate("/about", { state: { scrollToJoin: true } })}>
                Join Us
            </button>
            {/* <button onClick={() => navigate('/')} className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white">Home</button>
            <button onClick={() =>  navigate('/about')} className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white">About</button>
            <button onClick={() =>  navigate('/media')} className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white">Media</button>
            <button onClick={() =>  navigate('/shop')} className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white">Shop</button>
             */}
        </div>
    )
}