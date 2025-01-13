import styles from "./NavBar.module.scss";
export const NavBar = () => {
    return (
        <nav className={styles.navbar}>
            <a href="#">Home</a>
            <a href="#">About Me</a>
            <a href="#">Projects</a>
            <a href="#">Blog</a>
        </nav>
    )
}