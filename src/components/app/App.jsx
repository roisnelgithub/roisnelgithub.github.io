import "./App.css";

import Avatar from "../presentation/Avatar";
import ToolList from "../skills/ToolList";
import ProjectList from "../projects/ProjectList";
import Studies from "../studies/Studies";
import Contact from "../contact/Contact";
import About from "../presentation/About";

function App() {
  return (
    <>
      <header className="header-container">
        <div>
          <Avatar width="100px" />
        </div>
        <div className="tools-container">
          <ToolList />
          <About />
        </div>
      </header>
      <main className="main-container">
        <div className="projects-container">
          <ProjectList />
        </div>
        <div className="studies-container">
          <Studies />
        </div>
        <div className="contact-container">
          <Contact />
        </div>
      </main>
    </>
  );
}

export default App;
