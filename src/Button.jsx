function Button({text, onClick}) {
    return(
        <>
            <button className="bg-emerald-500 hover:bg-emerald-700  hover:cursor-pointer active:scale-95 transition-all 
            duration-300 ease-in-out text-white px-6 py-2 mb-4 rounded-lg font-bold"
            onClick={onClick}
            >
                {text}
            </button>
        </>
    );
}

export default Button