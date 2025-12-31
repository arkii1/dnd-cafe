'use client'

import {
  Bars3Icon
} from '@heroicons/react/24/outline';
import IconLink from "./iconLink";
import { FaInstagram, FaFacebook, FaXTwitter} from "react-icons/fa6";

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation'


const links = [
    {
        label: 'Home',
        route: '/',
        ariaLabel: 'Home page'
    }
]

export default function Navbar() {
    const [open, setOpen] = useState(false)
    const pathname = usePathname()

    return <>
        <button className='fixed top-m right-m cursor-pointer' onClick={() => setOpen(true)} aria-label="Open main menu" aria-expanded={open}>
          <Bars3Icon  className="text-sky-500 h-10 w-10"/>
        </button>
    
        {open && (
            <div
            className="fixed inset-0 bg-primary-500/40 z-40 cursor-pointer"
            onClick={() => setOpen(false)}
            />
        )}

      <aside
        className={`
          fixed top-0 right-0 bg-neutral-900 shadow w-full z-50
          transform transition-transform duration-300 ease-out
          ${open ? 'translate-y-0 ' : '-translate-y-full'}
        `}
        role="dialog"
        aria-modal="true"
        aria-label="Main menu"
      >

        <nav className="p-m flex flex-col gap-s mt-xs">
           {links.map(({label, route, ariaLabel } : {label: string, route: string, ariaLabel: string}) => 
                <Link onClick={() => setOpen(false)} key={route} href={route} className={`hover:bg-accent/20 p-3xs rounded-md`} aria-label={ariaLabel}>{label}</Link>
            )}

            <div className="flex gap-12 w-full justify-start col-span-full px-2 mt-12">
                <IconLink link="#" icon={FaFacebook} classes=''/>
                <IconLink link="#" icon={FaXTwitter} classes=''/>
                <IconLink link="#" icon={FaInstagram} classes=''/>
            </div>
        </nav>
      </aside>
    </>
}