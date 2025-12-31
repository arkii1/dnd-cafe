import Link from "next/link"

export default function Hero()
{
    return <>
        <section className="relative h-[90vh] sm:h-[1200px]">
            <div className="absolute flex flex-col justify-start items-center inset-x-0 text-center sm:gap-2xs top-1/3 mt-15 sm:top-1/4 sm:mt-0">
                <h1 className="text-3xl font-black sm:tracking-wider">
                    DND CAFE BRISTOL
                </h1>
                <p className="text-4xl sm:text-6xl font-bold tracking-widest">NOW OPEN</p>
                <Link href="#booking-section" className="cursor-pointer font-semibold shadow-lg mt-8 mx-4 bg-sky-700 py-4 px-8 max-w-[320px] sm:px-19 sm:w-auto outline-1 outline-sky-900/80 shadow-lg">FIND OUT MORE AND BOOK!</Link>  
            </div>
            <video autoPlay loop muted className="h-screen sm:h-[1200px] object-cover pointer-events-none w-full">
                <source src="/coffee_pour.mp4" type="video/mp4"  />
                Your browser does not support the video tag.
            </video>
        </section>
    </>
}