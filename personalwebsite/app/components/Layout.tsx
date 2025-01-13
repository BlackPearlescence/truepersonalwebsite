import { NavBar } from "./NavBar"
import React, {ReactNode} from "react"

interface LayoutProps { 
    children: ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({children}) => {
    return(
        <div>
            <header>
                <NavBar />
            </header>
            <main>{children}</main>
            <footer>

            </footer>
        </div>
    )
}