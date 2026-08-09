import { galleryPhotos } from "../data/gallery"

export default function TimeCapsuleGallery() {
    if (galleryPhotos.length === 0) {
        return null
    }

    return (
        <section className="w-full bg-white py-20 px-6">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-12">
                    <h2 className="text-sm font-bold tracking-[0.2em] text-pastel-pink-dark">MEMORY LANE</h2>
                    <h1 className="mt-2 text-3xl md:text-4xl font-extrabold text-ink">Time Capsule</h1>
                    <p className="mt-4 text-ink/70 max-w-xl mx-auto">
                        Highlights from our events, workshops, and community moments.
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {galleryPhotos.map((photo, index) => (
                        <div
                            key={index}
                            className="aspect-[4/3] rounded-2xl overflow-hidden shadow-md hover:shadow-lg hover:scale-[1.02] transition-all"
                        >
                            <img
                                src={photo.src}
                                alt={photo.alt}
                                className="w-full h-full object-cover"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}