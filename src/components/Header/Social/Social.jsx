import { PiGithubLogoFill } from "react-icons/pi";
import ThemeToggle from "./ThemeToggle/ThemeToggle";
import { FaLinkedinIn } from "react-icons/fa";
import "./Social.styles.css";

const Social = () => {
    return (
        <div className="header__nav-socials">
            <a href="#">
                <PiGithubLogoFill aria-label="Visit my GitHub profile" />
            </a>
            <a href="#" aria-label="Visit my Linked In profile">
                <FaLinkedinIn />
            </a>
            <ThemeToggle />
        </div>
    );
};
export default Social;
