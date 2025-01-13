import styles from "./NavBar.module.scss";
import Link from "next/link";

export const NavBar = () => {
    return (
        <nav className={styles.navbar}>
            <Link href="/">Home</Link>
            <a href="#">About Me</a>
            <a href="#">Projects</a>
            <a href="#">Blog</a>
        </nav>
    )
}