import { FaMoon, FaSun } from "react-icons/fa";
import { useThemeContext } from "../../../../hooks/useThemeContext";
import './ThemeToggle.styles.css'

const ThemeToggle = () => {
    const { isLightMode, setIsLightMode } = useThemeContext();

    const handleToggleClick = () => {
        setIsLightMode(isLightMode ? false : true);
    };

    return (
        <button className="toggle" aria-label="change theme" onClick={handleToggleClick}>
            {isLightMode ? <FaMoon /> : <FaSun />}
        </button>
    );
};
export default ThemeToggle;
