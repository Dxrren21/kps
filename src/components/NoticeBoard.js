import boy from "../assets/boy.png"
import girl from "../assets/girl.png"
import { useNavigate } from "react-router"
export default function NoticeBoard() {

    const navigate = useNavigate()

    return (
        <section className="grid gap-10 pt-20 grid-cols-1 max-md:flex max-md:flex-col max-md:items-center max-md:pb-12">  
            {/* <div className="flex gap-7">
                <a 
                    href="https://forms.gle/8Nx7UAM3dhm7nur8A"
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="group relative w-full max-md:w-[80%]">
                
                    <div className="flex justify-center items-center text-center max-md:w-full max-md:p-5 max-md:text-sm bg-white w-[100%] h-[200px] max-md:h-[120px] rounded text-xl text-gray-700 font-medium border-2 border-gray-500 hover:border-[#273b92] font-semibold tracking-wider md:hover:text-[1.3rem] hover:border-2">
                    
                        Subcommittee Recruitment Form
                        
                    </div>
                    <img src={girl} alt="internal team" className="absolute top-[-33%] right-0 md:w-[120px] md:h-[110px] w-[80px] h-[80px] object-contain opacity-0 group-hover:opacity-100 transition-opacity duration-50 z-10" />
            
                </a>
                <a 
                    href="https://drive.google.com/file/d/1pjY6KMLMgwKjkh7aiDzvZLoHAnAn5M2H/view"
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="group relative w-full max-md:w-[80%]">
                
                    <div className="flex justify-center items-center text-center max-md:w-full max-md:p-5 max-md:text-sm bg-white w-[100%] h-[200px] max-md:h-[120px] rounded text-xl text-gray-700 font-medium border-2 border-gray-500 hover:border-[#273b92] font-semibold tracking-wider md:hover:text-[1.3rem] hover:border-2">
                    
                        Subcommittee Port Descriptions
                        
                    </div>
                    <img src={girl} alt="internal team" className="absolute top-[-33%] right-0 md:w-[120px] md:h-[110px] w-[80px] h-[80px] object-contain opacity-0 group-hover:opacity-100 transition-opacity duration-50 z-10" />
            
                </a>
            </div> */}
            
            <a 
                href="https://events.humanitix.com/unsw-kpopsoc-x-fabsoc-x-hksa-x-ssa-x-mso-y2k-pubcrawl"
                target="_blank" 
                rel="noopener noreferrer"
                className="group relative w-full max-md:w-[80%]">
 
                <div className="flex justify-center items-center text-center max-md:w-full max-md:p-5 max-md:text-sm bg-white w-[100%] h-[200px] max-md:h-[120px] rounded text-xl text-gray-700 font-medium border-2 border-gray-500 hover:border-[#273b92] font-semibold tracking-wider md:hover:text-[1.3rem] hover:border-2">
                        Y2K Pubcrawl Tickets
                </div>
                <img src={boy} alt="internal team" className="absolute top-[-30%] right-0 md:w-[100px] md:h-[100px] w-[80px] h-[80px] object-contain opacity-0 group-hover:opacity-100 transition-opacity duration-50 z-10" />

            </a>
            <a 
                href="https://docs.google.com/forms/d/e/1FAIpQLSdqrnMXyG4ocCiyL-XkggerKjjmGsKDFFG8UEVIne2vqRlEbQ/viewform"
                target="_blank" 
                rel="noopener noreferrer"
                className="group relative w-full max-md:w-[80%]">
 
                <div className="flex justify-center items-center text-center max-md:w-full max-md:p-5 max-md:text-sm bg-white w-[100%] h-[200px] max-md:h-[120px] rounded text-xl text-gray-700 font-medium border-2 border-gray-500 hover:border-[#273b92] font-semibold tracking-wider md:hover:text-[1.3rem] hover:border-2">
                        Hands Up Signup Form
                </div>
                <img src={boy} alt="internal team" className="absolute top-[-30%] right-0 md:w-[100px] md:h-[100px] w-[80px] h-[80px] object-contain opacity-0 group-hover:opacity-100 transition-opacity duration-50 z-10" />

            </a>
            
            {/* <a 
                href="https://forms.gle/evkjNsro8wboyRhT9"
                target="_blank" 
                rel="noopener noreferrer"
                className="group relative w-full max-md:w-[80%]">
 
                <div className="flex justify-center items-center text-center max-md:w-full max-md:p-5 max-md:text-sm bg-white w-[100%] h-[200px] max-md:h-[120px] rounded text-xl text-gray-700 font-medium border-2 border-gray-500 hover:border-[#273b92] font-semibold tracking-wider md:hover:text-[1.3rem] hover:border-2">
                        KNTQ Sign Up Form   
                </div>
                <img src={boy} alt="internal team" className="absolute top-[-30%] right-0 md:w-[100px] md:h-[100px] w-[80px] h-[80px] object-contain opacity-0 group-hover:opacity-100 transition-opacity duration-50 z-10" />

            </a> */}
            {/* <div className="group relative w-full max-md:w-[80%]">
                <div 
                    className="flex justify-center items-center text-center max-md:w-full max-md:p-5 max-md:text-sm bg-white w-[100%] h-[200px] max-md:h-[120px] rounded text-xl text-gray-700 font-medium border-2 border-gray-500 hover:border-[#273b92] font-semibold tracking-wider md:hover:text-[1.3rem] hover:border-2"
                    onClick={() => navigate("/about", { state: { scrollToMeet: true } })}>
                    Meet the 2025 UNSW Kpop Society Team
                </div>
                <img src={boy} alt="internal team" className="absolute top-[-30%] right-0 md:w-[100px] md:h-[100px] w-[80px] h-[80px] object-contain opacity-0 group-hover:opacity-100 transition-opacity duration-50 z-10" />
            </div> */}
            
            
            
        </section>
    )
}