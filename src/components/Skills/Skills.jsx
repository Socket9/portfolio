import {
    SiHtml5,
    SiCss3,
    SiReact,
    SiTailwindcss,
    SiSpring,
} from "react-icons/si";
import { RiJavascriptFill } from "react-icons/ri";
import { FaJava } from "react-icons/fa";
import "./Skills.styles.css";

const Skills = () => {
    return (
        <div className="skills">
            <div className="skills__title">
                <h4>My skills</h4>
            </div>
            <ul>
                <li>
                    <SiHtml5 />
                </li>
                <li>
                    <SiCss3 />
                </li>
                <li>
                    <RiJavascriptFill />
                </li>
                <li>
                    <SiReact />
                </li>
                <li>
                    <SiTailwindcss />
                </li>
                <li>
                    <FaJava />
                </li>
                <li>
                    <SiSpring />
                </li>
            </ul>
        </div>
    );
};
export default Skills;
