import { React } from "react";
import { Link } from "react-router-dom";


const Navbar = () => {
    return (
        <nav className="flex sticky items-center justify-between p-6 bg-blue-500">
            <div className="text-white text-xl">
            <Link to="/" className="hover:text-gray-300 flex flex-row h-fit">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 my-auto">
            <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
            </svg>
            <p className="px-3 my-auto">Home</p></Link>
            </div>
            <h1 className="text-white text-2xl font-bold">Project LZXKY</h1>
            <div className="flex space-x-4">
                <Link to="/about" className="text-white hover:text-gray-300">About</Link>
                <Link to="/login" className="text-white hover:text-gray-300">Login</Link>
            </div>
        </nav>
    );
};

export default Navbar;