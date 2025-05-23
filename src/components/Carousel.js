import Profile from "../components/Profile";
import { useState, useEffect, useMemo, useCallback } from "react"
import rightArrow from "../assets/arrow.svg"
import { useSwipeable } from "react-swipeable";


export default function Carousel() {

    

    const profiles = useMemo(() => [
        [
            {profName: "Georgia", link: "georgia.PNG", role: "President", ig:"georgia_mc_"}, 
            {profName: "Estela", link: "estela.PNG", role: "Vice President", ig:"estela.i121"}, 
            {profName: "Emma", link: "emma.PNG", role: "Secretary", ig:"_emmapetrs"}, 
            {profName: "Jacinta", link: "jacinta.PNG", role: "Treasurer", ig:"jacinta.p_"}, 
            {profName: "Celina", link: "celina.PNG", role: "Arc Delegate", ig:"clnchh"}
        ], 
        [
            {profName: "Darren", link: "darren.jpg", ig: "drndja"}, 
            {profName: "Grace", link: "grace.JPG", ig: "graaacexia"}, 
            {profName: "Emmy", link: "emmy.PNG", ig: "luemyi"}, 
        ], 
        [
            {profName: "Bronteney", link: "bronteney.jpg", ig: "bronte_kw4"}, 
            {profName: "Alexandra", link: "alex.jpg", ig: "z__ndra"}, 
        ], 
        [
            {profName: "Imasha", link: "imasha.jpg", ig: "imashakay"}, 
            {profName: "Riddhish", link: "riddhish.jpg", ig: "riddhish_c"}, 
        ], 
        [
            {profName: "Albert", link: "albert.jpg", ig: "alberttan204"}, 
            {profName: "Karen", link: "karenH.JPG", ig: "k_karen06"}, 
            {profName: "Charlotte", link: "char.jpg", ig: "charlottiewen_"}, 
        ], 
        [
            {profName: "Becca", link: "becca.jpg", ig: "_becca1201"}, 
            {profName: "Karen", link: "karenN.jpg", ig: "kkarennguyenn"}, 
        ], 
        [
            {profName: "Ivory", link: "ivory.PNG", ig: "ivorywithluv"}, 
            {profName: "Chea", link: "chea.jpg", ig: "chea_bh"}, 
        ]

    ], []); 

    const kpsPort = useMemo(() => [
        "Executives ✨",
        "Dance Directors 🎵",
        "Events Directors 🎉",
        "Productions Directors 🎥",
        "Human Resources Directors 💖",
        "Marketing Directors 📰",
        "Creative Directors 🎨"
    ], []);
    
    
    
    const [slide, setSlide] = useState(0)
    const [display, setDisplay] = useState(profiles[0])
    const [displayTitle, setDisplayTitle] = useState(kpsPort[0])

    const handleLeftClick = useCallback(() => {
        setSlide((prevSlide) => (prevSlide === 0 ? profiles.length - 1 : prevSlide - 1));
    }, [profiles.length]);

    // Memoize the handleRightClick function
    const handleRightClick = useCallback(() => {
        setSlide((prevSlide) => (prevSlide === profiles.length - 1 ? 0 : prevSlide + 1));
    }, [profiles.length]);
    

    const handlers = useSwipeable({
        onSwipedLeft: handleRightClick,
        onSwipedRight: handleLeftClick,
        preventDefaultTouchmoveEvent: true,
        preventScrollOnSwipe: true,
        trackTouch: true,
        trackMouse: true
        });

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
        
    }, [handleLeftClick, handleRightClick])

    

    useEffect(() => {
        
        setDisplayTitle(kpsPort[slide])
        setDisplay(profiles[slide])
    }, [slide, kpsPort, profiles])


    return(
        <>
            <div {...handlers} className="max-md:h-[70%] flex flex-col w-full h-[50%] m-auto items-center  rounded-3xl ">
                <h2 className="font-light uppercase text-center pt-5 pb-5 text-3xl tracking-widest ">{displayTitle}</h2>
                    <div className="flex justify-between w-full items-center px-[7%] max-md:px-1">
                        <img src={rightArrow} alt="left arrow" className="relative w-[60px] h-[60px] scale-x-[-1] max-md:w-[30px] max-md:h-[30px]" onClick={() => handleLeftClick()} ></img>
                        <div className="flex mx-auto max-[1500px]:grid max-[1500px]:grid-cols-2 ">
                            
                                {display.map((prof, index) => (
                                    <div
                                    key={index}
                                    className={display.length % 2 !== 0 && index === display.length - 1 ? "col-span-2 flex justify-center" : ""}
                                    >
                                        <Profile 
                                            key={index} 
                                            name={prof.profName} 
                                            link={prof.link} 
                                            role={prof.role} 
                                            ig={prof.ig}
                                            />
                                    </div>
                                ))}
                            
                            
                        </div>
                        <img src={rightArrow} alt="right arrow" className="relative w-[60px] h-[60px] max-md:w-[30px] max-md:h-[30px]" onClick={() => handleRightClick()}></img>
                    </div>
            </div>

        </>
    )
}