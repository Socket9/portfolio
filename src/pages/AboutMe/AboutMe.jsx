import SectionContainer from "../../components/SectionContainer/SectionContainer";
import Skills from "../../components/Skills/Skills";
import "./AboutMe.styles.css";

const AboutMe = () => {
    return (
        <SectionContainer title="About me">
            <div className="about-me__content">
                <div className="about-me__content-info">
                    <div className="title">
                        <h4>Available for work.</h4>
                    </div>
                    {/* <p>
                        Empecé en el desarrollo como un simple pasatiempo, pero
                        mi fascinación creció tanto que decidí por sumergirme de
                        lleno y dedicarme a ello.
                    </p>
                    <p>
                        Aunque tengo experiencia en varios proyectos personales,
                        aun no he tenido la oportunidad de aplicar ese
                        conocimiento en un entorno empresarial. En este momento,
                        estoy buscando una oportunidad que me permita poner en
                        práctica lo que sé y seguir aprendiendo.
                    </p> */}
                    <p>
                        I started in development as a simple hobby, but my
                        fascination grew so much that I decided to fully immerse
                        myself and dedicate myself to it.
                    </p>
                    <p>
                        While I have experience in various personal projects, I
                        haven&apos;t had the chance to apply that knowledge in a
                        corporate environment yet. Right now, I&apos;m seeking
                        an opportunity that allows me to put into practice what
                        I know and continue learning.
                    </p>
                    <Skills />
                </div>
                <div className="about-me__content-img">
                    <img src="./images/home-img.svg" alt="" />
                </div>
            </div>
        </SectionContainer>
    );
};
export default AboutMe;
