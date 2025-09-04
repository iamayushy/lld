const Grid = ({element, handleClick}) => {
    return <div onClick={handleClick} role="button" className="border h-20 w-20
    text-4xl text-center flex justify-center items-center cursor-pointer
    hover:bg-gray-200
    ">
        {element}
    </div>;
}

export default Grid;