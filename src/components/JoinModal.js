import boy from "../assets/boy.png"

export default function JoinModal() {
    return (
        <div className="group relative w-[500px] h-[120px] max-md:w-[80%]">

            <a href="https://campus.hellorubric.com/?eid=70845" target="_blank" rel="noopener noreferrer">
                <button
                    type="button"
                    className="w-full h-full text-white bg-gradient-to-r from-pastel-blue-dark via-pastel-pink-dark to-pastel-purple-dark hover:shadow-lg hover:scale-[1.02] transition-all font-bold rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 shadow-md"
                >
                    <span className="text-xl">
                        Join as a Member
                    </span>
                </button>
            </a>

            <img src={boy} alt="" className="absolute top-[-35%] right-0 w-[80px] h-[80px] object-contain opacity-0 group-hover:opacity-100 transition-opacity duration-150 pointer-events-none z-10" />
        </div>
    )
}
