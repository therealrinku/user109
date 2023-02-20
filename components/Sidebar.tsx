import {FiHome} from "react-icons/fi"

export default function Sidebar(){
    return (
        <div className="bg-black w-32 h-screen flex flex-column items-start justify-center pt-20">
            <button className="text-white text-lg"><FiHome/></button>
        </div>
    )
}