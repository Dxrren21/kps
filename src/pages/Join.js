import { useState } from "react"
import Footer from "../components/Footer"
import boy from "../assets/boy.png"
import girl from "../assets/girl.png"
import ig from "../assets/ig.svg"
import fb from "../assets/fb.svg"
import tiktok from "../assets/tiktok.svg"
import discord from "../assets/discord.svg"
import youtube from "../assets/youtube.svg"
import spotify from "../assets/spotify.svg"

const RUBRIC_URL = "https://campus.hellorubric.com/?eid=70845"

// "Get in touch" contact rows, styled after the DigiSoc reference card list
const contactRows = [
    {
        label: "Find Us on Rubric",
        sub: "Membership sign-up & event tickets",
        href: RUBRIC_URL,
        icon: (
            <div className="w-11 h-11 rounded-lg bg-gradient-to-br from-pastel-pink-dark to-pastel-purple-dark flex items-center justify-center text-white font-bold text-xs shrink-0">
                Rubric
            </div>
        ),
    },
    {
        label: "Instagram",
        sub: "@unswkpop",
        href: "https://www.instagram.com/unswkpop/",
        icon: <img src={ig} alt="" className="w-11 h-11 object-contain" />,
    },
    {
        label: "Facebook",
        sub: "UNSW Kpop Society",
        href: "https://www.facebook.com/unswkpop/",
        icon: <img src={fb} alt="" className="w-11 h-11 object-contain" />,
    },
    {
        label: "TikTok",
        sub: "@unswkpop",
        href: "https://www.tiktok.com/@unswkpop",
        icon: <img src={tiktok} alt="" className="w-11 h-11 object-contain" />,
    },
    {
        label: "Discord",
        sub: "Chat with the community",
        href: "https://discord.com/invite/kGz5kxpzCF",
        icon: <img src={discord} alt="" className="w-11 h-11 object-contain" />,
    },
    {
        label: "YouTube",
        sub: "UNSW Kpop Society",
        href: "https://www.youtube.com/c/unswkpopsociety",
        icon: <img src={youtube} alt="" className="w-11 h-11 object-contain" />,
    },
    {
        label: "Spotify",
        sub: "Our playlists",
        href: "https://open.spotify.com/user/316ivsboitfa3jbjvonn2cl2icwm?si=a1dbfce0714e4d0f",
        icon: <img src={spotify} alt="" className="w-11 h-11 object-contain" />,
    },
    {
        label: "Email",
        sub: "exec.unswkpop@gmail.com",
        href: "mailto:exec.unswkpop@gmail.com",
        icon: (
            <div className="w-11 h-11 rounded-lg bg-pastel-blue-light flex items-center justify-center shrink-0">
                <svg viewBox="0 0 24 24" className="w-6 h-6 text-pastel-blue-dark" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="3" y="5" width="18" height="14" rx="2" />
                    <path d="M3 7l9 6 9-6" />
                </svg>
            </div>
        ),
    },
]

export default function Join() {
    const [hoveredMembership, setHoveredMembership] = useState(null)

    return (
        <>
            {/* HERO */}
            <section className="w-full flex flex-col items-center bg-pastel-hero px-6 pt-[110px] pb-16 text-center">
                <h2 className="text-sm font-bold tracking-[0.2em] text-pastel-purple-dark">JOIN THE FAM</h2>
                <h1 className="mt-2 text-4xl md:text-5xl font-extrabold text-ink">Join the Community</h1>
                <p className="mt-6 max-w-2xl text-ink/70 text-base md:text-lg">
                    Whether you're a first-year discovering K-pop or a long-time stan ready to dance it out,
                    KPOP SOCIETY has a place for you. Follow us on socials, come to our events, and become part of
                    UNSW's home for all things K-pop.
                </p>
            </section>

            {/* HOW TO JOIN */}
            <section className="w-full bg-white py-20 px-6">
                <div className="text-center mb-12">
                    <h2 className="text-sm font-bold tracking-[0.2em] text-pastel-blue-dark">MEMBERSHIP</h2>
                    <h1 className="mt-2 text-3xl md:text-4xl font-extrabold text-ink">How to Join</h1>
                    <p className="mt-4 max-w-2xl mx-auto text-ink/70">
                        Membership runs through Rubric, and you'll be asked whether you're an Arc member
                        or not, the price adjusts automatically depending on which you choose.
                    </p>
                </div>

                <div className="flex flex-wrap justify-center gap-6 max-w-4xl mx-auto">
                    {/* ARC MEMBER */}
                    <div
                        className="group relative flex-1 min-w-[260px] max-w-sm bg-pastel-soft rounded-3xl p-8 border border-pastel-purple-light shadow-sm hover:shadow-md transition-shadow"
                        onMouseEnter={() => setHoveredMembership("arc")}
                        onMouseLeave={() => setHoveredMembership(null)}
                    >
                        <h3 className="text-xl font-bold text-ink">Arc Members</h3>
                        <p className="mt-3 text-ink/70 text-sm leading-relaxed">
                            Already an Arc member? Select the Arc member option on Rubric to sign up at the
                            discounted Arc rate.
                        </p>
                        <a href={RUBRIC_URL} target="_blank" rel="noopener noreferrer">
                            <button
                                type="button"
                                className="mt-6 w-full text-white bg-gradient-to-r from-pastel-blue-dark via-pastel-pink-dark to-pastel-purple-dark hover:shadow-lg hover:scale-[1.02] transition-all font-semibold rounded-full text-sm px-5 py-3"
                            >
                                Sign Up via Rubric
                            </button>
                        </a>
                        <img
                            src={boy}
                            alt=""
                            className={`absolute top-0 right-6 -translate-y-[60%] w-[70px] h-[70px] object-contain pointer-events-none z-10 transition-opacity duration-150 ${hoveredMembership === "arc" ? "opacity-100" : "opacity-0"}`}
                        />
                    </div>

                    {/* NON-ARC MEMBER */}
                    <div
                        className="group relative flex-1 min-w-[260px] max-w-sm bg-pastel-soft rounded-3xl p-8 border border-pastel-purple-light shadow-sm hover:shadow-md transition-shadow"
                        onMouseEnter={() => setHoveredMembership("nonArc")}
                        onMouseLeave={() => setHoveredMembership(null)}
                    >
                        <h3 className="text-xl font-bold text-ink">Non-Arc Members</h3>
                        <p className="mt-3 text-ink/70 text-sm leading-relaxed">
                            Not an Arc member? No worries. You can still join! Select the non-Arc option on
                            Rubric to sign up at the standard rate.
                        </p>
                        <a href={RUBRIC_URL} target="_blank" rel="noopener noreferrer">
                            <button
                                type="button"
                                className="mt-6 w-full text-pastel-purple-dark bg-white border-2 border-pastel-purple-light hover:border-pastel-purple-dark font-semibold rounded-full text-sm px-5 py-3 transition-colors"
                            >
                                Sign Up via Rubric
                            </button>
                        </a>
                        <img
                            src={girl}
                            alt=""
                            className={`absolute top-0 right-6 -translate-y-[60%] -translate-x-4 w-[70px] h-[70px] object-contain pointer-events-none z-10 transition-opacity duration-150 ${hoveredMembership === "nonArc" ? "opacity-100" : "opacity-0"}`}
                        />
                    </div>
                </div>

                <p className="mt-10 text-center text-ink/60 text-sm max-w-xl mx-auto">
                    🎟️ Tickets for our socials, workshops, and comebacks are also sold through Rubric.
                    Follow our Instagram so you don't miss a ticket drop!
                </p>
            </section>

            {/* GET IN TOUCH */}
            <section className="w-full bg-pastel-soft py-20 px-6">
                <div className="max-w-3xl mx-auto">
                    <div className="mb-10">
                        <h2 className="text-sm font-bold tracking-[0.2em] text-pastel-pink-dark">STAY CONNECTED</h2>
                        <h1 className="mt-2 text-3xl md:text-4xl font-extrabold text-ink">Get in Touch</h1>
                        <p className="mt-4 text-ink/70">
                            Have a question or just want to say hi? Reach out through any of our channels below.
                        </p>
                    </div>

                    <div className="flex flex-col rounded-2xl overflow-hidden border border-pastel-purple-light bg-white shadow-sm">
                        {contactRows.map((row, index) => (
                            <a
                                key={row.label}
                                href={row.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`flex items-center gap-4 px-6 py-5 hover:bg-pastel-purple-light/30 transition-colors ${index !== contactRows.length - 1 ? "border-b border-pastel-purple-light" : ""}`}
                            >
                                {row.icon}
                                <div>
                                    <p className="font-bold text-ink">{row.label}</p>
                                    <p className="text-ink/70 text-sm">{row.sub}</p>
                                </div>
                            </a>
                        ))}
                    </div>
                </div>
            </section>

            <Footer />
        </>
    )
}