import Marquee from "react-fast-marquee"
import sbLogo from "../assets/sbear.PNG"
import bazaarLogo from "../assets/bazaar.PNG"
import hamaLogo from "../assets/hama.png"
import happyLogo from "../assets/happy.png"
import nhb from "../assets/nhb.jpg"
import iheart from "../assets/iheart.jpg"


export default function OWeekMarquee() {

    return(
        <>
            <div className="w-full h-full overflow-hidden">
                <Marquee   direction="right" speed={30} className="w-full h-full bg-[#0E1B40] mt-[3%] flex items-center pt-10 pb-10  mb-10 ">
                    <div className="flex gap-4 h-full ">
                        <div className="flex flex-col  items-center justify-start pt-12 p-4 w-[300px] h-[350px] bg-white ml-5 ">
                            <img src={sbLogo} className=" h-[150px] object-contain  "></img>
                                <span  className="text-xl  pt-10  text-gray-500 tracking-widest">TBC</span>
                        </div>
                        <div className="flex flex-col gap-5 items-center  justify-center p-4 w-[300px] h-[350px] rounded-xs   bg-white">
                            <img src={bazaarLogo}  className=" h-[100px] object-contain"></img>
                                <span  className="text-xl font  text-gray-500 tracking-widest">40+ Posters</span>
                                <span  className="text-xl font  text-gray-500 tracking-widest">Limited Albums</span>
            
                        </div>
                        <div className="flex flex-col gap-5 items-center  justify-center p-4 w-[300px] h-[350px] rounded-xs  bg-white ">
                            <img src={happyLogo}  className=" h-[100px] object-contain"></img>
                            <span  className="text-xl font  text-gray-500 tracking-widest">TBC</span>
                    
                        </div>
                        <div className="flex flex-col  gap-5 items-center  justify-center p-4 w-[300px] h-[350px] rounded-xs   bg-white ">
                            <img src={hamaLogo}  className=" h-[100px] object-contain"></img>
                                <span  className="text-xl  pt-5 text-gray-500 tracking-widest text-center">Karaoke discount vouchers</span>
                                <span  className="text-xl text-gray-500 tracking-widest text-center">Photo booth discount vouchers</span>
                        </div>
                        <div className="flex flex-col gap-5 items-center justify-center p-4  w-[300px] h-[350px]  rounded-xs  bg-white ">
                            <img src={nhb}  className=" h-[100px] object-contain"></img>
                            <span  className="text-xl text-gray-500 tracking-widest">TBC</span>
                    
                        </div>
                        <div className="flex flex-col gap-5 items-center justify-center p-4 inset-shadow-3xl w-[300px] h-[350px]  rounded-xs bg-white ">
                            <img src={iheart}  className=" h-[100px] object-contain"></img>
                            <span className="text-xl  pt-2 text-gray-500 tracking-widest">10% off storewide</span>
                            <span  className="text-xl text-gray-500 tracking-widest text-center ">IHEART KPOP party giveaways</span>
                         

                    
                        </div>
                    </div>
                </Marquee>
            </div>
        </>
    )
}