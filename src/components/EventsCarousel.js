import { useRef } from "react"
import { events } from "../data/events"

function EventRow({ category, items }) {
    const scrollRef = useRef(null)
    const isDraggingRef = useRef(false)
    const dragStartXRef = useRef(0)
    const dragStartScrollRef = useRef(0)

    const handleMouseDown = (e) => {
        isDraggingRef.current = true
        dragStartXRef.current = e.pageX
        dragStartScrollRef.current = scrollRef.current.scrollLeft
        scrollRef.current.style.cursor = "grabbing"
    }

    const handleMouseMove = (e) => {
        if (!isDraggingRef.current) return
        e.preventDefault()
        const dx = e.pageX - dragStartXRef.current
        scrollRef.current.scrollLeft = dragStartScrollRef.current - dx
    }

    const endDrag = () => {
        isDraggingRef.current = false
        if (scrollRef.current) scrollRef.current.style.cursor = "grab"
    }

    return (
        <div className="mb-14 last:mb-0">
            <h3 className="text-sm font-bold tracking-[0.2em] text-pastel-purple-dark mb-4">{category.toUpperCase()}</h3>

            <div
                ref={scrollRef}
                className="no-scrollbar flex gap-4 overflow-x-auto snap-x snap-mandatory cursor-grab select-none pb-2"
                onMouseDown={handleMouseDown}
                onMouseMove={handleMouseMove}
                onMouseUp={endDrag}
                onMouseLeave={endDrag}
            >
                {items.map((event, index) => (
                    <div key={index} className="snap-start shrink-0 w-[280px]">
                        <div className="relative w-[280px] h-[280px] rounded-2xl overflow-hidden shadow-md bg-pastel-purple-light">
                            {event.image && (
                                <img
                                    src={event.image}
                                    alt={event.title}
                                    draggable={false}
                                    className="w-full h-full object-cover"
                                />
                            )}
                            {event.tag && (
                                <span className="absolute top-3 left-3 px-3 py-1 rounded-full bg-ink text-white text-xs font-bold tracking-widest">
                                    {event.tag}
                                </span>
                            )}
                        </div>

                        <p className="mt-4 text-xs font-bold tracking-[0.15em] text-pastel-blue-dark">{event.date}</p>
                        <h3 className="mt-1 text-lg font-extrabold text-ink leading-snug">{event.title}</h3>

                        {event.facebookLink && (
                            <a
                                href={event.facebookLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="mt-2 inline-flex items-center gap-1 text-xs font-bold tracking-widest text-ink/60 hover:text-pastel-purple-dark transition-colors"
                            >
                                VIEW ON FACEBOOK ↗
                            </a>
                        )}
                    </div>
                ))}
            </div>
        </div>
    )
}

export default function EventsCarousel({ embedded = false }) {
    if (events.length === 0) {
        return null
    }

    // Group events by category, preserving first-seen order of categories
    // and the order events were listed within each category.
    const categories = []
    const grouped = {}
    events.forEach((event) => {
        const category = event.category || "Events"
        if (!grouped[category]) {
            grouped[category] = []
            categories.push(category)
        }
        grouped[category].push(event)
    })

    return (
        <section className={embedded ? "w-full" : "w-full bg-white py-16 px-6"}>
            {embedded ? (
                <h3 className="text-3xl md:text-4xl font-extrabold text-ink mb-8">Explore Our Events.</h3>
            ) : (
                <div className="max-w-6xl mx-auto mb-10">
                    <h2 className="text-sm font-bold tracking-[0.2em] text-pastel-blue-dark">PAST HIGHLIGHTS</h2>
                    <h1 className="mt-2 text-3xl md:text-5xl font-extrabold text-ink">Explore Our Events.</h1>
                </div>
            )}

            <div className={embedded ? "" : "max-w-6xl mx-auto"}>
                {categories.map((category) => (
                    <EventRow key={category} category={category} items={grouped[category]} />
                ))}
            </div>
        </section>
    )
}
