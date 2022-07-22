import About from "./component/About.js";
import Contact from "./component/Contact.js";
import Intro from "./component/Intro.js";
import Toggle from "./component/Toggle.js";
import Works from "./component/Works.js";
import { ThemeContext } from "./context";
import { useContext } from "react";

const App = () =>{
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  return(
    <div style={{backgroundColor:darkMode? "#222" : "white", color:darkMode && "white"}}>
    <Toggle />
    <Intro />
    <About />
    <Works />
    <Contact />
  </div>

  );
};
export default App;