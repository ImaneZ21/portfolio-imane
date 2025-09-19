import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "../components/Header/Header.jsx";
import Footer from "../components/Footer/Footer.jsx";
import About from "../components/About/About.jsx";
import Title from "../components/Title/Title.jsx";
import Skills from "../components/Skills/Skills.jsx";
import Projects from "../components/Projects/Projects.jsx";

function App() {
  return (
    <>
      <Header />
      <main>
        <Title />
        <About />
        <Projects />
        <Skills />
      </main>
      <Footer />
    </>
  );
}

export default App;
