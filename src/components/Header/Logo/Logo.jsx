import { useThemeContext } from "../../../hooks/useThemeContext";
import './Logo.styles.css'

const Logo = () => {
    const { isLightMode } = useThemeContext();

    return <img src={isLightMode ? './images/logo-light-1.png' : './images/logo-dark-1.png'} alt="Socket portfolio logo" className="logo-img"/>;
};
export default Logo;
