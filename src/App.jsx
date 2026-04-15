import { useState } from "react";
import "./App.css";
import { LoadingScreen } from "./components/LoadingScreen";
import { Navbar } from "./components/Navbar";
import { MobileMenu } from "./components/MobileMenu";
import { ResumeModal } from "./components/ResumeModal";
import { Home } from "./components/sections/Home";
import { About } from "./components/sections/About";
import { Projects } from "./components/sections/Projects";
import "./index.css";
import { Contact } from "./components/sections/Contact";

function App() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [resumeOpen, setResumeOpen] = useState(false);

  return (
    <>
      {!isLoaded && <LoadingScreen onComplete={() => setIsLoaded(true)} />}{" "}
      <div
        className={`min-h-screen transition-opacity duration-700 ${
          isLoaded ? "opacity-100" : "opacity-0"
        } bg-black text-gray-100`}
      >
        <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} onResumeOpen={() => setResumeOpen(true)} />
        <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} onResumeOpen={() => setResumeOpen(true)} />
        <Home onResumeOpen={() => setResumeOpen(true)} />
        <About />
        <Projects />
        <Contact />
        <ResumeModal open={resumeOpen} onClose={() => setResumeOpen(false)} />
      </div>
    </>
  );
}

export default App;
