import SponsorMarquee from "../components/SponsorMarquee"
import star from "../assets/pstar.svg"
import OWeekMarquee from "../components/OWeekMarquee"
import boy from "../assets/boy.png"
export default function Spons() {
    return(
        <>
            <section className="w-full min-h-screen flex flex-col items-center bg-sponbg bg-cover bg-center">
                <div className="flex items-center gap-2 pb-10 pt-10">
                    <img src={star} className="w-10 h-10 pt-1 "></img>
                        <h1 className="text-5xl text-center font-serif">K-Perks</h1>
                    <img src={star} className="w-10 h-10 pt-1  "></img>
                </div>
                <h3 className="margin-x-auto text-2xl font-serif ">See what deals and opportunities society members get from our amazing 2025 sponsors!</h3>
                <div className="flex justify-center h-[45%] p-8 gap-5">
                    {/* <button type="button" className=" w-[30%] h-[40%] text-white bg-pink-300 hover:border hover:border-2 hover:border-pink-400 font-bold rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Join as a Member</button>
                    <button type="button" className=" w-[30%] h-[40%] text-white bg-purple-300 hover:border hover:border-2 hover:border-purple-500 font-bold rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Join the Internal Team</button> */}
                    <div className="group relative w-[300px] h-[80px]">
                        <a href="https://forms.gle/5RJ3mJwch4v2Evo57" target="_blank" rel="noopener noreferrer">
                            <button type="button" className="w-full h-full text-white bg-pink-300 hover:border hover:border-2 hover:border-purple-500 font-semibold rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">
                            Sponsor Us
                            </button>
                        </a>
                        <img src={boy} alt="Image 2" className="relative top-[-140%] left-0 w-[60px] h-[60px] object-contain opacity-0 group-hover:opacity-100 transition-opacity duration-50 z-10" />
                    </div>
                    <div className="group relative  w-[300px] h-[80px]">
                        <button type="button" className="w-full h-full bg-white text-purple-500 hover:border hover:border-2 hover:border-purple-500 font-semibold rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">
                            Become a member
                        </button>
                        <img src={boy} alt="internal team" className="absolute top-[-30%] right-0 w-[60px] h-[60px] object-contain opacity-0 group-hover:opacity-100 transition-opacity duration-50 z-10" />
                    </div>
                </div>
                <div className="flex items-center gap-2 pt-10">
                    <img src={star} className="w-10 h-10 pt-1 "></img>
                        <h1 className="text-5xl text-center font-serif">O Week Specials</h1>
                    <img src={star} className="w-10 h-10 pt-1  "></img>
                </div>
                <SponsorMarquee />
                <div className="flex items-center gap-2 pt-10">
                    <img src={star} className="w-10 h-10 pt-1 "></img>
                        <h1 className="text-5xl text-center font-serif">Year Round Deals</h1>
                    <img src={star} className="w-10 h-10 pt-1  "></img>
                </div>
                <OWeekMarquee />
            </section>
          
        </>
    )
}