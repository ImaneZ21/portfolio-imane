import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "../components/Header/Header.jsx";
import Footer from "../components/Footer/Footer.jsx";
import About from "../components/About/About.jsx";

function App() {
  return (
    <>
      <header>
        <Header />
      </header>
      <main>
        <About />
      </main>
      <Footer />
    </>
  );
}

export default App;
