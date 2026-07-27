import SponsorMarquee from "../components/SponsorMarquee"
import Footer from "../components/Footer"
import SponModal from "../components/SponModal"

export default function Spons() {
    return(
        <>
            <section className="w-full min-h-screen flex flex-col items-center bg-pastel-hero px-6 pt-[110px] pb-16">
                <h2 className="text-sm font-bold tracking-[0.2em] text-pastel-purple-dark text-center">MEMBER PERKS</h2>
                <h1 className="mt-2 text-4xl md:text-5xl text-center font-extrabold text-ink">K-Perks</h1>

                <h3 className="mt-6 max-w-2xl text-center text-lg text-ink/80 bg-white/80 p-6 rounded-3xl shadow-sm">
                    A big thank you to our amazing 2026 sponsors that have given these exciting rewards for our members!
                </h3>

                <div className="flex justify-center flex-wrap p-8 gap-5">
                    <a href="https://forms.gle/5RJ3mJwch4v2Evo57" target="_blank" rel="noopener noreferrer">
                        <button type="button" className="w-[260px] h-[64px] text-white bg-gradient-to-r from-pastel-blue-dark via-pastel-pink-dark to-pastel-purple-dark font-semibold rounded-full text-sm px-5 py-2.5 text-center shadow-md hover:shadow-lg hover:scale-105 transition-all">
                            Become a member
                        </button>
                    </a>
                    <SponModal />
                </div>

                <div className="w-full max-w-5xl text-center mt-10">
                    <h2 className="text-sm font-bold tracking-[0.2em] text-pastel-blue-dark">ALL YEAR LONG</h2>
                    <h3 className="text-3xl md:text-4xl font-extrabold text-ink mt-2">Year Round Deals.</h3>
                </div>
                <div className="w-full mt-6">
                    <SponsorMarquee />
                </div>
            </section>
            <Footer />
        </>
    )
}
