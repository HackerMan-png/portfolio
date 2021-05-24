import React from 'react'

const Navbar = ({changePage}) => {
	return (
		<div className="navWrapper">
		<div className="nav">
			<ul>
				<li onClick={() => changePage("home")}>Home</li>
				<li onClick={() => changePage("projects")}>Projects</li>
				<li onClick={() => changePage("resume")}>Resume</li>
				{/* <li onClick={() => changePage("contact")}>Contact Me</li> */}
			</ul>
		</div>
	</div>
	)
}

export default Navbar
