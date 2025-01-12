import styles from "./NavBar.module.scss";
export const NavBar = () => {
    return (
        <nav className={styles.navbar}>
            <ul className={styles.listbox}>
                <li><a href="#">Home</a></li>
                <li><a href="#">About Me</a></li>
                <li><a href="#">Projects</a></li>
                <li><a href="#">Blog</a></li>
            </ul>
        </nav>
    )
}