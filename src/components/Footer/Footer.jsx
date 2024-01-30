import { useThemeContext } from "../../hooks/useThemeContext";
import "./Footer.styles.css";

const Footer = () => {
  const { isLightMode } = useThemeContext();
    return (
        <footer className="footer" data-theme={isLightMode ? 'light' : 'dark'}>
            <span>© 2024 All rights reserved. Created by <span className="footer__text-color"> Luciano Ponce.</span></span>
        </footer>
    );
};
export default Footer;
