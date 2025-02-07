import Marquee from "react-fast-marquee"
import sbLogo from "../assets/sbear.PNG"
import bazaarLogo from "../assets/bazaar.PNG"
import hamaLogo from "../assets/hama.png"
import happyLogo from "../assets/happy.png"
import nhb from "../assets/nhb.jpg"
import iheart from "../assets/iheart.jpg"
import kowloon from "../assets/kowloon.png"
import panda from "../assets/panda.PNG"
import squid from "../assets/squid.png"
import samnam from "../assets/samnam.jpg"
import kinetic from "../assets/kinetic.png"

export default function SponsorMarquee() {

    return(
        <>
            <div className="w-full h-full overflow-hidden">
                <Marquee direction="left" speed={30} className="w-full h-full bg-[#0E1B40] mt-[3%] flex items-center pt-10 pb-10  mb-10 ">
                    <div className="absolute top-[-30px] left-0 w-full h-[20px] bg-repeat-x bg-film"></div>
                    <div className="flex gap-4 h-full ">
                        <div className="flex flex-col  items-center justify-start pt-12 p-4 w-[300px] h-[350px] bg-white ml-5 max-md:w-[200px] max-md:h-[250px] ">
                            <img src={kowloon} className=" h-[150px] object-contain max-md:h-[110px]"></img>
                                <span  className="text-xl  pt-10  text-gray-500 max-md:text-lg">5% off storewide</span>
                        </div>
                        <div className="flex flex-col gap-5 items-center  justify-center p-4 w-[300px] h-[350px] rounded-xs   bg-white max-md:w-[200px] max-md:h-[250px]">
                            <img src="https://www.kpopbazaar.com.au/cdn/shop/files/Final_Logo_Kpop_5_360x.png?v=1648898392"  className=" h-[100px] object-contain max-md:h-[80px]"></img>
                                <span  className="text-xl font  text-gray-500 max-md:text-lg">40+ Posters</span>
                                <span  className="text-xl font  text-gray-500 max-md:text-lg">Limited Albums</span>
            
                        </div>
                        <div className="flex flex-col gap-5 items-center  justify-center p-4 w-[300px] h-[350px] rounded-xs  bg-white  max-md:w-[200px] max-md:h-[250px]">
                            <img src={panda}  className=" h-[80px] object-contain max-md:h-[60px]"></img>
                            <span  className="text-xl font  text-gray-500 max-md:text-lg">Free entry before 11pm</span>
                    
                        </div>
                        <div className="flex flex-col  gap-5 items-center  justify-center p-4 w-[300px] h-[350px] rounded-xs   bg-white max-md:w-[200px] max-md:h-[250px]">
                            <img src={squid}  className=" h-[100px] object-contain max-md:h-[80px]"></img>
                                <span  className="text-xl  pt-5 text-gray-500  text-center max-md:text-lg">10% off on weekdays</span>
                        </div>
                        <div className="flex flex-col gap-5 items-center justify-center p-4  w-[300px] h-[350px]  rounded-xs  bg-white max-md:w-[200px] max-md:h-[250px]">
                            <img src={samnam}  className=" h-[100px] object-contain max-md:h-[80px]"></img>
                            <span  className="text-xl text-gray-500 max-md:text-lg">10% off all days</span>
                        </div>
                        <div className="flex flex-col gap-5 items-center justify-center p-4  w-[300px] h-[350px]  rounded-xs  bg-white max-md:w-[200px] max-md:h-[250px]">
                            <img src={kinetic}  className=" h-[150px] object-contain max-md:h-[100px]"></img>
                            <span  className="text-xl text-gray-500 max-md:text-lg">15% off classes</span>
                        </div>
                        <div className="flex flex-col gap-5 items-center justify-center p-4 inset-shadow-3xl w-[300px] h-[350px]  rounded-xs bg-white max-md:w-[200px] max-md:h-[250px]">
                            <img src={iheart}  className=" h-[100px] object-contain max-md:h-[80px]"></img>
                            <span className="text-xl  pt-2 text-gray-500 max-md:text-lg">10% off storewide</span>
                            <span  className="text-xl text-gray-500 text-center max-md:text-lg">IHEART KPOP party giveaways</span>
                        </div>
                    </div>
                    <div className="absolute bottom-[-30px] left-0 w-full h-[20px] bg-repeat-x bg-film"></div>
                </Marquee>
            </div>
        </>
    )
}