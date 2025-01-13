import styles from "./NavBar.module.scss";
import Link from "next/link";
import { FaHome, FaInfo, FaProjectDiagram, FaBlog} from "react-icons/fa";

export const NavBar = () => {
    return (
        <nav className={styles.navbar}>
            <div>
                <Link href="/">Home </Link>
                <FaHome/>
            </div>
            <div>
                <Link href="/aboutme">About Me </Link>
                <FaInfo/>
            </div>
            <div>
                <Link href="/projects">Projects </Link>
                <FaProjectDiagram/>
            </div>
            <div>
                <Link href="/blog">Blog </Link>
                <FaBlog/>
            </div>
        </nav>
    )
}