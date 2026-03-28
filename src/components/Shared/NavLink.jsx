"use client"

import Link from 'next/link'
import { usePathname } from 'next/navigation'

const NavLink = ({href, label}) => {
    const pathName = usePathname();
    const isActive = pathName === href;
  return (
    <Link href={href} className={isActive ? "text-primary font-bold border-b-2" : "text-black"}>{label}</Link>
  )
}

export default NavLink