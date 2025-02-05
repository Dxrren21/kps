import sidebar from "../assets/sidebar.png"
import { useEffect, useState } from "react"

export default function SideBar() {

    const [visible, setVisible] = useState(false)

    const handleClick = () => {
        setVisible(false)
    }




    return (
    <>
        {
            visible ? (
                <div className="w-full">
                    
                </div>
            ) : (
                <img src={sidebar} onClick={handleClick()}></img>
            )
        }
       
        
    </> 
    )
}