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
import MenuTwoToneIcon from '@mui/icons-material/MenuTwoTone';
import HomeTwoToneIcon from '@mui/icons-material/HomeTwoTone';
import WorkTwoToneIcon from '@mui/icons-material/WorkTwoTone';
import PersonOutlineTwoToneIcon from '@mui/icons-material/PersonOutlineTwoTone';
import { ContactForm } from './components/ContactForm';

function App() {
	const { data, lightMode } = useContext(AppContext);
	const [showMenu, setShowMenu] = useState(false);
	
	const handleShow = () => {
		setShowMenu(!showMenu)
	};
	
	return (
		<div className={"App "+ (lightMode ? 'light' : 'dark')}>
			<nav className='nav'>
				<NavLink to="/welcome"><h1 className='main-title'>Marcel Jaworski</h1></NavLink>
				<div className='nav-items'>
					<NavLink to="/welcome">{data.navText[0]}</NavLink>
					<NavLink to="/projects">{data.navText[1]}</NavLink>
					<NavLink to="/about">{data.navText[2]}</NavLink>
				</div>
				<div className='nav-icons'>
					<Theme/>
					<LanguageChooser/>
					<ContactForm />

					<div className='dropdown'>
						<MenuTwoToneIcon fontSize='medium' className="dropbtn icon"  onClick={handleShow}></MenuTwoToneIcon>
						{showMenu &&<div className='dropdown-content' onClick={handleShow}>
						
						<NavLink to="/welcome">
							<HomeTwoToneIcon className='dropdown-icon' fontSize='small'></HomeTwoToneIcon>
							<span className="dropdown-text">{data.navText[0]}</span>
						</NavLink>
							
						<NavLink to="/projects">
							<WorkTwoToneIcon className='dropdown-icon' fontSize='small'></WorkTwoToneIcon>
							<span className="dropdown-text">{data.navText[1]}</span>
						</NavLink>
							
						<NavLink to="/about">
							<PersonOutlineTwoToneIcon className='dropdown-icon' fontSize='small'></PersonOutlineTwoToneIcon>
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
