import Footer from "../components/Footer"
import star from "../assets/star.svg"
import boy from "../assets/boy.png"
import girl from "../assets/girl.png"

export default function Newsletter() {
    return (
        <>
            <section className="w-full min-h-screen flex flex-col items-center bg-newsbg bg-cover bg-center">
                <div className="flex items-center gap-2 pb-10 pt-10 max-md:gap-3 mx-2 pt-[100px]">
                        <img src={star} className="w-10 h-10 pt-1 max-md:w-7 max-md:h-7 "></img>
                            <h1 className="text-5xl text-center font-extrabold uppercase max-md:text-3xl">Newsletter</h1>
                        <img src={star} className="w-10 h-10 pt-1 max-md:w-7 max-md:h-7 "></img>
                </div>
                <div className="flex justify-center h-[45%] p-8 gap-5 max-md:flex-col">
                    <div className="group relative w-[300px] h-[100px]">
                            <a href="https://weebly.us4.list-manage.com/subscribe?u=4a561cb09634b5f8d81ef6371&id=f934d5fe68" target="_blank" rel="noopener noreferrer">
                                <button type="button" className="w-full h-full bg-white text-blue-400 border border-2 border-gray-300 font-semibold rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">
                                Subscribe to Our Newsletter
                                </button>
                            </a>
                            <img src={boy} alt="Image 2" className="relative top-[-150%] left-[5%] w-[60px] h-[60px] object-contain opacity-0 group-hover:opacity-100 transition-opacity duration-50 z-10" />
                    </div>
                    <div className="group relative w-[300px] h-[100px]">
                            <a href="https://tellonym.me/unswkpop" target="_blank" rel="noopener noreferrer">
                                <button type="button" className="w-full h-full bg-white text-pink-300 border border-2 border-gray-300 font-semibold rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">
                                Send us a Tellonym
                                </button>
                            </a>
                            <img src={girl} alt="Image 2" className="relative top-[-150px] left-[70%] w-[80px] h-[80px] object-contain opacity-0 group-hover:opacity-100 transition-opacity duration-50 z-10" />
                    </div>
                    <div className="group relative w-[300px] h-[100px]">
                            <a href="https://drive.google.com/drive/folders/1TuGK6EO7TXirLFM9ZyB8s6X8CoQHH2Cd?usp=sharing" target="_blank" rel="noopener noreferrer">
                            <button type="button" className="w-full h-full bg-white text-blue-400 border border-2 border-gray-300 font-semibold rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">
                                2025 Newsletter Archive
                                </button>
                            </a>
                            <img src={boy} alt="Image 2" className="relative top-[-150%] left-[5%] w-[60px] h-[60px] object-contain opacity-0 group-hover:opacity-100 transition-opacity duration-50 z-10" />
                    </div>
                </div>
            </section>
            <Footer />
        </>
    )
}