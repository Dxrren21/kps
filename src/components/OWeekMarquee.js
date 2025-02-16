import Marquee from "react-fast-marquee"
import hamaLogo from "../assets/hama.png"
import happyLogo from "../assets/happy.png"
import nhb from "../assets/nhb.jpg"
import iheart from "../assets/iheart.jpg"
import goros from "../assets/goros.png"



export default function OWeekMarquee() {

    return(
        <>
            <div className="w-full h-full overflow-hidden">
               
                <Marquee   direction="right" speed={30} className="w-full h-full bg-[#0E1B40] mt-[3%] flex items-center pt-10 pb-10  mb-10 ">
                    <div className="absolute top-[-30px] left-0 w-full h-[20px] bg-repeat-x bg-film"></div>
                    <div className="flex gap-4 h-full ">
                        <div className="flex flex-col  items-center justify-start pt-12 p-4 w-[300px] h-[350px] bg-white ml-5 max-md:w-[200px] max-md:h-[250px] ">
                            <img src={goros} alt="goros logo" className=" h-[150px] object-contain max-md:h-[110px]"></img>
                                <span  className="text-xl  pt-10  text-gray-500 max-md:text-lg">Karaoke and drinks combos</span>
                        </div>
                        <div className="flex flex-col gap-5 items-center  justify-center p-4 w-[300px] h-[350px] rounded-xs   bg-white max-md:w-[200px] max-md:h-[250px]">
                            <img   alt="kpop bazaar logo" src="https://www.kpopbazaar.com.au/cdn/shop/files/Final_Logo_Kpop_5_360x.png?v=1648898392"  className=" h-[100px] object-contain max-md:h-[80px]"></img>
                                <span  className="text-xl font  text-gray-500 max-md:text-lg text-center">7 albums/digipacks to giveaway</span>
                                <span  className="text-xl font  text-gray-500 max-md:text-lg text-center">10 posters to giveaway</span>
            
                        </div>
                        <div className="flex flex-col gap-5 items-center  justify-center p-4 w-[300px] h-[350px] rounded-xs  bg-white  max-md:w-[200px] max-md:h-[250px]">
                            <img src={happyLogo}   alt="happy logo"  className=" h-[100px] object-contain max-md:h-[80px]"></img>
                            <span  className="text-xl font  text-gray-500 max-md:text-lg text-center pb-2">10 keychains/sticker sheets to giveaway</span>
                            <span  className="text-xl font  text-gray-500 max-md:text-lg text-center">15 photobooth session vouchers</span>
                        </div>
                        <div className="flex flex-col  gap-5 items-center  justify-center p-4 w-[300px] h-[350px] rounded-xs   bg-white max-md:w-[200px] max-md:h-[250px]">
                            <img src={hamaLogo}  alt="hama logo" className=" h-[100px] object-contain max-md:h-[80px]"></img>
                                <span  className="text-xl  pt-5 text-gray-500  text-center max-md:text-lg text-center">300+ Karaoke discount vouchers</span>
                                <span  className="text-xl text-gray-500  text-center max-md:text-lg text-center">300+ Photo booth discount vouchers</span>
                        </div>
                        <div className="flex flex-col gap-5 items-center justify-center p-4  w-[300px] h-[350px]  rounded-xs  bg-white max-md:w-[200px] max-md:h-[250px]">
                            <img src={nhb}  alt="nhb logo"  className=" h-[100px] object-contain max-md:h-[80px]"></img>
                            <span  className="text-xl text-gray-500 max-md:text-lg text-center">Discount vouchers</span>
                    
                        </div>
                        <div className="flex flex-col gap-5 items-center justify-center p-4 inset-shadow-3xl w-[300px] h-[350px]  rounded-xs bg-white max-md:w-[200px] max-md:h-[250px]">
                            <img src={iheart}  alt="iheart logo" className=" h-[100px] object-contain max-md:h-[80px]"></img>
                            <span className="text-xl  pt-2 text-gray-500 max-md:text-lg text-center">5 albums to giveaway</span>
                            <span  className="text-xl text-gray-500 text-center max-md:text-lg text-center">Discount vouchers</span>
                        </div>
                        <div className="absolute bottom-[-30px] left-0 w-full h-[20px] bg-repeat-x bg-film"></div>
                    </div>
                </Marquee>
            </div>
        </>
    )
}