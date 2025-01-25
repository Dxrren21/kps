import Klogo from "../components/KLogo"
import ButtonsMenu from "../components/ButtonsMenu"
import NoticeBoard from "../components/NoticeBoard"
import ScrollArrow from "../components/ScrollArrow"
import { useRef } from 'react'
import ig from "../assets/ig.svg"
import fb from "../assets/fb.svg"
import tiktok from "../assets/tiktok.svg"

export default function Home() {
    const noticeRef = useRef()
    return(
    <>
      <section className="w-[100vw] h-[200vh] overflow-x-hidden">
        <section className="w-full h-screen pt-[5%] flex flex-col overflow-x-hidden space-y-12 bg-logobg bg-cover bg-center box-border">
          <Klogo />
          <ButtonsMenu />
          <ScrollArrow scrollToRef={noticeRef} />
        </section>
          <section 
            ref={noticeRef} 
            className="flex h-[100vh] font-sans bg-home bg-cover bg-center"
          >
            <div className="basis-1/4 relative bottom-[10%]">
              <div className="absolute rotate-90 pb-[100%] origin-left text-6xl font-extrabold text-gray-800">NOTICEBOARD</div>
            </div>
            <div className="basis-1/2">
              <NoticeBoard />
            </div>
            <div className="basis-1/4 relative">
              <div className="absolute bottom-10 left-10">
                <h1 className="text-4xl font-extrabold text-gray-800" >Our Socials</h1>
                <div className="flex gap-4 pt-5">
                  <a href="https://www.instagram.com/unswkpop/">
                      <img src={ig} alt="Instagram" className="w-12 h-12" />
                  </a>
                  <a href="https://www.facebook.com/unswkpop/">
                      <img src={fb} alt="Facebook" className="w-12 h-12" />
                  </a>
                  <a href="https://www.tiktok.com/@unswkpop">
                      <img src={tiktok} alt="TikTok" className="w-12 h-12" />
                  </a>
                </div>
              </div>
              
            </div>
            
            
            {/* <NoticeBoard />
            <Mascot /> */}
        </section>
      </section>
    </>
    )
}