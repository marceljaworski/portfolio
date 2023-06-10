import './App.scss';
import { Routes, Route, Navigate} from 'react-router-dom';
import { PageWelcome } from './pages/PageWelcome';
import { PageProjects } from './pages/PageProjects';
import { PageAbout } from './pages/PageAbout';
import { Page404 } from './pages/Page404';
// import { LanguageChooser } from './components/LanguageChooser';
// import { Theme } from './components/Theme';
import { AppContext } from './AppContext';
import { useContext } from 'react';


import { Navbar } from './components/Navbar/Nabvar';


function App() {
	const { data, lightMode } = useContext(AppContext);


	return (
		<div className={"App "+ (lightMode ? 'light' : 'dark')}>
			{/* <nav className='nav'>
				<NavLink to="/welcome"><h1>Marcel Jaworski</h1></NavLink>
				<div className='nav-items'>
					<NavLink to="/welcome">{data.navText[0]}</NavLink>
					<NavLink to="/projects">{data.navText[1]}</NavLink>
					<NavLink to="/about">{data.navText[2]}</NavLink>
				</div>
				<div className='nav-icons'>
					<Theme/>
					<LanguageChooser/>
				</div>
			</nav> */}


			<Navbar/>
			


			<Routes>

				<Route path="/" element={<Navigate to="/welcome" replace />} />
				<Route path="/welcome" element={<PageWelcome />} />
				<Route path="/projects" element={<PageProjects />} />
				<Route path="/about" element={<PageAbout />} />
				<Route path="*" element={ <Page404 /> } />
			</Routes>
		</div>
	);
}

export default App;
