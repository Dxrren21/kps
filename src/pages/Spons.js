import SponsorMarquee from "../components/SponsorMarquee"
import star from "../assets/star.svg"
export default function Spons() {
    return(
        <>
            <section className="w-full min-h-screen flex flex-col items-center bg-sponbg bg-cover bg-center">
                <div className="flex items-center gap-2 pb-10 pt-10">
                    <img src={star} className="w-10 h-10 pt-1 "></img>
                        <h1 className="text-5xl text-center font-serif">K-Perks</h1>
                    <img src={star} className="w-10 h-10 pt-1  "></img>
                </div>
                <h3 className="margin-x-auto text-2xl font-serif italic">See what deals and opportunities society members get from our amazing 2025 sponsors!</h3>
                <SponsorMarquee />
            </section>
          
        </>
    )
}