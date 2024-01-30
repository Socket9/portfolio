import { useThemeContext } from "../../hooks/useThemeContext";
import { MdKeyboardDoubleArrowDown } from "react-icons/md";
import "./Home.styles.css";
import Header from "../../components/Header/Header";
import { FaExternalLinkAlt } from "react-icons/fa";
import CopyTextToClipboard from "../../components/CopyTextToClipboard/CopyTextToClipboard";

const Home = () => {
    const { isLightMode } = useThemeContext();

    return (
        <section
            className="home"
            id="home"
            data-theme={isLightMode ? "light" : "dark"}
        >
            <Header />
            <div className="home__container">
                <div className="home__container-texts">
                    <h1 className="home__container-title">
                        Hello! I&apos;m <span> Luciano Ponce</span>
                    </h1>
                    <div className="home__container-subtitle">
                        <span>&#60;</span>
                        <h2>Full-Stack Developer</h2>
                        <span>/ &#62;</span>
                    </div>
                    <div className="home__container-buttons">
                        <a
                            href="./assets/Luciano_Ponce_CV.pdf"
                            className="home__container-btn resume"
                            target="_blank"
                            aria-label="Open resume PDF"
                        >
                            <FaExternalLinkAlt />
                            Resume
                        </a>
                        <CopyTextToClipboard text="poncelucianod@gmail.com" />
                    </div>
                </div>

                <MdKeyboardDoubleArrowDown className="home__container-arrow" />
            </div>
        </section>
    );
};
export default Home;
