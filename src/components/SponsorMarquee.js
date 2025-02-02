import Marquee from "react-fast-marquee"
import sbLogo from "../assets/sbear.PNG"
import bazaarLogo from "../assets/bazaar.PNG"
import hamaLogo from "../assets/hama.png"
import happyLogo from "../assets/happy.png"
import nhb from "../assets/nhb.jpg"
import iheart from "../assets/iheart.jpg"


export default function SponsorMarquee() {

    return(
        <>
            <div className="w-full h-full overflow-hidden">
                <Marquee speed={30} className="w-full h-full">
                    <div className="flex gap-4 h-full pt-[8%]">
                        <div className="flex flex-col  items-center justify-start pt-12 border border-2 p-4 w-[300px] h-[350px] bg-white  rounded-xl  border-[#726EE6]">
                            <img src={sbLogo} className=" h-[150px] object-contain  "></img>
                                <span className="pt-10">TBC</span>
                        </div>
                        <div className="flex flex-col gap-5 items-center  justify-center border border-2 p-4 w-[300px] h-[350px] rounded-xl  bg-white border-[#726EE6]">
                            <img src={bazaarLogo}  className=" h-[100px] object-contain"></img>
                                <span>40+ Posters</span>
                                <span>Limited Albums</span>
            
                        </div>
                        <div className="flex flex-col gap-5 items-center  justify-center border border-2 p-4 w-[300px] h-[350px] rounded-xl bg-white border-[#726EE6]">
                            <img src={happyLogo}  className=" h-[100px] object-contain"></img>
                            <span>TBC</span>
                    
                        </div>
                        <div className="flex flex-col  gap-5 items-center  justify-center border border-2 p-4 w-[300px] h-[350px] rounded-xl  bg-white border-[#726EE6]">
                            <img src={hamaLogo}  className=" h-[100px] object-contain"></img>
                                <span>Karaoke discount vouchers</span>
                                <span>Photo booth vouchers</span>
                        </div>
                        <div className="flex flex-col gap-5 items-center justify-center border border-2 p-4  w-[300px] h-[350px]  rounded-xl bg-white border-[#726EE6]">
                            <img src={nhb}  className=" h-[100px] object-contain"></img>
                            <span>TBC</span>
                    
                        </div>
                        <div className="flex flex-col gap-5 items-center justify-center border border-2 p-4  w-[300px] h-[350px]  rounded-xl bg-white border-[#726EE6]">
                            <img src={iheart}  className=" h-[100px] object-contain"></img>
                                <span>10% off storewide</span>
                                <span>IHEART KPOP party giveaways</span>
                    
                        </div>
                    </div>
                </Marquee>
            </div>
        </>
    )
}