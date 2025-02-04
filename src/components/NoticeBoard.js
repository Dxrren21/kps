import boy from "../assets/boy.png"
export default function NoticeBoard() {

    

    return (
        <section className="grid gap-10 pt-20 grid-cols-1 max-md:flex max-md:flex-col max-md:items-center">  
            <div className="group relative" >
                <div className="flex justify-center items-center text-center max-md:w-[80%] max-md:p-5 max-md:text-sm bg-white w-[100%] h-[200px] max-md:h-[120px] rounded text-xl text-gray-700 font-medium border-2 border-gray-400 hover:border-[#273b92]  font-semibold tracking-wider hover:text-[1.3rem] hover:border-2"> 
                    Meet the 2025 UNSW Kpop Society Team
                </div>
                <img src={boy} alt="internal team" className="absolute top-[-30%] right-0 md:w-[100px] md:h-[100px] w-[80px] h-[80px] object-contain opacity-0 group-hover:opacity-100 transition-opacity duration-50 z-10" />
            </div>
            <div className="group relative" >
                <div className="flex justify-center items-center text-center max-md:w-[80%] max-md:p-5 max-md:text-sm bg-white w-[100%] h-[200px] max-md:h-[120px] rounded text-xl text-gray-700 font-medium border-2 border-gray-400 hover:border-[#273b92]  font-semibold tracking-wider hover:text-[1.3rem] hover:border-2"> 
                    O-Week 
                </div>
                <img src={boy} alt="internal team" className="absolute top-[-30%] right-0 md:w-[100px] md:h-[100px] w-[80px] h-[80px] object-contain opacity-0 group-hover:opacity-100 transition-opacity duration-50 z-10" />
            </div>
            <div className="group relative" >
                <div className="flex justify-center items-center text-center  max-md:w-[80%] max-md:p-5 max-md:text-sm bg-white w-[100%] h-[200px] max-md:h-[120px] rounded text-xl text-gray-700 font-medium border-2 border-gray-400 hover:border-[#273b92]  font-semibold tracking-wider hover:text-[1.3rem] hover:border-2"> 
                    Sign up for our foundations course!
                </div>
                <img src={boy} alt="internal team" className="absolute top-[-30%] right-0 md:w-[100px] md:h-[100px] w-[80px] h-[80px] object-contain opacity-0 group-hover:opacity-100 transition-opacity duration-50 z-10" />
            </div>
            
            
        </section>
    )
}