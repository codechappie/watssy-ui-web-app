import React, { FC } from 'react'

interface LayoutProps {
    children: JSX.Element;
}

const Layout: FC<LayoutProps> = ({ children }) => {
    return (
        <>
            <div>Navbar</div>
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