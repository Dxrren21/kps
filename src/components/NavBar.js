import { useNavigate, useLocation } from "react-router-dom"

export default function NavBar() {
    const navigate = useNavigate()
    const location = useLocation()

    const navItems = [
        { path: "/", label: "Home"}, 
        { path: "/about", label: "About"}, 
        { path: "/media", label: "Media"}, 
        { path: "/shop", label: "Shop"}, 
    ]

    return (
        <div className="flex bg-white h-12">  
        {
            navItems.map(({path, label}) => (
                <button
                    key={path}
                    onClick={() => navigate(path)}
                    className={`block rounded-md px-3 py-2 text-base font-medium ${
                        location.pathname === path
                            ? "text-white bg-[#1D1E2C]"
                            :  "text-[#EF9CDA] hover:bg-[#FECEF1] hover:text-[#1D1E2C]"
                    }`}
                >
                    {label}
                </button>
            ))
        }
            {/* <button onClick={() => navigate('/')} className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white">Home</button>
            <button onClick={() =>  navigate('/about')} className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white">About</button>
            <button onClick={() =>  navigate('/media')} className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white">Media</button>
            <button onClick={() =>  navigate('/shop')} className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white">Shop</button>
             */}
        </div>
    )
}