import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "../components/Header/Header.jsx";
import Footer from "../components/Footer/Footer.jsx";
import About from "../components/About/About.jsx";
import Contact from "../components/Contact/Contact.jsx";
import Title from "../components/Title/Title.jsx"

function App() {
  return (
    <>
      <header>
        <Header />
      </header>
      <main>
        <Title />
        <About />
        <Contact />
        {/* <Projects />
        <Skills />
        <CV /> */}
      </main>
      <Footer />
    </>
  );
}

export default App;
