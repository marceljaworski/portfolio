import './App.scss';
import { Routes, Route, Navigate, NavLink} from 'react-router-dom';
import { PageWelcome } from './pages/PageWelcome';
import { PageProjects } from './pages/PageProjects';
import { PageAbout } from './pages/PageAbout';
import { Page404 } from './pages/Page404';
import { LanguageChooser } from './components/LanguageChooser';
import { Theme } from './components/Theme';
import { AppContext } from './AppContext';
import { useContext, useState } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import HomeIcon from '@mui/icons-material/Home';
import WorkIcon from '@mui/icons-material/Work';
import PersonIcon from '@mui/icons-material/Person';
import { Typography } from '@mui/material';

function App() {
	const { data, lightMode } = useContext(AppContext);
	const [showMenu, setShowMenu] = useState(false);
	const handleShow = () => {
		setShowMenu(!showMenu)
}

	return (
		<div className={"App "+ (lightMode ? 'light' : 'dark')}>
			<nav className='nav'>
				<NavLink to="/welcome"><h1 className='foldit'>Marcel Jaworski</h1></NavLink>
				<div className='nav-items'>
					<NavLink to="/welcome">{data.navText[0]}</NavLink>
					<NavLink to="/projects">{data.navText[1]}</NavLink>
					<NavLink to="/about">{data.navText[2]}</NavLink>
				</div>
				<div className='nav-icons'>
					<Theme/>
					<LanguageChooser/>
					<div className='dropdown'>
						<MenuIcon className="dropbtn icon"  onClick={handleShow}></MenuIcon>
						{showMenu &&<div className='dropdown-content' onClick={handleShow}>
						
						<NavLink to="/welcome">
							<HomeIcon className='dropdown-icon' fontSize='small'></HomeIcon>
							<span className="dropdown-text">{data.navText[0]}</span>
						</NavLink>
							
						<NavLink to="/projects">
							<WorkIcon className='dropdown-icon' fontSize='small'></WorkIcon>
							<span className="dropdown-text">{data.navText[1]}</span>
						</NavLink>
							
						<NavLink to="/about">
							<PersonIcon className='dropdown-icon' fontSize='small'></PersonIcon>
							<span className="dropdown-text">{data.navText[2]}</span>
						</NavLink>	
		
						</div>}
					</div>
				</div>
			</nav>

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
