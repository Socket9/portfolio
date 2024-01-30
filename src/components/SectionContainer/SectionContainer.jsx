import { useThemeContext } from "../../hooks/useThemeContext";
import "./SectionContainer.styles.css";

// eslint-disable-next-line react/prop-types
const SectionContainer = ({ title, children }) => {
    const { isLightMode } = useThemeContext();

    return (
        <section
            className="section"
            data-theme={isLightMode ? "light" : "dark"}
        >
            <div className="section__title">
                <span>&#60;</span>
                <h3>{title}</h3>
                <span>/ &#62;</span>
            </div>
            {children}
        </section>
    );
};
export default SectionContainer;
