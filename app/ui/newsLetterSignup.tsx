'use client';

import { FaArrowRight } from "react-icons/fa6";

export default function NewsLetterSignUp() {
    const onNewsLetterSignup = () => {
        alert('Signed up to newsletter!');
    }

    return (
        <div className="flex flex-col border-slate-100 border-1 p-2 relative gap-0.5">
            <label className="text-xs text-slate-300">Email</label>
            <input className="outline-0" type="text" placeholder="Enter your email"/>
            <button onClick={onNewsLetterSignup} className="absolute top-0 right-0 h-full flex items-center"><FaArrowRight className="cursor-pointer hover:opacity-75 h-s w-s mr-4" /> </button>
        </div>
    )
}