import girl from "../assets/girl.png"
import boy from "../assets/boy.png"
import { useState } from "react"


export default function Login() {

    const [visibility, setVisibility] = useState(false)
    const [bad, setBad] = useState(false)
    
    
        const toggleModal = () => {
            setVisibility(!visibility)
        }

        const toggleBadModal = () => {
            setBad(!bad)
        }

    return(
        <>
            <div className="bg-pink-100 flex flex-col items-center">
      
                
                <h1 className="text-5xl text-center font-extrabold uppercase text-gray-800">Dear: Jovin Yap Zong Horng</h1>
                  
           
                <h1 className="text-5xl text-center font-extrabold uppercase text-gray-800 pb-10">Will you be my valentine?</h1>
                <div className="flex gap-2">
                    <div className="group relative w-[500px] h-[120px] max-md:w-[80%]">
                        
                        <button type="button" onClick={toggleModal}
                            className="w-full h-full text-white bg-pink-300 hover:border hover:border-2 hover:border-purple-500 font-bold rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">
                        <span className="text-xl">
                            Yes 
                        </span>
    
                        </button>
               
                        <img src={boy} alt="Image 2" className="relative top-[-140%] left-0 w-[80px] h-[80px] object-contain opacity-0 group-hover:opacity-100 transition-opacity duration-50 z-10" />
                    </div>
                    <div className="group relative w-[500px] h-[120px] max-md:w-[80%]" onClick={toggleBadModal}>
                        <button type="button" className="w-full h-full text-white bg-purple-300 hover:border hover:border-2 hover:border-purple-500 font-bold rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">
                            <span className="text-xl">
                                No
                            </span>
                            
                        </button>
                        <img src={girl} alt="internal team" className="absolute top-[-50%] right-0 w-[100px] h-[100px] object-contain opacity-0 group-hover:opacity-100 transition-opacity duration-50 z-10" />
                    </div>
                    
                </div>
            </div>
            {visibility && (
                <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50"  onClick={toggleModal}>
                    <div className="bg-white p-6 rounded-lg shadow-lg max-w-md flex items-center flex-col ">
                        <h2 className="text-lg font-semibold">Yay I love you bb</h2>
                       
                       
                    </div>
                </div>
            )}

            {bad && (
                <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50"  onClick={toggleBadModal}>
                <div className="bg-white p-6 rounded-lg shadow-lg max-w-md flex items-center flex-col ">
                    <h2 className="text-lg font-semibold">Never talking to you again bye.</h2>
                   
                   
                </div>
            </div>
            )

            }

        </>
    )
}