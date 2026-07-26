import Klogo from "../components/KLogo"
import NoticeBoard from "../components/NoticeBoard"
import ScrollArrow from "../components/ScrollArrow"
import SponsorMarquee from "../components/SponsorMarquee"
import { useRef } from 'react'
import ig from "../assets/ig.svg"
import fb from "../assets/fb.svg"
import tiktok from "../assets/tiktok.svg"
import yt from "../assets/youtube.svg"
import disc from "../assets/discord.svg"
import { useEffect } from "react"
import { useLocation, useNavigate } from "react-router"
import spotify from "../assets/spotify.svg"

export default function Home() {
    const noticeRef = useRef()
    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
      if (location.state?.scrollToNotices) {
        noticeRef.current?.scrollIntoView({ behavior: "smooth" });
      }
    }, [location]);

    return(
    <>
      <section className="w-full min-h-screen overflow-x-hidden">

        {/* HERO */}
        <section className="relative w-full min-h-screen flex flex-col items-center justify-center overflow-x-hidden bg-pastel-hero px-6 md:pt-[76px]">
          <div className="absolute inset-0 bg-white/10 pointer-events-none"></div>

          <div className="relative z-10 flex flex-col items-center text-center pt-16 md:pt-10">
            <Klogo />

            <h1 className="mt-6 text-3xl md:text-5xl font-extrabold text-ink tracking-tight max-w-3xl">
              WHERE KPOP FANS BECOME FAMILY.
            </h1>
            <p className="mt-4 max-w-xl text-ink/70 text-base md:text-lg">
              UNSW's home for all things K-pop &mdash; dance covers, socials, comebacks,
              and a community that gets just as hyped as you do.
            </p>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <button
                onClick={() => navigate("/about", { state: { scrollToJoin: true } })}
                className="px-8 py-3 rounded-full text-base font-semibold text-white bg-gradient-to-r from-pastel-blue-dark via-pastel-pink-dark to-pastel-purple-dark shadow-md hover:shadow-lg hover:scale-105 transition-all"
              >
                BECOME A MEMBER
              </button>
              <button
                onClick={() => noticeRef.current?.scrollIntoView({ behavior: "smooth" })}
                className="px-8 py-3 rounded-full text-base font-semibold text-ink bg-white/80 border border-pastel-purple-dark/30 shadow-sm hover:bg-white hover:shadow-md transition-all"
              >
                LATEST NOTICES
              </button>
            </div>
          </div>

          <div className="relative z-10 mt-14">
            <ScrollArrow scrollToRef={noticeRef} />
          </div>
        </section>

        {/* SPONSORS / AFFILIATIONS */}
        <section className="w-full bg-white py-14 px-6">
          <div className="text-center mb-2">
            <h2 className="text-sm font-bold tracking-[0.2em] text-pastel-purple-dark">OUR SPONSORS</h2>
            <h3 className="text-2xl md:text-3xl font-extrabold text-ink mt-2">Supported by our favourite spots.</h3>
          </div>
          <SponsorMarquee />
        </section>

        {/* NOTICEBOARD / HIGHLIGHTS */}
        <section
            ref={noticeRef}
            className="w-full bg-pastel-soft py-20 px-6 md:px-16"
        >
          <div className="max-w-6xl mx-auto md:flex md:gap-16">
            <div className="md:basis-1/3 max-md:text-center mb-10 md:mb-0">
              <h2 className="text-sm font-bold tracking-[0.2em] text-pastel-blue-dark">GET INVOLVED</h2>
              <h3 className="text-3xl md:text-4xl font-extrabold text-ink mt-2">Noticeboard.</h3>
              <p className="mt-4 text-ink/70">
                Everything you need to sign up, get involved, and stay in the loop with KPS.
              </p>
            </div>
            <div className="md:basis-2/3">
              <NoticeBoard />
            </div>
          </div>
        </section>

        {/* SOCIALS / CLOSING BANNER */}
        <section className="w-full bg-white py-16 px-6 text-center">
          <h2 className="text-2xl md:text-3xl font-extrabold text-ink">Want to stay up to date?</h2>
          <p className="mt-2 text-ink/70">Follow along for comebacks, socials, and everything KPS.</p>
          <div className="grid gap-6 pt-8 grid-cols-3 md:grid-cols-6 max-w-xl mx-auto">
            <a href="https://www.instagram.com/unswkpop/" target="_blank" rel="noopener noreferrer">
              <img src={ig} alt="Instagram" className="w-12 h-12 mx-auto transition-transform duration-300 ease-in-out hover:scale-110 hover:opacity-80" />
            </a>
            <a href="https://www.facebook.com/unswkpop/" target="_blank" rel="noopener noreferrer">
              <img src={fb} alt="Facebook" className="w-12 h-12 mx-auto transition-transform duration-300 ease-in-out hover:scale-110 hover:opacity-80" />
            </a>
            <a href="https://www.tiktok.com/@unswkpop" target="_blank" rel="noopener noreferrer">
              <img src={tiktok} alt="TikTok" className="w-12 h-12 mx-auto transition-transform duration-300 ease-in-out hover:scale-110 hover:opacity-80" />
            </a>
            <a href="https://www.youtube.com/c/unswkpopsociety" target="_blank" rel="noopener noreferrer">
              <img src={yt} alt="Youtube" className="w-12 h-12 mx-auto transition-transform duration-300 ease-in-out hover:scale-110 hover:opacity-80" />
            </a>
            <a href="https://discord.com/invite/kGz5kxpzCF" target="_blank" rel="noopener noreferrer">
              <img src={disc} alt="Discord" className="w-12 h-12 mx-auto transition-transform duration-300 ease-in-out hover:scale-110 hover:opacity-80" />
            </a>
            <a href="https://open.spotify.com/user/316ivsboitfa3jbjvonn2cl2icwm?si=a1dbfce0714e4d0f" target="_blank" rel="noopener noreferrer">
              <img src={spotify} alt="Spotify" className="w-11 h-11 mx-auto transition-transform duration-300 ease-in-out hover:scale-110 hover:opacity-80" />
            </a>
          </div>
        </section>

      </section>
    </>
    )
}
