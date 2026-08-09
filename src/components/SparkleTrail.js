import { useEffect, useRef, useState } from "react"

// Pastel palette pulled from tailwind.config.js so the sparkles match the site
const COLORS = ["#5FB8D6", "#E88EAF", "#A97FDB"]

// Two simple shapes: a 4-point sparkle and a 5-point star, alternated at random
const SHAPES = [
    // sparkle / diamond-star
    "M12 0 C12.8 6.5 13.5 7.2 20 8 C13.5 8.8 12.8 9.5 12 16 C11.2 9.5 10.5 8.8 4 8 C10.5 7.2 11.2 6.5 12 0 Z",
    // 5-point star
    "M12 1 L14.7 8.6 L22.8 8.9 L16.4 13.9 L18.7 21.7 L12 17.1 L5.3 21.7 L7.6 13.9 L1.2 8.9 L9.3 8.6 Z",
]

let idCounter = 0

export default function SparkleTrail() {
    const [sparkles, setSparkles] = useState([])
    const lastSpawnRef = useRef(0)

    useEffect(() => {
        // Respect users who've asked for reduced motion
        if (window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
            return
        }

        const handleMouseMove = (e) => {
            const now = Date.now()
            // Throttle so we spawn a sparkle roughly every 50ms rather than on every pixel
            if (now - lastSpawnRef.current < 50) return
            lastSpawnRef.current = now

            const id = idCounter++
            const sparkle = {
                id,
                x: e.clientX + (Math.random() * 16 - 8),
                y: e.clientY + (Math.random() * 16 - 8),
                size: 10 + Math.random() * 10,
                color: COLORS[Math.floor(Math.random() * COLORS.length)],
                shape: SHAPES[Math.floor(Math.random() * SHAPES.length)],
                rotation: Math.random() * 360,
                drift: Math.random() * 24 - 12,
            }

            setSparkles((prev) => [...prev, sparkle])

            // Clean up this sparkle once its fade/shrink animation has finished
            setTimeout(() => {
                setSparkles((prev) => prev.filter((s) => s.id !== id))
            }, 700)
        }

        window.addEventListener("mousemove", handleMouseMove)
        return () => window.removeEventListener("mousemove", handleMouseMove)
    }, [])

    return (
        <div className="pointer-events-none fixed inset-0 z-[9999] overflow-hidden">
            {sparkles.map((s) => (
                <svg
                    key={s.id}
                    className="sparkle-particle absolute"
                    style={{
                        left: s.x,
                        top: s.y,
                        width: s.size,
                        height: s.size,
                        "--drift": `${s.drift}px`,
                        "--r": `${s.rotation}deg`,
                        transform: `translate(-50%, -50%) rotate(${s.rotation}deg)`,
                    }}
                    viewBox="0 0 24 24"
                    fill={s.color}
                >
                    <path d={s.shape} />
                </svg>
            ))}
        </div>
    )
}
