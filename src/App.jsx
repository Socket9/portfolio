import Home from "./pages/Home/Home";
import AboutMe from "./pages/AboutMe/AboutMe";
import Projects from "./pages/Projects/Projects";
import { ThemeContextProvider } from "./context/theme.context";
import Footer from "./components/Footer/Footer";

function App() {
    return (
        <ThemeContextProvider>
            <main>
                <Home />
                <Projects />
                <AboutMe />
            </main>
            <Footer />
        </ThemeContextProvider>
    );
}

export default App;
