import { useState } from "react"
import boy from "../assets/boy.png"
export default function SponModal() {

    const [visibility, setVisibility] = useState(false)



    const toggleModal = () => {
        setVisibility(!visibility)
    }

    return (
        <>
            
            <div className="group relative  w-[260px] h-[64px]">
                    <button type="button" 
                    className="w-full h-full bg-white text-pastel-purple-dark border-2 border-pastel-purple-light hover:border-pastel-purple-dark font-semibold rounded-full text-sm px-5 py-2.5 text-center transition-colors"
                    onClick={toggleModal}>
                        Sponsor us
                    </button>
                    <img src={boy} alt="internal team" className="absolute top-[-30%] right-0 w-[60px] h-[60px] object-contain opacity-0 group-hover:opacity-100 transition-opacity duration-50 z-10" />
            </div>

            {visibility && (
                <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50"  onClick={toggleModal}>
                    <div className="bg-white p-6 rounded-2xl shadow-lg max-w-md flex items-center flex-col ">
                        <h2 className="text-lg font-semibold text-ink">Make an Inquiry to our Marketing Team!</h2>
                        <p className="mt-2 text-md text-ink/70">mark.unswkpop@gmail.com</p>
                        <button
                            className="mx-auto mt-4 px-4 py-2 bg-gradient-to-r from-pastel-blue-dark via-pastel-pink-dark to-pastel-purple-dark text-white rounded-full hover:shadow-md transition-shadow"
                            onClick={toggleModal}
                        >
                            Close
                        </button>
                    </div>
                </div>
            )}

           
        </>
    )
}