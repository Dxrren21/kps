import { useNavigate } from "react-router"
import pstar from "../assets/pstar.svg"
import groupPhoto from "../assets/KPS2025.JPG"

export default function AboutPreview() {
    const navigate = useNavigate()

    return (
        <section className="w-full bg-white py-20 px-6 md:px-16 overflow-hidden">
            <div className="max-w-6xl mx-auto md:flex md:items-center md:gap-16">

                {/* LEFT: About text */}
                <div className="md:basis-1/2 mb-12 md:mb-0">
                    <h2 className="text-base font-bold tracking-[0.2em] text-pastel-purple-dark">OUR SOCIETY</h2>
                    <h1 className="mt-2 text-4xl md:text-5xl font-extrabold text-ink">About Us.</h1>

                    <p className="mt-6 text-ink/70 text-xl leading-relaxed">
                        We're UNSW's home for all things K-pop — a community built around a shared
                        love of the music, the culture, and everything in between.
                    </p>

                    <p className="mt-4 text-ink/70 text-xl leading-relaxed">
                        Throughout the year we run dance workshops, Random Play Dances, crafting days
                        and social events, and team up with other university societies for cruises,
                        pub-crawls, and more.
                    </p>

                    <p className="mt-4 text-ink/70 text-xl leading-relaxed">
                        Whether you're a longtime fan or just getting into K-pop, KPS is a space to
                        make new friends and memories.
                    </p>

                    <button
                        onClick={() => navigate("/about")}
                        className="mt-8 px-8 py-3 rounded-full text-lg font-semibold text-white bg-gradient-to-r from-pastel-blue-dark via-pastel-pink-dark to-pastel-purple-dark shadow-md hover:shadow-lg hover:scale-105 transition-all"
                    >
                        Find Out More
                    </button>
                </div>

                {/* RIGHT: photo */}
                <div className="md:basis-1/2 relative">
                    <img src={pstar} alt="" className="absolute -top-6 -left-6 w-10 h-10 opacity-70" />
                    <img src={pstar} alt="" className="absolute -bottom-8 -right-4 w-14 h-14 opacity-60" />

                    <div className="relative aspect-[4/3] w-full rounded-[2.5rem] bg-pastel-hero shadow-lg overflow-hidden">
                        <img src={groupPhoto} alt="KPS members" className="w-full h-full object-cover" />
                    </div>
                </div>

            </div>
        </section>
    )
}
