import AboutSpeech from "../components/AboutSpeech";
import Profile from "../components/Profile";

export default function About() {
    return(
        <>
            <section className="flex flex-col items-center justify-start pt-[5%] bg-aboutwv h-screen w-screen bg-cover bg-no-repeat bg-center">
                <h1 className="text-5xl font-bold ">About Us</h1>
                <AboutSpeech />
            </section>
            <section className="bg-[#ffe3f8] h-screen w-screen">
                <h1 className="pt-12 text-5xl font-bold text-center">Meet the Team</h1>
                <h2 className="font-semibold text-center italics pt-10 text-xl">Executives</h2>
                <div className="flex justify-center pt-10">
                    <div className="flex gap-2 mx-auto">
                        <Profile />
                        <Profile />
                        <Profile />
                        <Profile />
                        <Profile />

                    </div>
                </div>
            </section>

            
        </>
    )
}