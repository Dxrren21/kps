import AboutSpeech from "../components/AboutSpeech";
import Carousel from "../components/Carousel";

export default function About() {
    return(
        <>
            <section className="flex flex-col items-center justify-start pt-[5%] bg-aboutwv h-screen w-screen bg-cover bg-no-repeat bg-center">
                <h1 className="text-5xl font-bold ">About Us</h1>
                <AboutSpeech />
            </section>
            <section className="bg-[#ffe3f8] h-screen w-screen">
                <h1 className="pt-12 text-5xl font-bold text-center pb-10">Meet the Team</h1>
                <Carousel />
            </section>
            <section>
                <h1>Contact Us </h1>
                <div>
                 
                </div>
            </section>

            
        </>
    )
}