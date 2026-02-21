import georgia from "../assets/mascot1.png"
import girl from "../assets/girl.png"


export default function AboutSpeech() {
    
    return (
        <>
            <div className="group mt-12 bg-white max-md:w-[80vw] w-[55vw] pb-12 border border-4 rounded-4 p-4 border-[#273b92] bg-gray rounded-xl text-lg mb-10 ">
                    <img src={girl} alt="internal team" className="absolute top-[110px] left-1/2 transform -translate-x-1/2 w-[130px] h-[130px] object-contain lg:hidden max-[350px]:top-[200px] z-45 md:top-[180px]" />
                    <h2 className="font-semibold pt-5  text-center text-2xl max-md:text-[1.1rem]" >
                        Welcome to UNSW Kpop Society! 
                    </h2>
                    <p className="mx-8 pt-8 text-lg leading-relaxed lg:text-2xl/10  max-md:text-[1rem] max-md:mx-2 text-center text-gray-800">
                        Want to join a community of students who all share a love for Kpop music and culture? KpopSoc is for you! Throughout the year, our society holds a variety of Kpop-themed events including dance workshops, Random Play Dances, crafting days and variety show-style games! 
                        
                        We also collaborate with other university societies to provide exciting social events like cruises and pub-crawls, and partnering with our lovely sponsors allows us to share exclusive perks and giveaways for our members! 
                        
                        Whether you're a longtime Kpop fan, or just getting into it, our society is a space to make new friends and fun memories, so don't be afraid to join or contact us for more info!
 
                    </p>
                    <p className=" text-left pt-[7%] italic max-md:text-[1rem] lg:text-2xl text-center text-pink-300" >
                        Love, <br /> Grace (2026 President) ❤️
                    </p>
             
                    
  
                    <img alt="georgia avatar" src={georgia} className="absolute w-[30%] right-[5%] md:w-[25%] top-[750px] md:right-[10%] max-lg:hidden min-[1500px]:top-[600px] "></img>
                    
            </div>

            
        </>
    )
}