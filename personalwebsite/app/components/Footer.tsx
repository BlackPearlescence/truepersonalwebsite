import { FaGithub, FaLinkedin, FaMedium } from "react-icons/fa";
import styles from "./Footer.module.scss";

export const Footer = () => {
    return (
        <div className={styles.footercontainer}>
            <div className={styles.footercontentcontainer}>
                <div className={styles.contactcontainer}>
                    <h6>Contact</h6>
                    <div>
                        <span>Phone: (347)-260-0471</span>
                        <span>Email: <a className="emailtext" href="mailto:srogers138@gmail.com">srogers138@gmail.com</a></span>
                    </div>
                </div>
                <div className={styles.linkscontainer}>
                    <h6>Site Links</h6>
                    <div>
                        <a href="/">Home</a>
                        <a href="/aboutme">About Me</a>
                        <a href="/projects">Projects</a>
                        <a href="/blog">Blog</a>
                    </div>
                </div>
            </div>
            

            <div className={styles.socialscontainer}>
                <span>For the love of code.</span>
                <div className={styles.socials}>
                    <a href=""><FaGithub /></a>
                    <a href=""><FaLinkedin /></a>
                    <a href=""><FaMedium /></a>
                </div>
            </div>
        </div>
    )
}