import { Link } from "react-router-dom";



export function Navbar(){
    return (
        <div className="bg-sky-400 flex justify-end lg:justify-between items-center px-4 py-2 text-white">
            <p className="text-xl font-bold">UnofficialFilmmaker</p>
            <div className="w-1/3 flex justify-between items-center hidden lg:block">
               <Link to={'/'}>Home</Link>
               <Link to={'/works'}>Works</Link>
            </div>
        </div>
    )
}