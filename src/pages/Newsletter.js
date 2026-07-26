import Footer from "../components/Footer"

export default function Newsletter() {
    return (
        <>
            <section className="w-full flex flex-col items-center bg-pastel-hero px-6 pt-[110px] pb-16">
                <h2 className="text-sm font-bold tracking-[0.2em] text-pastel-purple-dark text-center">STAY CONNECTED</h2>
                <h1 className="mt-2 text-4xl md:text-5xl text-center font-extrabold text-ink">Newsletter</h1>

                <div className="flex justify-center flex-wrap p-8 gap-5">
                    <a href="https://weebly.us4.list-manage.com/subscribe?u=4a561cb09634b5f8d81ef6371&id=f934d5fe68" target="_blank" rel="noopener noreferrer">
                        <button type="button" className="w-[260px] h-[64px] text-white bg-gradient-to-r from-pastel-blue-dark via-pastel-pink-dark to-pastel-purple-dark font-semibold rounded-full text-sm px-5 py-2.5 text-center shadow-md hover:shadow-lg hover:scale-105 transition-all">
                            Subscribe to Our Newsletter
                        </button>
                    </a>
                    <a href="https://tellonym.me/unswkpop" target="_blank" rel="noopener noreferrer">
                        <button type="button" className="w-[260px] h-[64px] bg-white text-pastel-pink-dark border-2 border-pastel-purple-light hover:border-pastel-purple-dark font-semibold rounded-full text-sm px-5 py-2.5 text-center transition-colors">
                            Send us a Tellonym
                        </button>
                    </a>
                    <a href="https://drive.google.com/drive/folders/1TuGK6EO7TXirLFM9ZyB8s6X8CoQHH2Cd?usp=sharing" target="_blank" rel="noopener noreferrer">
                        <button type="button" className="w-[260px] h-[64px] bg-white text-pastel-blue-dark border-2 border-pastel-purple-light hover:border-pastel-purple-dark font-semibold rounded-full text-sm px-5 py-2.5 text-center transition-colors">
                            2025 Newsletter Archive
                        </button>
                    </a>
                </div>
            </section>

            <section className="w-full bg-pastel-soft py-16 px-6 flex flex-col items-center">
                <h2 className="text-sm font-bold tracking-[0.2em] text-pastel-blue-dark">GET MOVING</h2>
                <h1 className="mt-2 text-3xl md:text-4xl font-extrabold text-ink">Dance</h1>

                <a
                    className="mt-8"
                    href="https://weebly.us4.list-manage.com/subscribe?u=4a561cb09634b5f8d81ef6371&id=f934d5fe68"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <button type="button" className="w-[260px] h-[64px] bg-white text-pastel-blue-dark border-2 border-pastel-purple-light hover:border-pastel-purple-dark font-semibold rounded-full text-sm px-5 py-2.5 text-center transition-colors">
                        Dance Workshop Videos
                    </button>
                </a>
            </section>

            <Footer />
        </>
    )
}
