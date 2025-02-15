import SponsorMarquee from "../components/SponsorMarquee"
import star from "../assets/pstar.svg"
import OWeekMarquee from "../components/OWeekMarquee"
import boy from "../assets/boy.png"
import Footer from "../components/Footer"
import SponModal from "../components/SponModal"
export default function Spons() {
    return(
        <>
            <section className="w-full min-h-screen flex flex-col items-center bg-sponbg bg-cover bg-center">
            <div className="flex items-center gap-2 pb-10 pt-10 max-md:gap-3 mx-2">
                    <img src={star} className="w-10 h-10 pt-1 max-md:w-7 max-md:h-7 "></img>
                        <h1 className="text-5xl text-center font-extrabold uppercase max-md:text-3xl">K-Perks</h1>
                    <img src={star} className="w-10 h-10 pt-1 max-md:w-7 max-md:h-7 "></img>
            </div>
                <h3 className="margin-x-auto text-xl text-gray-700 italic max-md:text-center max-md:text-lg max-md:mx-4 bg-white p-7 rounded-3xl">A big thank you to our amazing 2025 sponsors that have given these exciting rewards for our members!</h3>
                <div className="flex justify-center h-[45%] p-8 gap-5 max-md:flex-col">
                    <div className="group relative w-[300px] h-[80px]">
                        <a href="https://forms.gle/5RJ3mJwch4v2Evo57" target="_blank" rel="noopener noreferrer">
                            <button type="button" className="w-full h-full bg-white text-blue-400 hover:border hover:border-2 hover:border-purple-500 font-semibold rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">
                            Become a member
                            </button>
                        </a>
                        <img src={boy} alt="Image 2" className="relative top-[-140%] left-0 w-[60px] h-[60px] object-contain opacity-0 group-hover:opacity-100 transition-opacity duration-50 z-10" />
                    </div>
                    <SponModal />
                </div>
               
                {/* <div className="flex items-center gap-2 pt-10 max-md:gap-4 mx-2">
                    <img src={star} className="w-10 h-10 pt-1 max-md:w-7 max-md:h-7 "></img>
                        <h1 className="text-5xl text-center font-extrabold uppercase max-md:text-3xl">O-Week</h1>
                    <img src={star} className="w-10 h-10 pt-1 max-md:w-7 max-md:h-7 "></img>
                </div>
                <OWeekMarquee /> */}
                <div className="flex items-center gap-2 pt-10 max-md:gap-2 mx-2">
                    <img src={star} className="w-10 h-10 pt-1 max-md:w-7 max-md:h-7 "></img>
                        <h1 className="text-5xl text-center font-extrabold uppercase max-md:text-3xl">Year Round Deals</h1>
                    <img src={star} className="w-10 h-10 pt-1 max-md:w-7 max-md:h-7 "></img>
                </div>
                <SponsorMarquee />
            </section>
            <Footer />
        </>
    )
}