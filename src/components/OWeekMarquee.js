import Marquee from "react-fast-marquee"
import sbLogo from "../assets/sbear.PNG"
import bazaarLogo from "../assets/bazaar.PNG"
import hamaLogo from "../assets/hama.png"
import happyLogo from "../assets/happy.png"
import nhb from "../assets/nhb.jpg"
import iheart from "../assets/iheart.jpg"
import film from "../assets/film.svg"


export default function OWeekMarquee() {

    return(
        <>
            <div className="w-full h-full overflow-hidden">
               
                <Marquee   direction="right" speed={30} className="w-full h-full bg-[#0E1B40] mt-[3%] flex items-center pt-10 pb-10  mb-10 ">
                    <div className="absolute top-[-30px] left-0 w-full h-[20px] bg-repeat-x bg-film"></div>
                    <div className="flex gap-4 h-full ">
                        <div className="flex flex-col  items-center justify-start pt-12 p-4 w-[300px] h-[350px] bg-white ml-5 max-md:w-[200px] max-md:h-[250px] ">
                            <img src={sbLogo} className=" h-[150px] object-contain max-md:h-[110px]"></img>
                                <span  className="text-xl  pt-10  text-gray-500 max-md:text-lg">TBC</span>
                        </div>
                        <div className="flex flex-col gap-5 items-center  justify-center p-4 w-[300px] h-[350px] rounded-xs   bg-white max-md:w-[200px] max-md:h-[250px]">
                            <img src="https://www.kpopbazaar.com.au/cdn/shop/files/Final_Logo_Kpop_5_360x.png?v=1648898392"  className=" h-[100px] object-contain max-md:h-[80px]"></img>
                                <span  className="text-xl font  text-gray-500 max-md:text-lg">40+ Posters</span>
                                <span  className="text-xl font  text-gray-500 max-md:text-lg">Limited Albums</span>
            
                        </div>
                        <div className="flex flex-col gap-5 items-center  justify-center p-4 w-[300px] h-[350px] rounded-xs  bg-white  max-md:w-[200px] max-md:h-[250px]">
                            <img src={happyLogo}  className=" h-[100px] object-contain max-md:h-[80px]"></img>
                            <span  className="text-xl font  text-gray-500 max-md:text-lg">TBC</span>
                    
                        </div>
                        <div className="flex flex-col  gap-5 items-center  justify-center p-4 w-[300px] h-[350px] rounded-xs   bg-white max-md:w-[200px] max-md:h-[250px]">
                            <img src={hamaLogo}  className=" h-[100px] object-contain max-md:h-[80px]"></img>
                                <span  className="text-xl  pt-5 text-gray-500  text-center max-md:text-lg">Karaoke discount vouchers</span>
                                <span  className="text-xl text-gray-500  text-center max-md:text-lg">Photo booth discount vouchers</span>
                        </div>
                        <div className="flex flex-col gap-5 items-center justify-center p-4  w-[300px] h-[350px]  rounded-xs  bg-white max-md:w-[200px] max-md:h-[250px]">
                            <img src={nhb}  className=" h-[100px] object-contain max-md:h-[80px]"></img>
                            <span  className="text-xl text-gray-500 max-md:text-lg">TBC</span>
                    
                        </div>
                        <div className="flex flex-col gap-5 items-center justify-center p-4 inset-shadow-3xl w-[300px] h-[350px]  rounded-xs bg-white max-md:w-[200px] max-md:h-[250px]">
                            <img src={iheart}  className=" h-[100px] object-contain max-md:h-[80px]"></img>
                            <span className="text-xl  pt-2 text-gray-500 max-md:text-lg">10% off storewide</span>
                            <span  className="text-xl text-gray-500 text-center max-md:text-lg">IHEART KPOP party giveaways</span>
                        </div>
                        <div className="absolute bottom-[-30px] left-0 w-full h-[20px] bg-repeat-x bg-film"></div>
                    </div>
                </Marquee>
            </div>
        </>
    )
}