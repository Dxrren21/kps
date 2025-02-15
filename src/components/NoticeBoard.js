import boy from "../assets/boy.png"
import girl from "../assets/girl.png"
import { useNavigate } from "react-router"
export default function NoticeBoard() {

    const navigate = useNavigate()

    return (
        <section className="grid gap-10 pt-20 grid-cols-1 max-md:flex max-md:flex-col max-md:items-center max-md:pb-12">  
            <a 
                href="https://docs.google.com/forms/d/e/1FAIpQLSdRTH48fRX0sd8snwYJ08XKldQPXA4y6CvAiO3WCG9ShcPEnw/viewform"
                target="_blank" 
                rel="noopener noreferrer"
                className="group relative w-full max-md:w-[80%]">
             
                <div className="flex justify-center items-center text-center max-md:w-full max-md:p-5 max-md:text-sm bg-white w-[100%] h-[200px] max-md:h-[120px] rounded text-xl text-gray-700 font-medium border-2 border-gray-400 hover:border-[#273b92] font-semibold tracking-wider md:hover:text-[1.3rem] hover:border-2">
                
                        Dance Foundations Course 2025
                    
                </div>
                <img src={girl} alt="internal team" className="absolute top-[-33%] right-0 md:w-[120px] md:h-[110px] w-[80px] h-[80px] object-contain opacity-0 group-hover:opacity-100 transition-opacity duration-50 z-10" />
        
            </a>
            <a 
                href="https://docs.google.com/forms/d/e/1FAIpQLSdiFDEmFSxClQZgshn2eAOJGm4yXCqLMcyBxQ0e2tLH9LCAeg/viewform"
                target="_blank" 
                rel="noopener noreferrer"
                className="group relative w-full max-md:w-[80%]">
 
                <div className="flex justify-center items-center text-center max-md:w-full max-md:p-5 max-md:text-sm bg-white w-[100%] h-[200px] max-md:h-[120px] rounded text-xl text-gray-700 font-medium border-2 border-gray-400 hover:border-[#273b92] font-semibold tracking-wider md:hover:text-[1.3rem] hover:border-2">
                        Kick Off Sign Up Form   
                </div>
                <img src={boy} alt="internal team" className="absolute top-[-30%] right-0 md:w-[100px] md:h-[100px] w-[80px] h-[80px] object-contain opacity-0 group-hover:opacity-100 transition-opacity duration-50 z-10" />

            </a>
            <div className="group relative w-full max-md:w-[80%]">
                <div 
                    className="flex justify-center items-center text-center max-md:w-full max-md:p-5 max-md:text-sm bg-white w-[100%] h-[200px] max-md:h-[120px] rounded text-xl text-gray-700 font-medium border-2 border-gray-400 hover:border-[#273b92] font-semibold tracking-wider md:hover:text-[1.3rem] hover:border-2"
                    onClick={() => navigate("/about", { state: { scrollToMeet: true } })}>
                    Meet the 2025 UNSW Kpop Society Team
                </div>
                <img src={boy} alt="internal team" className="absolute top-[-30%] right-0 md:w-[100px] md:h-[100px] w-[80px] h-[80px] object-contain opacity-0 group-hover:opacity-100 transition-opacity duration-50 z-10" />
            </div>
            
            
            
        </section>
    )
}