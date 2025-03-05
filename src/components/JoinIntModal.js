import { useState } from "react"
import boy from "../assets/boy.png"
import girl from "../assets/girl.png"
export default function JoinIntModal() {

    const [visibility, setVisibility] = useState(false)



    const toggleModal = () => {
        setVisibility(!visibility)
    }

    return (
        <>
            <div className="group relative w-[500px] h-[120px] max-md:w-[80%]">
                       
                <button 
                    type="button" 
                    className="w-full h-full text-white bg-purple-300 hover:border hover:border-2 hover:border-purple-500 font-bold rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
                    onClick={toggleModal}>
                    <span className="text-xl">
                        Join our Subcommittees
                    </span>

                </button>
                
                <img src={girl} alt="join" className="absolute top-[-50%] right-0 w-[100px] h-[100px] object-contain opacity-0 group-hover:opacity-100 transition-opacity duration-50 z-10" />
            </div>

            {visibility && (
                <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50 max-md:w-full"  onClick={toggleModal}>
                    <div className="bg-white p-12 rounded-lg shadow-lg max-w-md flex flex-col items-center ">
                        <h2 className="text-lg font-semibold text-center pb-10">Unfortunately applications for our 2025 subcommittee has closed :(</h2>
                        {/* <div className="flex gap-5 max-md:flex-col max-md:align-center">
                            <div className="group relative max-md:w-[250px] w-[200px] h-[80px]">
                                <a href="https://drive.google.com/file/d/1pjY6KMLMgwKjkh7aiDzvZLoHAnAn5M2H/view" target="_blank" rel="noopener noreferrer">
                                    <button type="button" className="w-full h-full text-pink-300 border-gray-300 border border-2 hover:border-purple-500 rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">
                                    <span className="text-lg">
                                        Port Information
                                    </span>
                                    </button>
                                </a>
                                <img src={boy} alt="boy" className="relative top-[-140%] left-0 w-[60px] h-[60px] object-contain opacity-0 group-hover:opacity-100 transition-opacity duration-50 z-10" />
                            </div>
                     
                            <div className="group relative max-md:w-[250px]  w-[200px] h-[80px] ">
                                <a href="https://forms.gle/8Nx7UAM3dhm7nur8A" target="_blank" rel="noopener noreferrer">
                                    <button type="button" className="w-full h-full text-blue-300 border-gray-300 border border-2 hover:border-purple-500  rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">
                                    <span className="text-lg">
                                        Sign Up Form
                                    </span>
                
                                    </button>
                                </a>
                                <img src={boy} alt="boy" className="relative top-[-140%] left-[70%] w-[60px] h-[60px] object-contain opacity-0 group-hover:opacity-100 transition-opacity duration-50 z-10" />
                            </div>
             
                        </div> */}
                        
                        <button
                            className="mt-5 px-5 py-2 bg-purple-400 text-white rounded-lg hover:bg-purple-600"
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