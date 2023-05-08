import Header from "./components/header";
import Technologies from "./components/technologies";
import Slogan from "./components/slogan";
import Contact from "./components/contact";
import Footer from "./components/footer";
// import Portfolio from "./components/portfolio";
import "./styles/global.scss";

const App = () => {
  return (
    <div className="App">
      <Header />
      <Technologies />
      <Slogan />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
