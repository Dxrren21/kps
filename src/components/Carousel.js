import Profile from "../components/Profile";
import { useState, useEffect } from "react"
import arrow from "../assets/arrow.svg"
import leftArrow from "../assets/left.svg"

export default function Carousel() {

    const profiles = [
        ["a", "b", "c", "d"], 
        ["e", "f", "g"], 
        ["h", "i"], 
        ["j", "k"], 
        ["l", "m", "n"], 
        ["a", "bb", "q"], 
        ["ee", "i"]

    ]

    const kpsPort = ["Executives", "Dance", "Events", "Productions", "Human Resources", "Marketing", "Creative"]
    
    
    const [slide, setSlide] = useState(0)
    const [display, setDisplay] = useState(profiles[0])
    const [displayTitle, setDisplayTitle] = useState(kpsPort[0])

    const handleLeftClick = (e) => {
        if (slide === 0) {
            setSlide(profiles.length - 1)
        } else {
            setSlide(slide - 1)
        }
        console.log("lefts clik", slide)
    }
    const handleRightClick = (e) => {
        if (slide === (profiles.length - 1)) {
            setSlide(0)
        } else {
            setSlide(slide + 1)
        }
        console.log("right clik")

    }

    useEffect(() => {
        setDisplayTitle(kpsPort[slide])
        setDisplay(profiles[slide])
    }, [slide])
    // set a timer to activate button every 5 seconds 
    // on click of a button, the profiles change 
    // shifting transformation ? 
    // on click / on load the profiles of a given list are loaded // perhaps we need an array of arrays,
    // map each link to the user 

    return(
        <>
            <div className="flex flex-col bg-red-200 w-[80%] h-[60%] m-auto items-center">
                <h2 className="font-semibold text-center italics pt-10 pb-20 text-xl">{displayTitle}</h2>
                    <div className="flex justify-between w-full">
                        <img src={leftArrow} className="relative right-1" onClick={() => handleLeftClick()}></img>
                        <div className="flex gap-2 mx-auto w-[100%] p-10 justify-center">
                            
                            {display.map((name, link) => (
                                <Profile name={name} link={link}/>
                            ))}
                            
                        </div>
                        <img src={arrow} className="relative right-1" onClick={() => handleRightClick()}></img>
                        
                    </div>
                    
                  
                   
            </div>
            <img src="https://ibb.co/vzjwH0z"></img>
        </>
    )
}