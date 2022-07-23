import About from "./component/About.js";
import Contact from "./component/Contact.js";
import Intro from "./component/Intro.js";
import Toggle from "./component/Toggle.js";
import Works from "./component/Works.js";
import { ThemeContext } from "./context";
import { useContext } from "react";
import Navi from "./component/Navi.js";


const App = () =>{
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  return(
    <div style={{backgroundColor:darkMode? "#191414" : "white", color:darkMode && "white"}}>
    <Toggle />
    <Navi />
    <Intro />
    <About />
    <Works />
    <Contact />
  </div>

  );
};
export default App;