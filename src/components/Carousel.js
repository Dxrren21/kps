import Profile from "../components/Profile";
import { useState, useEffect } from "react"
import rightArrow from "../assets/arrow.svg"
import leftArrow from "../assets/left.svg"

export default function Carousel() {

    // const profiles = [
    //     ["a", "b", "c", "d"], 
    //     ["e", "f", "g"], 
    //     ["h", "i"], 
    //     ["j", "k"], 
    //     ["l", "m", "n"], 
    //     ["a", "bb", "q"], 
    //     ["ee", "i"]

    // ]
    const profiles = [
        [
            {profName: "Georgia", link: "georgia.PNG", role: "President", ig:"georgia_mc_"}, 
            {profName: "Estela", link: "estela.PNG", role: "Vice President", ig:"estela.i121"}, 
            {profName: "Emma", link: "emma.PNG", role: "Secretary", ig:"_emmapetrs"}, 
            {profName: "Jacinta", link: "jacinta.PNG", role: "Treasurer", ig:"jacinta.p_"}, 
            {profName: "Celina", link: "celina.PNG", role: "Arc Delegate", ig:"clnchh"}
        ], 
        [
            {profName: "Darren", link: "abc"}, 
            {profName: "Grace", link: "grace.JPG"}, 
            {profName: "Emmy", link: "efg"}, 
        ], 
        [
            {profName: "Bronteney", link: "bronteney.jpg"}, 
            {profName: "Alexandra", link: "alex.jpg"}, 
        ], 
        [
            {profName: "Imasha", link: "abc"}, 
            {profName: "Riddhish", link: "riddhish.jpg"}, 
        ], 
        [
            {profName: "Albert", link: "abc"}, 
            {profName: "Karen", link: "karenH.jpg"}, 
            {profName: "Charlotte", link: "efg"}, 
        ], 
        [
            {profName: "Becca", link: "becca.jpg"}, 
            {profName: "Karen", link: "karenN"}, 
        ], 
        [
            {profName: "Ivory", link: "abc"}, 
            {profName: "Chea", link: "cde"}, 
        ]

    ]

    const kpsPort = ["Executives", "Dance", "Events", "Productions", "Human Resources", "Marketing", "Creative"]
    
    
    const [slide, setSlide] = useState(0)
    const [display, setDisplay] = useState(profiles[0])
    const [displayTitle, setDisplayTitle] = useState(kpsPort[0])

    const handleLeftClick = () => {
        setSlide((prevSlide) => (prevSlide === 0 ? profiles.length - 1 : prevSlide - 1));
    };
    
    const handleRightClick = () => {
        setSlide((prevSlide) => (prevSlide === profiles.length - 1 ? 0 : prevSlide + 1));
    };
    

    useEffect(() => {
        const handleKeyDown = (e) => {
            console.log(e.key)
            if (e.key === "ArrowLeft") {
                handleLeftClick()
            }
            if (e.key  === "ArrowRight") {
                handleRightClick()
            }
        }

        window.addEventListener("keydown", handleKeyDown)

        return () => {
            window.removeEventListener("keydown", handleKeyDown);
          };
        
    }, [])

    

    useEffect(() => {
        console.log("chanign gdispl")
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
            <div className="flex flex-col w-[80%] h-[50%] m-auto items-center mb-12 rounded-3xl ">

                <h2 className="font-light italic uppercase text-center italic pt-5 pb-5 text-3xl ">{displayTitle}</h2>
                    <div className="flex justify-between w-full items-center">
                        <img src={leftArrow} className="relative right-1 pl-12 w-[100px] h-[100px]" onClick={() => handleLeftClick()} ></img>
                        <div className="flex gap-2 mx-auto w-[100%] p-10 justify-center">
                            
                            {display.map((prof, index) => (
                                <Profile key={index} name={prof.profName} link={prof.link} role={prof.role} ig={prof.ig}/>
                            ))}
                            
                        </div>
                        <img src={rightArrow} className="relative right-1 pr-12 w-[100px] h-[100px]" onClick={() => handleRightClick()}></img>
                        
                    </div>
                    
                  
                   
            </div>

        </>
    )
}