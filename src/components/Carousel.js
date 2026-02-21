import Profile from "../components/Profile";
import { useState, useEffect, useMemo, useCallback } from "react"
import rightArrow from "../assets/arrow.svg"
import { useSwipeable } from "react-swipeable";


export default function Carousel() {

    

    const profiles = useMemo(() => [
        [
            {profName: "Grace", link: "grace.jpg", role: "President", ig:"graaacexia"}, 
            {profName: "Becca", link: "becca.jpg", role: "Vice President", ig:"z__ndra"}, 
            {profName: "Charlotte", link: "charlotte.jpg", role: "Secretary", ig:"charlottiewen_"}, 
            {profName: "Alexandra", link: "alex.jpg", role: "Treasurer", ig:"z__ndra"}, 
            {profName: "Emmy", link: "emmy.jpg", role: "Arc Delegate", ig:"luemyi"}
        ], 
        [
            {profName: "Advi", link: "advi.jpg", ig: "advika.ulhaan"}, 
            {profName: "Ethan", link: "ethan.jpg", ig: "xenn_060"}, 
            {profName: "Metta", link: "metta.jpg", ig: "metta.jh"}, 
        ], 
        [
            {profName: "Jana", link: "jana.jpg", ig: "jjana_chan_"}, 
            {profName: "Zahra", link: "zahra_events.jpg", ig: "zahrahusssen"}, 
        ], 
        [
            {profName: "Howard", link: "howard.jpg", ig: "cptdankfish"}, 
            {profName: "Shelley", link: "shelley.jpg", ig: "z_xue.li"}, 
        ], 
        [
            {profName: "Helena", link: "helena.jpg", ig: "hashtag_helena"}, 
            {profName: "Minh", link: "minh.jpg", ig: "mnhkhngtu"}, 
            {profName: "Sen", link: "sen.jpg", ig: "s3n_timental"}, 
        ], 
        [
            {profName: "Olivia", link: "liv.jpg", ig: "k_liv1_"}, 
            {profName: "Zahra", link: "zahra_marketing.jpg", ig: "zahrxz"}, 
        ], 
        [
            {profName: "Alicia", link: "alicia.jpg", ig: "alishxr_"}, 
            {profName: "Talia", link: "talia.jpg", ig: "talia_loww"}, 
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

    useEffect(() => {
        profiles.flat().forEach((profile) => {
            const img = new Image();
            img.src = `/assets/${profile.link}`; 
        });
    }, [profiles]);

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