export default function Profile({name, link, role, ig}) {

    return (
        <div 
            className="max-md:w-[100px] max-md:h-[130px] max-md:m-5 max-lg:w-[150px] max-lg:h-[180px] max-lg:m-6 xl:m-6 w-[200px] h-[250px] bg-white border border-[5px] border-purple-100 shadow-3xl rounded relative md:m-10">
            <a href={`https://www.instagram.com/${ig}`} target="_blank" rel="noopener noreferrer">
                <img 
                    src={`/assets/${link}`} 
                    className="w-full h-full object-cover transition-all duration-300 hover:opacity-70" 
                    alt={name}
                />
            
                <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-all duration-300 flex justify-center items-center flex-col">
                    <p className="text-white font-semibold">{role}</p>
                    {ig && (
                    <span className="text-white mt-2 max-md:text-sm text-center">
                        @{ig}
                    </span>
                    )}
                </div>
            </a>
            <h3 className="text-xl text-gray-800 font-semibold text-center pt-3 max-md:text-sm">{name}</h3>
            
        </div>
    )
}