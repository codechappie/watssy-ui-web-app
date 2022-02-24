import { Container } from '@nextui-org/react'
import Link from 'next/link'
import React, { FC } from 'react'

interface LayoutProps {
    children: JSX.Element;
}

const Layout: FC<LayoutProps> = ({ children }) => {
    return (
        <>
            <Container>
                <nav>
                    <Link href="/">
                        <a>Home</a>
                    </Link>
                    <Link href="/contacto">
                        <a>Contact</a>
                    </Link>
                </nav>
            </Container>
            <main>
                {children}
            </main>
            <footer>
                Footer
            </footer>
        </>
    )
}

export default Layout