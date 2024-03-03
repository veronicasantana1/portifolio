import logo from './logo.svg';
import './App.css';
import Navbar from './componentes/sections/Navbar';
import Presentation from './componentes/sections/Presentation';
// import Skills from './componentes/sections/Skills';
import Footer from './componentes/sections/Footer';
import Projects from './componentes/sections/Projects';
import AboutMe from './componentes/sections/AboutMe';


function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Presentation></Presentation>
      {/* <Skills></Skills> */}
      <Projects></Projects>
      <AboutMe></AboutMe>
      <Footer></Footer>
    </div>
  );
}

export default App;
