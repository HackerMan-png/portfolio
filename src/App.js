import React, { useState } from 'react';
import './css/style.css';
import {Main, Navbar, Projects, Resume} from "./components/Exports"

function App() {
	const [home, setHome] = useState(true)
	const [projects, setProjects] = useState(false)
	const [resume, setResume] = useState(false)

  const changePage = (page) => {
      setHome(false)
			setProjects(false)
			setResume(false)

      switch (page) {
        case "home":
          setHome(true)
          break;
        case "projects":
          setProjects(true)
          break;
        case "resume":
          setResume(true)
          break
    }
  }
  return (
    <div className="App">
			<Navbar changePage={changePage}/>
			{home && <Main />}
			{projects && <Projects/>}
			{resume && <Resume/>}
    </div>
  );
}

export default App;
