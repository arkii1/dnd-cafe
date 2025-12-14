import Link from "next/link"

export default function Hero()
{
    return <>
        <section className="relative h-[1200px]">
            <div className="absolute flex flex-col justify-center items-center inset-0  text-center gap-3xs">
                <h1 className="font-bold">
                    DND CAFE BRISTOL
                </h1>
                <p className="text-3xl font-semibold">NOW OPEN</p>
                <Link href="/book" className="cursor-pointer font-semibold shadow-lg mt-8 bg-sky-700 py-4 px-10 rounded-lg">FIND OUT MORE AND BOOK!</Link>  
            </div>
            <video autoPlay loop muted className="h-[1200px] object-cover pointer-events-none w-full">
                <source src="/coffee_pour.mp4" type="video/mp4"  />
                Your browser does not support the video tag.
            </video>
        </section>
    </>
}