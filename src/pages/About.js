import AboutSpeech from "../components/AboutSpeech";
import Carousel from "../components/Carousel";
import discord from "../assets/discord.svg"
import youtube from "../assets/youtube.svg"
import ig from "../assets/ig.svg"
import fb from "../assets/fb.svg"
import tiktok from "../assets/tiktok.svg"
import ScrollArrow from "../components/ScrollArrow";
import { useRef } from 'react'
import star from "../assets/star.svg"
import boy from "../assets/boy.png"

export default function About() {
    const meetRef = useRef()
    return(
        <>
            <section className="flex flex-col items-center justify-start bg-aboutwv h-screen max-w-screen bg-cover bg-no-repeat bg-center ">
                <div className="flex pt-12 pb-10 justify-center gap-3 items-center">  
                    <img src={star} className="w-10 h-10 pt-1 "></img>
                    <h1 className="text-5xl text-center font-bold">About Us</h1>
                    <img src={star} className="w-10 h-10 pt-1 "></img>
                </div>
                <AboutSpeech />
                <ScrollArrow className="block pt-10" scrollToRef={meetRef}/>
            </section>
            <section ref={meetRef} className="h-screen w-full bg-gradient-to-b from-[#ffe3f8] via-[#ffe3f8] to-white">
                <div className="flex pt-12 pb-10 justify-center gap-3 items-center">  
                    <img src={star} className="w-10 h-10 pt-1 "></img>
                    <h1 className="text-5xl font-bold text-center">Meet the Team</h1>
                    <img src={star} className="w-10 h-10 pt-1"></img>
                </div>
                
                <Carousel />
                <div className="flex pb-10 justify-center gap-3 items-center">  
                    <img src={star} className="w-10 h-10 pt-1 "></img>
                    <h1 className="text-5xl font-bold text-center">Join Us</h1>
                    <img src={star} className="w-10 h-10 pt-1"></img>
                </div>
                
                <div className="flex justify-center h-[45%] p-8 gap-5">
                    {/* <button type="button" className=" w-[30%] h-[40%] text-white bg-pink-300 hover:border hover:border-2 hover:border-pink-400 font-bold rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Join as a Member</button>
                    <button type="button" className=" w-[30%] h-[40%] text-white bg-purple-300 hover:border hover:border-2 hover:border-purple-500 font-bold rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Join the Internal Team</button> */}
                    <div className="group relative w-[30%] h-[40%]">
                        <button type="button" className="w-full h-full text-white bg-pink-300 hover:border hover:border-2 hover:border-purple-500 font-bold rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">
                        Join as a Member
                        </button>
                        <img src={boy} alt="Image 2" className="relative top-[-140%] left-0 w-[80px] h-[80px] object-contain opacity-0 group-hover:opacity-100 transition-opacity duration-50 z-10" />
                    </div>
                    <div className="group relative w-[30%] h-[40%]">
                        <button type="button" className="w-full h-full text-white bg-purple-300 hover:border hover:border-2 hover:border-purple-500 font-bold rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">
                        Join the Internal Team
                        </button>
                        <img src={boy} alt="Image 2" className="absolute top-[-30%] right-0 w-[80px] h-[80px] object-contain opacity-0 group-hover:opacity-100 transition-opacity duration-50 z-10" />
                    </div>
                </div>
                
            </section>
 
            <section className="bg-white flex flex-col items-center justify-center w-full pb-10">
                <div className="grid grid-cols-2 gap-4 mt-10 h-full">
                    <div className="flex flex-col items-center p-8 rounded">
                        <h2 className=" text-3xl font-semibold">For the Latest Updates</h2>
                        <div className="flex flex-col w-full pt-12 items-center justify-center">
                            <div className="grid grid-cols-3 gap-10">
                                <img src={fb}></img>
                                <img src={ig}></img>
                                <img src={tiktok}></img>
                            </div>
                            <div className="grid grid-cols-2 gap-10 pt-10">
                                <img src={discord}></img>
                                <img src={youtube}></img>
       
                            </div>
                        </div> 
                    </div>
                    
                    <div className="flex flex-col items-start  p-8 gap-5 w-full">
                
                        <h2 className="text-3xl font-semibold">For Any Inquiries</h2> 
                        <h3 className="text-xl pt-7">General Inquiries and Feedback</h3>
                        <p className="pl-5">Email us on: unswkpop@gmail.com</p>
                        <h3 className="text-xl">Sponsorships and collaborations</h3>
                        <p className="pl-5">Email us on: mark.unswkpop@gmail.com </p>  
                        <p className="italic">*All inquiries can also be sent as DMs on Instagram/Facebook!</p>      
                     
                             
                    </div>
                    
                </div>
            </section>

            
        </>
    )
}