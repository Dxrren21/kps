import sidebar from "../assets/sidebar.png"
import { useState } from "react"

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
                <img alt="sidebar" src={sidebar} onClick={handleClick()}></img>
            )
        }
       
        
    </> 
    )
}