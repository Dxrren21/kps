import { Link, useNavigate } from "react-router-dom";


export default function ButtonsMenu() {
    const navigate = useNavigate()
    
    return (
        <>
            <div className="flex max-md:flex-col max-md:items-center max-md:gap-12 max-md:w-auto md:w-screen md:justify-around md:pt-10 md:pb-12"> 
                <Link
                to="/about"
                className=" relative inline-flex items-center justify-center p-0.5 overflow-hidden text-sm font-medium rounded-lg group bg-gradient-to-br from-purple-500 to-pink-500 group-hover:from-purple-500 group-hover:to-pink-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800"
                >
                    <span className="max-md:w-[200px] text-center relative px-10 py-3 transition-all ease-in duration-75 bg-white rounded-md group-hover:bg-opacity-0 text-purple-700 group-hover:text-white">
                        About
                    </span>
                </Link>
                <Link
                to="/spons"
                className="relative inline-flex items-center justify-center p-0.5 overflow-hidden text-sm font-medium rounded-lg group bg-gradient-to-br from-purple-500 to-pink-500 group-hover:from-purple-500 group-hover:to-pink-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800"
                >
                    <span className="max-md:w-[200px] text-center relative px-8 py-3 transition-all ease-in duration-75 bg-white rounded-md group-hover:bg-opacity-0 text-purple-700 group-hover:text-white">
                        Sponsors
                    </span>
                </Link>
                <button
                onClick={() => navigate("/", { state: { scrollToNotices: true } })}
                className="relative inline-flex items-center justify-center p-0.5 overflow-hidden text-sm font-medium rounded-lg group bg-gradient-to-br from-purple-500 to-pink-500 group-hover:from-purple-500 group-hover:to-pink-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800"
                
                >
                    <span className=" max-md:w-[200px] text-center relative px-10 py-3 transition-all ease-in duration-75 bg-white rounded-md group-hover:bg-opacity-0 text-purple-700 group-hover:text-white">
                        Notices
                    </span>
                </button>
               
                <button
                onClick={() => navigate("/about", { state: { scrollToJoin: true } })}
                className="relative inline-flex items-center justify-center p-0.5 overflow-hidden text-sm font-medium rounded-lg group bg-gradient-to-br from-purple-500 to-pink-500 group-hover:from-purple-500 group-hover:to-pink-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800"
                
                >
                    <span className="max-md:w-[200px] text-center relative px-10 py-3 transition-all ease-in duration-75 bg-white rounded-md group-hover:bg-opacity-0 text-purple-700 group-hover:text-white">
                        Join Us
                    </span>
                </button>

             
            </div>
        </>
    )
}