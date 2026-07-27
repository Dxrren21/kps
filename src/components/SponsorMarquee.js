import { useEffect, useRef } from "react"
import nihao from "../assets/sponsors2026/nhb.jpg"
import kkini from "../assets/sponsors2026/kkini.png"
import gong from "../assets/sponsors2026/gonggrocer.png"
import freshhot from "../assets/sponsors2026/fnh.png"
import kaokao from "../assets/sponsors2026/kaokao.png"
import tigerpocha from "../assets/sponsors2026/tiger.png"
import chaffic from "../assets/sponsors2026/chaffic.png"
import squidpocha from "../assets/sponsors2026/squid.png"
import strawberrybear from "../assets/sponsors2026/sbear.PNG"
import ultbias from "../assets/sponsors2026/ultbias.png"
import iheartkpop from "../assets/sponsors2026/iheart.png"
import kinetic from "../assets/sponsors2026/kinetic.png"
import crossover from "../assets/sponsors2026/crossover.png"
import ix from "../assets/sponsors2026/ix.png"

const sponsors = [
    { name: "Ni Hao Bar & Dining", logo: nihao, offer: "10% off full price items at Nihao Bar, Kowloon Cafe, Oh My Yo, Master Cow, Ace Night Club, The Pump Gym Chatswood & Dirty Red Fish Markets" },
    { name: "KKINI", logo: kkini, offer: "An exclusive discount offered to all members" },
    { name: "Gong Grocer", logo: gong, offer: "5% off all groceries upon signing up for their loyalty program" },
    { name: "Fresh & Hot (Má Là Tàng)", logo: freshhot, offer: "An exclusive discount offered to all members" },
    { name: "Kao Kao", logo: kaokao, offer: "20% off all menu items" },
    { name: "Tiger Pocha", logo: tigerpocha, offer: "10% discount on total bill" },
    { name: "Chaffic", logo: chaffic, offer: "10% off all menu items on weekdays (no public holidays)" },
    { name: "Squid Pocha", logo: squidpocha, offer: "10% discount on total bill" },
    { name: "Strawberry Bear", logo: strawberrybear, offer: "5% off all items" },
    { name: "Ult Bias", logo: ultbias, offer: "10% off all items with code 'UNSWUB10'" },
    { name: "I Heart Kpop", logo: iheartkpop, offer: "10% discount on all items" },
    { name: "Kinetic Studio", logo: kinetic, offer: "15% off classes, 10% off studio hire" },
    { name: "Crossover Dance Studio", logo: crossover, offer: "15% off classes" },
    { name: "IX", logo: ix, offer: "Student discount on class passes" },
]

// Render the list twice back-to-back so the auto-scroll can loop seamlessly
const doubledSponsors = [...sponsors, ...sponsors]

export default function SponsorMarquee() {
    const scrollRef = useRef(null)
    const isDraggingRef = useRef(false)
    const dragStartXRef = useRef(0)
    const dragStartScrollRef = useRef(0)
    const lastInteractionRef = useRef(0)

    useEffect(() => {
        const el = scrollRef.current
        if (!el) return
        let rafId

        const tick = () => {
            const idle = Date.now() - lastInteractionRef.current > 800
            if (!isDraggingRef.current && idle) {
                const singleSetWidth = el.scrollWidth / 2
                el.scrollLeft += 0.6
                if (el.scrollLeft >= singleSetWidth) {
                    el.scrollLeft -= singleSetWidth
                }
            }
            rafId = requestAnimationFrame(tick)
        }
        rafId = requestAnimationFrame(tick)
        return () => cancelAnimationFrame(rafId)
    }, [])

    const wrapScroll = () => {
        const el = scrollRef.current
        if (!el) return
        const singleSetWidth = el.scrollWidth / 2
        if (el.scrollLeft >= singleSetWidth) el.scrollLeft -= singleSetWidth
        else if (el.scrollLeft < 0) el.scrollLeft += singleSetWidth
    }

    const handleMouseDown = (e) => {
        isDraggingRef.current = true
        lastInteractionRef.current = Date.now()
        dragStartXRef.current = e.pageX
        dragStartScrollRef.current = scrollRef.current.scrollLeft
        scrollRef.current.style.cursor = "grabbing"
    }

    const handleMouseMove = (e) => {
        if (!isDraggingRef.current) return
        e.preventDefault()
        const dx = e.pageX - dragStartXRef.current
        scrollRef.current.scrollLeft = dragStartScrollRef.current - dx
        lastInteractionRef.current = Date.now()
    }

    const endDrag = () => {
        if (!isDraggingRef.current) return
        isDraggingRef.current = false
        lastInteractionRef.current = Date.now()
        if (scrollRef.current) scrollRef.current.style.cursor = "grab"
    }

    const registerInteraction = () => {
        lastInteractionRef.current = Date.now()
    }

    return (
        <div className="w-full h-full overflow-hidden">
            <div
                ref={scrollRef}
                className="no-scrollbar w-full h-full bg-ink mt-[3%] flex items-center pt-10 pb-10 mb-10 overflow-x-auto cursor-grab select-none relative"
                onMouseDown={handleMouseDown}
                onMouseMove={handleMouseMove}
                onMouseUp={endDrag}
                onMouseLeave={endDrag}
                onTouchStart={registerInteraction}
                onWheel={registerInteraction}
                onScroll={wrapScroll}
            >
                <div className="absolute top-[-30px] left-0 w-full h-[20px] bg-repeat-x bg-film"></div>
                <div className="flex gap-4 h-full">
                    {doubledSponsors.map((sponsor, index) => (
                        <div
                            key={index}
                            className="flex flex-col items-center justify-start pt-12 p-4 w-[300px] h-[350px] bg-white ml-5 max-md:w-[200px] max-md:h-[250px] shrink-0"
                        >
                            <img
                                src={sponsor.logo}
                                alt={`${sponsor.name} logo`}
                                draggable={false}
                                className="h-[100px] object-contain max-md:h-[80px]"
                            />
                            <span className="text-lg pt-4 font-semibold text-gray-700 text-center max-md:text-base">{sponsor.name}</span>
                            <span className="text-sm pt-2 text-gray-500 text-center leading-snug max-md:text-xs">{sponsor.offer}</span>
                        </div>
                    ))}
                </div>
                <div className="absolute bottom-[-30px] left-0 w-full h-[20px] bg-repeat-x bg-film"></div>
            </div>
        </div>
    )
}
