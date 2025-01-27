import { Link } from "react-router-dom";

export default function ButtonsMenu() {

    
    return (
        <>
            <div className="flex w-screen justify-around pt-10"> 
                <Link
                to="/about"
                className="relative inline-flex items-center justify-center p-0.5 overflow-hidden text-sm font-medium rounded-lg group bg-gradient-to-br from-purple-500 to-pink-500 group-hover:from-purple-500 group-hover:to-pink-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800"
                >
                    <span className="relative px-10 py-3 transition-all ease-in duration-75 bg-white rounded-md group-hover:bg-opacity-0 text-purple-700 group-hover:text-white">
                        About
                    </span>
                </Link>
                <Link
                to="/media"
                className="relative inline-flex items-center justify-center p-0.5 overflow-hidden text-sm font-medium rounded-lg group bg-gradient-to-br from-purple-500 to-pink-500 group-hover:from-purple-500 group-hover:to-pink-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800"
                >
                    <span className="relative px-10 py-3 transition-all ease-in duration-75 bg-white rounded-md group-hover:bg-opacity-0 text-purple-700 group-hover:text-white">
                        Media
                    </span>
                </Link>
                <Link
                to="/spons"
                className="relative inline-flex items-center justify-center p-0.5 overflow-hidden text-sm font-medium rounded-lg group bg-gradient-to-br from-purple-500 to-pink-500 group-hover:from-purple-500 group-hover:to-pink-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800"
                >
                    <span className="relative px-8 py-3 transition-all ease-in duration-75 bg-white rounded-md group-hover:bg-opacity-0 text-purple-700 group-hover:text-white">
                        Sponsors
                    </span>
                </Link>
                <Link
                to="/shop"
                className="relative inline-flex items-center justify-center p-0.5 overflow-hidden text-sm font-medium rounded-lg group bg-gradient-to-br from-purple-500 to-pink-500 group-hover:from-purple-500 group-hover:to-pink-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800"
                >
                    <span className="relative px-10 py-3 transition-all ease-in duration-75 bg-white rounded-md group-hover:bg-opacity-0 text-purple-700 group-hover:text-white">
                        Shop
                    </span>
                </Link>

             
            </div>
        </>
    )
}