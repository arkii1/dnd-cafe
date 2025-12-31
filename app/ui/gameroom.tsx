'use client';

import { DayPicker } from "react-day-picker";
import "react-day-picker/style.css";
import { useState } from "react";

export default function GameRoom() {
    const [selected, setSelected] = useState<Date>();

    const submitForm = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        alert('Booked table!');
    }


    return <>
        <section className="relative h-[1028px] sm:h-[1200px] bg-slate-100" id="booking-section">
            <div className="absolute flex justify-between items-center insert-0 top-0 h-1/2 w-full left-1/2 sm:left-1/5 px-5 -translate-x-1/2 max-w-[380px]">
                <div className="flex flex-col justify-center items-start text-start gap-3">
                    <h2 className="text-4xl font-extrabold">BOOK NOW</h2>
                    <p className="italic text-m">Reserve & pay, and recieve access to a range retro consoles & board games.</p>
                </div>
            </div>

            <div className="absolute flex flex-col justify-start items-between py-4 insert-0 top-1/3 w-full px-5 left-1/2 sm:left-1/5 -translate-x-1/2 max-w-[380px]">
                <form onSubmit={submitForm} id="booking-form" className="flex flex-col justify-start items-start p-4 text-start gap-3 h-full bg-slate-100 text-sky-700 shadow-lg outline-0">
                    <h3 className="text-2xl font-extrabold">BOOK YOUR TABLE</h3>
                    <DayPicker
                        animate
                        mode="single"
                        selected={selected}
                        onSelect={setSelected}
                        
                    />
                    <div className="flex flex-col border-sky-900 border-1 p-2 relative gap-0.5 w-full">
                        <label className="text-xs text-sky-700" htmlFor="booking-email">Email</label>
                        <input
                            id="booking-email"
                            name="email"
                            type="email"
                            autoComplete="email"
                            className="outline-0 text-sky-700"
                            defaultValue=""
                        />
                    </div>
                    
                    <div className="flex flex-col border-sky-900 border-1 p-2 relative gap-0.5 w-full">
                        <label className="text-xs text-sky-700" htmlFor="booking-time">
                            Time
                        </label>

                        <select
                            id="booking-time"
                            name="time"
                            className="outline-0 text-sky-700 w-full"
                        >
                            <option value="">Select a time</option>
                            <option value="10:00">10:00 AM</option>
                            <option value="10:30">10:30 AM</option>
                            <option value="11:00">11:00 AM</option>
                            <option value="11:30">11:30 AM</option>
                            <option value="12:00">12:00 PM</option>
                            <option value="12:30">12:30 PM</option>
                            <option value="13:00">1:00 PM</option>
                            <option value="13:30">1:30 PM</option>
                            <option value="14:00">2:00 PM</option>
                            <option value="14:30">2:30 PM</option>
                            <option value="15:00">3:00 PM</option>
                            <option value="15:30">3:30 PM</option>
                            <option value="16:00">4:00 PM</option>
                            <option value="16:30">4:30 PM</option>
                            <option value="17:00">5:00 PM</option>
                            <option value="17:30">5:30 PM</option>
                            <option value="18:00">6:00 PM</option>
                            <option value="18:30">6:30 PM</option>
                            <option value="19:00">7:00 PM</option>
                            <option value="19:30">7:30 PM</option>
                            <option value="20:00">8:00 PM</option>
                            <option value="20:30">8:30 PM</option>
                            <option value="21:00">9:00 PM</option>
                            <option value="21:30">9:30 PM</option>
                            <option value="22:00">10:00 PM</option>
                        </select>
                    </div>


                    <button
                        type="submit"
                        className="cursor-pointer font-semibold shadow-lg bg-sky-700 py-4 px-8 outline-1 outline-sky-900/80 shadow-lg text-slate-100 w-full"
                    >
                        BOOK TABLE
                    </button>
                </form>
                <small className="text-xs font-thin italic ml-auto mt-2 text-slate-900/40 sm:text-slate-100/80">Powered by react-day-picker</small>
            </div>
            
            <video autoPlay loop muted className="h-1/2 w-full sm:h-[1200px] object-cover pointer-events-none">
                <source src="/game_room.mp4" type="video/mp4"  />
                Your browser does not support the video tag.
            </video>
        </section>
    </>
}
