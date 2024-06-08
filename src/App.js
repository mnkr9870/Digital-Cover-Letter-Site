import "./App.css";
import Contact from "./Contact/Contact";
import { GlobalProvider } from "./Context/GlobalContext.js";
import CoverLetter from "./CV/CoverLetter";
import Home from "./Home/Home";

function App() {
  return (
    <GlobalProvider>
      <div className="min-h-screen font-montserrat mainDiv">
        <Home />
        <CoverLetter />
        <Contact />
      </div>
    </GlobalProvider>
  );
}

export default App;
