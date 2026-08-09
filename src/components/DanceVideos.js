import { useRef } from "react"
import { danceVideos } from "../data/danceVideos"

// Pulls the video ID out of any standard YouTube URL shape so we can build
// a thumbnail URL and a clean watch link without needing extra fields.
function getYouTubeId(url) {
    try {
        const u = new URL(url)
        if (u.hostname.includes("youtu.be")) {
            return u.pathname.slice(1)
        }
        const v = u.searchParams.get("v")
        if (v) return v
        const shortsMatch = u.pathname.match(/\/shorts\/([^/?]+)/)
        if (shortsMatch) return shortsMatch[1]
    } catch (e) {
        return null
    }
    return null
}

export default function DanceVideos() {
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

    const videos = danceVideos
        .map((video) => ({ ...video, id: getYouTubeId(video.url) }))
        .filter((video) => video.id)

    if (videos.length === 0) {
        return null
    }

    return (
        <div
            ref={scrollRef}
            className="no-scrollbar w-full max-w-6xl mx-auto mt-10 flex gap-4 overflow-x-auto snap-x snap-mandatory cursor-grab select-none pb-2"
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={endDrag}
            onMouseLeave={endDrag}
        >
            {videos.map((video) => (
                <a
                    key={video.id}
                    href={video.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    draggable={false}
                    className="group snap-start shrink-0 w-[280px]"
                >
                    <div className="relative aspect-video rounded-2xl overflow-hidden shadow-md group-hover:shadow-lg transition-shadow bg-pastel-purple-light">
                        <img
                            src={`https://img.youtube.com/vi/${video.id}/hqdefault.jpg`}
                            alt={video.title}
                            draggable={false}
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-ink/0 group-hover:bg-ink/20 transition-colors flex items-center justify-center">
                            <div className="w-14 h-14 rounded-full bg-white/90 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                                <svg viewBox="0 0 24 24" className="w-6 h-6 text-ink ml-1" fill="currentColor">
                                    <path d="M8 5v14l11-7z" />
                                </svg>
                            </div>
                        </div>
                    </div>
                    <p className="mt-3 text-sm font-semibold text-ink leading-snug">{video.title}</p>
                </a>
            ))}
        </div>
    )
}