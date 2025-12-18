

export default function GameRoom() {
    return <>
        <section className="relative h-[100vh] sm:h-[1200px] bg-slate-100">
            <div className="absolute flex justify-between items-center insert-0 top-0 h-1/2 mx-10">
                <div className="flex flex-col justify-center items-start text-start gap-3">
                    <h2 className="text-4xl font-extrabold">BOOK NOW</h2>
                    <p className="italic text-m">Reserve & pay, and recieve access to a range retro consoles & board games.</p>
                </div>
            </div>

            <div className="absolute flex flex-col justify-start items-between py-4 insert-0 h-2/3 top-1/3 mx-10">
                <div className="flex flex-col justify-start items-start p-4 text-start gap-3 h-full bg-slate-100 text-sky-700 shadow-lg outline-0">
                    <h3 className="text-2xl font-extrabold">SELECT YOUR PACKAGE & DATE</h3>
                    <p>package here</p>
                    <p>date here</p>
                </div>
                <small className="text-xs font-thin italic ml-auto mt-2 text-slate-100/40">Powered by example</small>
            </div>
            
            <video autoPlay loop muted className="h-1/2 w-full sm:h-[1200px] object-cover pointer-events-none">
                <source src="/game_room.mp4" type="video/mp4"  />
                Your browser does not support the video tag.
            </video>
        </section>
    </>
}
