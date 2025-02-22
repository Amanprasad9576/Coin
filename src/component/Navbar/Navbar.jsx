import { useState } from "react";
import currencyStore from '../../state/store';
import { useNavigate } from "react-router-dom";

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);   
    const { setCurrency } = currencyStore();
    const navigate = useNavigate();

    function goToHome() {
        navigate('/');
    }

    return (
        <div className="navbar bg-base-100 flex items-center justify-between w-full px-4 py-2 shadow-md">
            {/* Left Side (Dropdown) */}
            <div className="navbar-start">
                <div className="dropdown relative">
                    <button 
                        onClick={() => setIsOpen(!isOpen)}
                        className="btn btn-ghost btn-circle"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" />
                        </svg>
                    </button>
                    
                    {/* Dropdown Content */}
                    {isOpen && (
                        <ul className="absolute left-0 mt-2 w-52 rounded-md bg-white shadow-lg z-50">
                            <li className="p-2 hover:bg-gray-100 cursor-pointer">
                                <button onClick={() => setCurrency('inr')} className="block w-full text-left">
                                    INR
                                </button>
                            </li>
                            <li className="p-2 hover:bg-gray-100 cursor-pointer">
                                <button onClick={() => setCurrency('usd')} className="block w-full text-left">
                                    USD
                                </button>
                            </li>
                        </ul>
                    )}
                </div>
            </div>

            {/* Center (Title) */}
            <div onClick={goToHome} className="navbar-center flex-grow text-center">
                <a className="btn btn-ghost text-xl cursor-pointer">Crypto Tracker</a>
            </div>

            {/* Right Side (Icons) */}
            <div className="navbar-end flex items-center gap-4">
                <button className="btn btn-ghost btn-circle">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                </button>
                <button className="btn btn-ghost btn-circle relative">
                    <div className="indicator">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                        </svg>
                        <span className="badge badge-xs badge-primary indicator-item"></span>
                    </div>
                </button>
            </div>
        </div>
    );
}

export default Navbar;






  //<a href="#">INR</a>