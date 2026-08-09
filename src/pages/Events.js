import EventsCarousel from "../components/EventsCarousel"
import Footer from "../components/Footer"

export default function Events() {
    return (
        <>
            {/* HERO */}
            <section className="w-full flex flex-col items-center bg-pastel-hero px-6 pt-[110px] pb-16 text-center">
                <h2 className="text-sm font-bold tracking-[0.2em] text-pastel-purple-dark">PAST HIGHLIGHTS</h2>
                <h1 className="mt-2 text-4xl md:text-5xl font-extrabold text-ink">Our Events.</h1>
                <p className="mt-6 max-w-2xl text-ink/70 text-base md:text-lg">
                    From dance workshops to socials and comebacks, here's everything Kpop Society has been up to.
                </p>
            </section>

            {/* EVENTS */}
            <section className="w-full bg-white py-16 px-6">
                <div className="max-w-6xl mx-auto">
                    <EventsCarousel embedded />
                </div>
            </section>

            <Footer />
        </>
    )
}