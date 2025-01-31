import georgia from "../assets/mascot1.png"

export default function AboutSpeech() {
    
    return (
        <>
            <div className="mt-12 bg-white w-[55vw] h-[55vh] border border-4 rounded-4 p-4 border-[#273b92] bg-gray rounded-xl rounded-br-none text-lg mb-10">
                    
                    <h2 className="pt-5 font-semibold text-center text-xl" >
                        Welcome to UNSW Kpop Society! 
                    </h2>
                    <p className="ml-10 mr-10 pt-11 leading-0.1 text-lg/10 lg:text-xl/10">
                        We are a group of students who share a love for Kpop music and culture. Our society runs a variety of social events, dance workshops, performance showcases and more. We also collaborate with our lovely sponsors and other societies to provide new events and giveaways for our members. 

                        This is a space to make new friends and experiences, so don’t be afraid to join our society or contact us for more info! 
                    </p>
                    <p className="ml-10 text-left pt-[7%] italic lg:text-xl">
                    Love, <br></br> Georgia (2025 President) ❤️
                    </p>
                    
                    
  
                    <img src={georgia} className=" absolute w-[25%] right-[10%] bottom-[5%]"></img>
                    
            </div>

            
        </>
    )
}