import AboutSpeech from "../components/AboutSpeech";
import Carousel from "../components/Carousel";
import JoinModal from "../components/JoinModal";
import ScrollArrow from "../components/ScrollArrow";
import { useRef, useEffect } from 'react'
import { useLocation } from "react-router";
import Footer from "../components/Footer";

export default function About() {
    const meetRef = useRef()
    const joinRef = useRef()
    const location = useLocation()

    useEffect(() => {
          if (location.state?.scrollToJoin) {
            joinRef.current?.scrollIntoView({ behavior: "smooth" });
          }

          if (location.state?.scrolltoMeet) {
            meetRef.current?.scrollIntoView({ behavior: "smooth" });
          }
        }, [location]);

    return(
        <>
            {/* HERO */}
            <section className="md:min-h-screen flex flex-col items-center justify-center bg-pastel-hero max-w-screen px-6 pt-[110px] pb-16">
                <h2 className="text-sm font-bold tracking-[0.2em] text-pastel-purple-dark text-center">GET TO KNOW US</h2>
                <h1 className="mt-2 text-4xl md:text-5xl text-center font-extrabold text-ink">About Us</h1>

                <AboutSpeech />
                <ScrollArrow className="block pt-10" scrollToRef={meetRef}/>
            </section>

            {/* MEET THE TEAM */}
            <section ref={meetRef} className="w-full bg-pastel-soft py-16 px-6">
                <div className="text-center mb-2">
                    <h2 className="text-sm font-bold tracking-[0.2em] text-pastel-blue-dark">OUR EXECUTIVES</h2>
                    <h3 className="text-3xl md:text-4xl font-extrabold text-ink mt-2">Meet the Team.</h3>
                </div>

                <Carousel/>
            </section>

            {/* JOIN US */}
            <section className="w-full bg-white py-20 px-6">
                <div ref={joinRef} className="text-center mb-10">
                    <h2 className="text-sm font-bold tracking-[0.2em] text-pastel-pink-dark">READY TO JUMP IN?</h2>
                    <h1 className="mt-2 text-3xl md:text-4xl font-extrabold text-ink">Join Us.</h1>
                </div>

                <div className="flex justify-center p-4 gap-5 max-md:flex-col max-md:items-center">
                    <JoinModal />
                </div>
            </section>

            <Footer />
        </>
    )
}
