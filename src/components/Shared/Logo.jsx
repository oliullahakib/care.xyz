import Link from 'next/link'
import React from 'react'

const Logo = () => {
  return (
    <Link href={'/'} className='text-2xl font-bold text-primary'>Care. <span className='text-accent'>xyz</span></Link>
  )
}

export default Logo