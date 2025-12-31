'use client';

import { FaArrowRight } from "react-icons/fa6";

export default function NewsLetterSignUp() {
    const submitForm = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        alert('Signed up to newsletter!');
    }

    return (
        <div>
            <h3 className="text-xl font-semibold">SIGN UP FOR PERSONAL OFFERS</h3>
            <form
                className="flex flex-col border-slate-100 border-1 p-2 relative gap-0.5 mt-2"
                onSubmit={submitForm}
                autoComplete="on"
                id="newsletter-f"
            >
                <label className="text-xs text-slate-300" htmlFor="newsletter-email">Email</label>
                <input
                    id="newsletter-email"
                    name="email"
                    type="email"
                    placeholder="Enter your email"
                    autoComplete="email"
                    className="outline-0"
                    defaultValue=""
                />
                <button
                    type="submit"
                    className="absolute top-0 right-0 h-full flex items-center"
                >
                    <FaArrowRight className="cursor-pointer hover:opacity-75 h-s w-s mr-4" />
                </button>
            </form>
        </div>
    )
}
