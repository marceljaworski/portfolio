import './App.scss';
import { NavLink, Routes, Route, Navigate } from 'react-router-dom';
import { PageWelcome } from './pages/PageWelcome';
import { PageProjects } from './pages/PageProjects';
import { PageAbout } from './pages/PageAbout';
import data from './content/data.json'

function App() {
	return (
		<div className="App">
			<h1>Marcel Jaworski</h1>
			<nav>
				<NavLink to="/welcome">{data.navText[0]}</NavLink>
				<NavLink to="/projects">{data.navText[1]}</NavLink>
				<NavLink to="/about">{data.navText[2]}</NavLink>
			</nav>

			<Routes>
				<Route path="/welcome" element={<PageWelcome />} />
				<Route path="/projects" element={<PageProjects />} />
				<Route path="/about" element={<PageAbout />} />
				<Route path="/" element={<Navigate to="/welcome" replace />} />
			</Routes>
		</div>
	);
}

export default App;
