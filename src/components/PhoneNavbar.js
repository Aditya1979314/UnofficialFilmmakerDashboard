import { Link } from "react-router";


export function PhoneNavbar(){

    return (
        <div className="text-black w-1/2 bg-white flex flex-col pt-16 items-center absolute top-0 left-0 h-full shadow-md">
            <div className="h-1/5 flex flex-col justify-around items-center">
            <Link to={'/'} className="text-lg font-semibold">Home</Link>
            <Link to={'/works'} className="text-lg font-semibold">Works</Link>
            </div>
        </div>
    )
}