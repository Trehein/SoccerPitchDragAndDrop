import React from 'react'
import Link from 'next/link'
import { navBarStyles } from './styles/navBarStyles'

const NavBar: React.FC = () => {
    const navBarClasses = navBarStyles()

    return (
        <nav style={navBarClasses.navBarContainer}>
            <Link href="/versus">Versus</Link>
            <Link href="/about">About</Link>
        </nav>
    )
}

export default NavBar