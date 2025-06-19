export default function ScrollArrow({ scrollToRef }) {
    const handleScroll = () => {
      if (scrollToRef?.current) {
        scrollToRef.current.scrollIntoView({ behavior: "smooth" });
      }
    };
  
    return (

      <button className="bg-transparent border-none cursor-pointer flex justify-center shadow-none" onClick={handleScroll}>
          <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-6 h-6 text-purple-500 animate-bounce"
          fill="none"
          viewBox="0 0 20 18"
          stroke="currentColor"
          strokeWidth="2"
          >
          <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19 9l-7 7-7-7"
          />
          </svg>
      </button>

    );
  }