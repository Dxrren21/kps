import AboutSpeech from "../components/AboutSpeech";
import Carousel from "../components/Carousel";
import discord from "../assets/discord.svg"
import youtube from "../assets/youtube.svg"
import ig from "../assets/ig.svg"
import fb from "../assets/fb.svg"
import tiktok from "../assets/tiktok.svg"

export default function About() {
    return(
        <>
            <section className="flex flex-col items-center justify-start pt-[5%] bg-aboutwv h-screen w-screen bg-cover bg-no-repeat bg-center ">
                <h1 className="text-5xl font-bold ">About Us</h1>
                <AboutSpeech />
            </section>
            <section className="bg-[#ffe3f8] h-screen w-screen">
                <h1 className="pt-12 text-5xl font-bold text-center pb-10">Meet the Team</h1>
                <Carousel />
            </section>
            <section className="flex flex-col items-center w-screen h-screen">
                <h1 className="text-5xl font-bold">Contacts</h1>
                <div className="grid grid-cols-3 w-full mt-10 pl-12 h-full">
                    <div className="flex flex-col items-center bg-blue-200 w-[80%] h-[45%] p-8">
                        <h2 className=" text-3xl font-semibold">Follow Our Socials</h2>
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
                    <div className="flex flex-col items-start bg-blue-200 w-[80%] h-[45%] p-8 gap-5">
                
                        <h2 className="text-3xl font-semibold">For Any Inquiries</h2> 
                        <h3 className="text-xl">General Inquiries and Feedback</h3>
                        <p className="pl-5">Email us on: unswkpop@gmail.com</p>
                        <h3 className="text-xl">Sponsorships and collaborations</h3>
                        <p className="pl-5">Email us on: mark.unswkpop@gmail.com </p>  
                        <p className="italic">*All inquiries can also be sent as DMs on Instagram/Facebook!</p>      
                     
                             
                    </div>
                    <div className="flex flex-col items-start bg-blue-200 w-[80%] h-[45%] p-8 gap-5">
                        <h2 className="text-3xl font-semibold">Join Us</h2> 
                        <button type="button" class=" w-full h-[30%] text-white bg-gradient-to-r from-pink-300 via-pink-500 to-pink-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-pink-300 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Join as a Member</button>
                        <button type="button" class=" w-full h-[30%] text-white bg-gradient-to-r from-purple-300 via-purple-500 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Join the Internal Team</button>
                            
                    </div>
                </div>
            </section>

            
        </>
    )
}