import AboutSpeech from "../components/AboutSpeech";
import Carousel from "../components/Carousel";
import discord from "../assets/discord.svg"
import youtube from "../assets/youtube.svg"
import ig from "../assets/ig.svg"
import fb from "../assets/fb.svg"
import tiktok from "../assets/tiktok.svg"
import ScrollArrow from "../components/ScrollArrow";
import { useRef, useEffect } from 'react'
import star from "../assets/star.svg"
import boy from "../assets/boy.png"
import { useLocation } from "react-router";
import girl from "../assets/girl.png"

export default function About() {
    const meetRef = useRef()
    const joinRef = useRef()
    const location =useLocation()

    useEffect(() => {
          if (location.state?.scrollToJoin) {
            joinRef.current?.scrollIntoView({ behavior: "smooth" });
          }
        }, [location]);
    return(
        <>
            <section className="flex flex-col items-center justify-start bg-aboutwv  max-w-screen bg-cover bg-no-repeat bg-center ">
                <div className="flex pt-12 pb-10 justify-center gap-3 items-center">  
                    <img src={star} className="w-10 h-10 pt-1 "></img>
                    <h1 className="text-5xl text-center font-extrabold uppercase text-gray-800">About Us</h1>
                    <img src={star} className="w-10 h-10 pt-1 "></img>
                </div>
                <AboutSpeech />
                <ScrollArrow className="block pt-10" scrollToRef={meetRef}/>
            </section>
            <section ref={meetRef} className="w-full bg-gradient-to-b from-[#ffe3f8] via-[#ffe3f8] to-white ">
             
                <div className="w-[25%] flex pt-12 pb-10 justify-center gap-3 items-center mx-auto">  
                    <img src={star} className="w-10 h-10 pt-1 "></img>
                    <h1 className="text-5xl text-center font-extrabold uppercase text-gray-800">Meet the Team</h1>
                    <img src={star} className="w-10 h-10 pt-1"></img>
                </div>
                    
                <Carousel/>            
            </section>
            <section className="my-[5%]">
                <div ref={joinRef} className="w-[25%] flex pb-10 justify-center gap-3 items-center mx-auto">  
                    <img src={star} className="w-10 h-10 pt-1 "></img>
                    <h1 className="text-5xl font-extrabold uppercase text-gray-800 text-center max-md:pt-10">Join Us</h1>
                    <img src={star} className="w-10 h-10 pt-1"></img>
                </div>
                
                <div className="flex justify-center p-8 gap-5 max-md:flex-col max-md:items-center">
                    {/* <button type="button" className=" w-[30%] h-[40%] text-white bg-pink-300 hover:border hover:border-2 hover:border-pink-400 font-bold rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Join as a Member</button>
                    <button type="button" className=" w-[30%] h-[40%] text-white bg-purple-300 hover:border hover:border-2 hover:border-purple-500 font-bold rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Join the Internal Team</button> */}
                    <div className="group relative w-[500px] h-[120px] max-md:w-[80%]">
                        <a href="https://forms.gle/5RJ3mJwch4v2Evo57" target="_blank" rel="noopener noreferrer">
                            <button type="button" className="w-full h-full text-white bg-pink-300 hover:border hover:border-2 hover:border-purple-500 font-bold rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">
                            <span className="text-xl">
                                Join as a Member
                            </span>
        
                            </button>
                        </a>
                        <img src={boy} alt="Image 2" className="relative top-[-140%] left-0 w-[80px] h-[80px] object-contain opacity-0 group-hover:opacity-100 transition-opacity duration-50 z-10" />
                    </div>
                    <div className="group relative w-[500px] h-[120px] max-md:w-[80%]">
                        <button type="button" className="w-full h-full text-white bg-purple-300 hover:border hover:border-2 hover:border-purple-500 font-bold rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">
                            <span className="text-xl">
                                Join the Internal Team
                            </span>
                            
                        </button>
                        <img src={girl} alt="internal team" className="absolute top-[-50%] right-0 w-[100px] h-[100px] object-contain opacity-0 group-hover:opacity-100 transition-opacity duration-50 z-10" />
                    </div>
                </div>
            </section>
 
            <section className=" flex max-md:flex-col items-start justify-center pb-10 bg-gray-100 mx-auto w-full max-md:text-center">
             
            <div className="flex flex-col items-center p-8">
                <h2 className="text-3xl font-bold text-center">For the Latest Updates</h2>
                
                <div className="flex flex-col w-full pt-12 items-center justify-center">
                    {/* Top Grid (3 columns) */}
                    <div className="grid grid-cols-3 gap-5 items-center justify-center w-full">
                    <a href="https://www.instagram.com/unswkpop/">
                        <img src={ig} alt="Instagram" className="w-[70%] mx-auto" />
                    </a>
                    <a href="https://www.facebook.com/unswkpop/">
                        <img src={fb} alt="Facebook" className="w-[70%] mx-auto" />
                    </a>
                    <a href="https://www.tiktok.com/@unswkpop">
                        <img src={tiktok} alt="TikTok" className="w-[70%] mx-auto" />
                    </a>
                    </div>

                    {/* Bottom Grid (2 columns) */}
                    <div className="grid grid-cols-2 pt-6 gap-10 ">
                    <a href="https://discord.com/invite/kGz5kxpzCF">
                        <img src={discord} className="w-[80px] mx-auto" />
                    </a>
                    <a href="https://www.youtube.com/c/unswkpopsociety">
                        <img src={youtube} className="w-[75px] mx-auto" />
                    </a>
                    </div>
                </div>
            </div>

                    
                    <div className="flex flex-col md:items-start p-8 gap-5 items-center ">
                
                        <h2 className="text-3xl font-bold max-md:text-center">For Any Inquiries</h2> 
                        <h3 className="text-xl pt-7 font-semibold">General Inquiries and Feedback</h3>
                        <p className="md:pl-5">Email us on: unswkpop@gmail.com</p>
                        <h3 className="text-xl font-semibold">Sponsorships and collaborations</h3>
                        <p className="md:pl-5">Email us on: mark.unswkpop@gmail.com </p>  
                        <p className="italic">*All inquiries can also be sent as DMs on Instagram/Facebook!</p>      
                     
                             
                    </div>
                    
       
            </section>

            
        </>
    )
}