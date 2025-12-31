import IconLink from "./iconLink";
import { FaInstagram, FaFacebook, FaXTwitter } from "react-icons/fa6";

export default function Footer() {
    const year = new Date().getFullYear();


    return (
        <footer className="grid py-12 px-8 gap-8 w-full">
            <p className="col-span-full text-md flex flex-col justify-start gap-2">
                <strong>Get in touch</strong>
                <span className="font-light">Call us on <strong className="font-bold">01234567891</strong> or email <strong className="font-bold">info@dndcafe.co.uk</strong></span>

                <address className="mt-4">
                    Next to the Ogre’s Lair<br/>
                    Bristol<br/>
                    BN1 1AB
                </address>
            </p>
            
            <div className="flex gap-12 w-full justify-start col-span-full">
                <IconLink link="#" icon={FaFacebook} classes=''/>
                <IconLink link="#" icon={FaXTwitter} classes=''/>
                <IconLink link="#" icon={FaInstagram} classes=''/>
            </div>
            <p className="col-span-full w-full text-xs font-thin italic text-slate-100">©{year+1}, DnD Cafe Ltd.</p>
        </footer>
    )
}