import React from 'react'
import capstoneImg from './media/capstone.png'
import chardexImg from './media/chardex.png'
import typingImg from './media/typing.png'

const Projects = () => {
	return (
		<div className="projectsWrapper">
			<h1>Projects</h1>
			<div className="projects">
				<div className="project">
					<a href="https://github.com/HackerMan-png/capstone">
					<p>Capstone</p>
					<img src={capstoneImg} alt="Capstone Image" className="projectImg" />
					</a>
				</div>
				<div className="project">
					<a href="https://github.com/Davidm8624/pokemon">
					<p>Chardex</p>
					<img src={chardexImg} alt="Chardex Image" className="projectImg" />
					</a>
				</div>
				<div className="project">
					<a href="https://github.com/HackerMan-png/typing.io-type">
					<p>Typing.io Auto Typer</p>
					<img src={typingImg} alt="Typing.io Image" className="projectImg" href="https://github.com"  />
					</a>
				</div>
				<div className="project">
					<p>Filler</p>
				</div>
				<div className="project">
					<p>Filler</p>
				</div>
				<div className="project">
					<p>Filler</p>
				</div>
			</div>
		</div>
	)
}

export default Projects
