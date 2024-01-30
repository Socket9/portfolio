import { PiGithubLogoFill } from "react-icons/pi";
import ThemeToggle from "./ThemeToggle/ThemeToggle";
import { FaLinkedinIn } from "react-icons/fa";
import "./Social.styles.css";

const Social = () => {
    return (
        <div className="header__nav-socials">
            <a href="https://github.com/Socket9" target="_blank" aria-label="Visit my Github" rel="noreferrer">
                <PiGithubLogoFill aria-label="Visit my GitHub profile" />
            </a>
            <a
                href="https://www.linkedin.com/in/luciano-ponce-87b047206/"
                target="_blank"
                aria-label="Visit my Linked In profile" rel="noreferrer"
            >
                <FaLinkedinIn />
            </a>
            <ThemeToggle />
        </div>
    );
};
export default Social;
