import Klogo from "../components/KLogo"
import ButtonsMenu from "../components/ButtonsMenu"
import NoticeBoard from "../components/NoticeBoard"
import ScrollArrow from "../components/ScrollArrow"
import { useRef } from 'react'
import ig from "../assets/ig.svg"
import fb from "../assets/fb.svg"
import tiktok from "../assets/tiktok.svg"
import yt from "../assets/youtube.svg"
import disc from "../assets/discord.svg"
import { useEffect } from "react"
import { useLocation } from "react-router"
import spotify from "../assets/spotify.svg"


export default function Home() {
    const noticeRef = useRef()
    const location = useLocation();
    useEffect(() => {
      if (location.state?.scrollToNotices) {
        noticeRef.current?.scrollIntoView({ behavior: "smooth" });
      }
    }, [location]);
  
    return(
    <>
      <section className="w-full min-h-screen overflow-x-hidden ">
        <section className="w-full h-screen pt-[5%] flex flex-col items-center overflow-x-hidden space-y-12 bg-logobg bg-cover bg-center box-border">
          <Klogo />
          <ButtonsMenu />
          <div className="w-full flex justify-center max-md:mr-3 mr-10">
            <ScrollArrow scrollToRef={noticeRef} />
          </div>
        </section>
        <section 
            ref={noticeRef} 
            className="md:flex md:h-[100vh] font-sans bg-home bg-cover bg-center"
        >
          <div className="md:basis-1/4 max-md:w-[100%] max-md:text-center relative md:bottom-[10%] ">
            <div className="md:absolute md:rotate-90 md:pb-[100%] md:origin-left md:text-6xl font-extrabold text-gray-800 text-3xl">NOTICEBOARD</div>
          </div>
          <div className="md:basis-1/2 max-md:w-[100%] max-md:px-10">
            <NoticeBoard />
          </div>
          <div className="md:basis-1/4 relative max-md:hidden ">
            <div className="absolute bottom-10 left-10">
              <h1 className="text-4xl font-extrabold text-gray-800" >Our Socials</h1>
              <div className="grid gap-4 pt-5 grid-cols-3 pl-5">
  <a href="https://www.instagram.com/unswkpop/" target="_blank" rel="noopener noreferrer">
    <img src={ig} alt="Instagram" className="w-12 h-12 transition-transform duration-300 ease-in-out hover:scale-110 hover:opacity-80" />
  </a>
  <a href="https://www.facebook.com/unswkpop/" target="_blank" rel="noopener noreferrer">
    <img src={fb} alt="Facebook" className="w-12 h-12 transition-transform duration-300 ease-in-out hover:scale-110 hover:opacity-80" />
  </a>
  <a href="https://www.tiktok.com/@unswkpop" target="_blank" rel="noopener noreferrer">
    <img src={tiktok} alt="TikTok" className="w-12 h-12 transition-transform duration-300 ease-in-out hover:scale-110 hover:opacity-80" />
  </a>
  <a href="https://www.youtube.com/c/unswkpopsociety" target="_blank" rel="noopener noreferrer">
    <img src={yt} alt="Youtube" className="w-12 h-12 transition-transform duration-300 ease-in-out hover:scale-110 hover:opacity-80" />
  </a>
  <a href="https://discord.com/invite/kGz5kxpzCF" target="_blank" rel="noopener noreferrer">
    <img src={disc} alt="Discord" className="w-12 h-12 transition-transform duration-300 ease-in-out hover:scale-110 hover:opacity-80" />
  </a>
  <a href="https://open.spotify.com/user/316ivsboitfa3jbjvonn2cl2icwm?si=a1dbfce0714e4d0f" target="_blank" rel="noopener noreferrer">
    <img src={spotify} alt="Spotify" className="w-11 h-11 transition-transform duration-300 ease-in-out hover:scale-110 hover:opacity-80" />
  </a>
</div>

            </div>
              
            </div>
 
        </section>
      </section>

    </>
    )
}