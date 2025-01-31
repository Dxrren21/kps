export default function Profile({name, link, role, ig}) {

    return (
        <div className="w-[200px] h-[250px] bg-white border border-2 border-black shadow-3xl rounded relative">
            <a href={`https://www.instagram.com/${ig}`} target="_blank" rel="noopener noreferrer">
                <img 
                    src={`/assets/${link}`} 
                    className="w-full h-full object-cover transition-all duration-300 hover:opacity-70" 
                    alt={name}
                />
            
                <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-all duration-300 flex justify-center items-center flex-col">
                    <p className="text-white font-semibold">{role}</p>
                    {ig && (
                    <span className="text-white mt-2">
                        @{ig}
                    </span>
                    )}
                </div>
            </a>
            <h3 className="text-lg font-semibold text-center pt-3">{name}</h3>
            
        </div>
    )
}