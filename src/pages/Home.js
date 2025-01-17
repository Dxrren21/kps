import Klogo from "../components/KLogo"
import ButtonsMenu from "../components/ButtonsMenu"
import NoticeBoard from "../components/NoticeBoard"
import ScrollArrow from "../components/ScrollArrow"
import { useRef } from 'react'

export default function Home() {
    const noticeRef = useRef()
    return(
    <>
        <div className="App pt-[5%] w-screen h-screen flex flex-col">
          <Klogo />
          <ButtonsMenu />
          <ScrollArrow scrollToRef={noticeRef} />
        </div>
        <section ref={noticeRef} className="flex h-[100vh]">
            <div className="basis-1/4 relative">
              <div className="absolute rotate-90 pb-[80%] origin-left text-6xl font-extrabold">NOTICEBOARD</div>
            </div>
            <div className="basis-1/2">
              <NoticeBoard />
            </div>
            <div className="basis-1/4">
              c
            </div>
            
            
            {/* <NoticeBoard />
            <Mascot /> */}
          </section>
        
    </>
    )
}