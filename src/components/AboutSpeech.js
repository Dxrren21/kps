import georgia from "../assets/mascot1.png"
import girl from "../assets/girl.png"


export default function AboutSpeech() {
    
    return (
        <>
            <div className="group mt-12 bg-white max-md:w-[80vw] w-[55vw] pb-12 border border-4 rounded-4 p-4 border-[#273b92] bg-gray rounded-xl text-lg mb-10 ">
                    <img src={girl} alt="internal team" className="absolute top-[110px] left-1/2 transform -translate-x-1/2 w-[130px] h-[130px] object-contain lg:hidden max-[350px]:top-[200px] z-45" />
                    <h2 className="font-semibold pt-5  text-center text-2xl max-md:text-[1.1rem]" >
                        Welcome to UNSW Kpop Society! 
                    </h2>
                    <p className="mx-8 pt-8 text-lg leading-relaxed lg:text-2xl/10  max-md:text-[1rem] max-md:mx-2 text-center text-gray-800">
                        We are a group of students who share a love for Kpop music and culture. Our society runs a variety of social events, dance workshops, performance showcases and more. We also collaborate with our lovely sponsors and other societies to provide new events and giveaways for our members. 

                        This is a space to make new friends and experiences, so don’t be afraid to join our society or contact us for more info!    
                    </p>
                    <p className=" text-left pt-[7%] italic max-md:text-[1rem] lg:text-2xl text-center text-pink-300" >
                        Love, <br /> Georgia (2025 President) ❤️
                    </p>
             
                    
  
                    <img src={georgia} className="absolute w-[30%] right-[5%] md:w-[25%] top-[750px] md:right-[10%] max-lg:hidden min-[1500px]:top-[600px] "></img>
                    
            </div>

            
        </>
    )
}