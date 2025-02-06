import discord from "../assets/discord.svg"
import youtube from "../assets/youtube.svg"
import ig from "../assets/ig.svg"
import fb from "../assets/fb.svg"
import tiktok from "../assets/tiktok.svg"

export default function Footer() {
    return (
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
                    <div className="grid grid-cols-2 pt-6 gap-10  ">
                    <a href="https://discord.com/invite/kGz5kxpzCF">
                        <img src={discord} className="w-[80px]  mx-auto" />
                    </a>
                    <a href="https://www.youtube.com/c/unswkpopsociety">
                        <img src={youtube} alt="youtube logo"  className="w-[75px] mx-auto" />
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
    )
}