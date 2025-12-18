

export default function GameRoom() {
    return <>
        <section className="relative h-screen sm:h-[1200px]">
            <div className="absolute flex justify-between items-center insert-0 h-full w-full bg-transparent">
                <div className="w-full h-3/4 md:w-2/3">
                    <div className="flex flex-col justify-center items-start px-10 md:mx-35 text-start w-full h-full border-stone-100 border-0 rounded-4xl">
                        <h2 className="text-7xl font-bold">BOOK NOW</h2>
                        <p className="italic text-m">Reserve & pay, and recieve access to over twenty retro consoles, with over 100 games and 80 board games.</p>
                    </div>
                </div>
                <div className="right-0 h-full bg-stone-900 w-1/3 items-center shadow-2xl  hidden md:flex">
                    <div className="m-8 p-8 w-full h-1/3 rounded-4xl flex-col justify-center items-center border-2 border-stone-100">
                        Insert calender here
                    </div>
                </div>
            </div>
            
            <video autoPlay loop muted className="h-[1200px] object-cover pointer-events-none">
                <source src="/game_room.mp4" type="video/mp4"  />
                Your browser does not support the video tag.
            </video>
        </section>
    </>
}
