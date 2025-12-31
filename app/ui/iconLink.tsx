import Link from "next/link"

export default function IconLink({link, icon : IconComponent, classes = ''} : {
    link: string,
    icon: React.FC<React.SVGProps<SVGSVGElement>>,
    classes?: string
}) {
    return <Link className='cursor-pointer' href={link}><IconComponent className={`hover:opacity-75 h-m w-m ${classes}`}/></Link>
}