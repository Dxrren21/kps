import logo from '../assets/kpsLogo.png'
import {useState, useEffect} from 'react'

export default function Klogo() {

    const [isLoaded, setIsLoaded ] = useState(false)
    
    useEffect(() => {
        setIsLoaded(false)
        setIsLoaded(true)
        const timer = setTimeout(() => setIsLoaded(true), 100)
        return () => { // done to execute onyl when we need it to
            clearTimeout(timer)
        }
    }, [])

    return (
        <div className="flex justify-center" >  
             <img
                className={`w-1/4 transition-opacity duration-1000 ease-in ${
                isLoaded ? 'opacity-100' : 'opacity-0'
                }`}
                src={logo}
                alt="Kpop Logo"
            />
        </div>
    )
}