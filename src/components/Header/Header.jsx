import "./Header.styles.css";
import { useThemeContext } from "../../hooks/useThemeContext";
import Logo from "./Logo/Logo";
import Social from "./Social/Social";

const Header = () => {
    const { isLightMode } = useThemeContext();

    return (
        <header className="header">
            <nav
                className="header__nav"
                data-theme={isLightMode ? "light" : "dark"}
            >
                <div className="header__nav__logo-container">
                    <Logo />
                </div>
                <Social />
            </nav>
        </header>
    );
};
export default Header;
