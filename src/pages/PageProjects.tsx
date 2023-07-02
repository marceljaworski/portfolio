import './PageProjects.scss';
import { Typography, textFieldClasses } from '@mui/material';
import { AppContext } from '../AppContext';
import { useContext } from 'react';
import boredapp from '../images/profil-bild.jpg';
import bootstrap from '../images/bootstrap.png'
import eventplanner from '../images/eventdesktop.png';


interface project {
	title: string,
	description: string,
	stack: string,
	features: string,
	link: string,
	date: string,
	image: string
}

export const PageProjects = () => {
	const { data } = useContext(AppContext);


	return (
		<div className="main">
			<Typography>{data.pageProjects.paragraph}</Typography>
			<div className='main-projects'>
			<div className='card'>
				<img className='card-image' src={boredapp} alt="" />
				<Typography variant='h4' component="div">{data.pageProjects.projects[0].title}</Typography>
				<Typography variant='subtitle1'className='stack'>{data.pageProjects.projects[0].stack}</Typography>
				<Typography variant='body1'>{data.pageProjects.projects[0].features}</Typography>
				<a href={data.pageProjects.projects[0].link} target="blank"><button>Visit</button></a>
			</div>
			<div className='card'>
				<img className='card-image' src={eventplanner} alt="" />
				<Typography variant='h4' component="div">{data.pageProjects.projects[1].title}</Typography>
				<Typography variant='subtitle1'className='stack'>{data.pageProjects.projects[1].stack}</Typography>
				<Typography variant='body1'>{data.pageProjects.projects[1].features}</Typography>
				<a href={data.pageProjects.projects[1].link} target="blank"><button>Visit</button></a>
			</div>
			<div className='card'>
				<img className='card-image' src={boredapp} alt="" />
				<Typography variant='h4' component="div">{data.pageProjects.projects[2].title}</Typography>
				<Typography variant='subtitle1'className='stack'>{data.pageProjects.projects[2].stack}</Typography>
				<Typography variant='body1'>{data.pageProjects.projects[2].features}</Typography>
				<a href={data.pageProjects.projects[2].link} target="blank"><button>Visit</button></a>
			</div>
			<div className='card'>
				<img className='card-image' src={boredapp} alt="" />
				<Typography variant='h4' component="div">{data.pageProjects.projects[3].title}</Typography>
				<Typography variant='subtitle1'className='stack'>{data.pageProjects.projects[3].stack}</Typography>
				<Typography variant='body1'>{data.pageProjects.projects[3].features}</Typography>
				<a href={data.pageProjects.projects[3].link} target="blank"><button>Visit</button></a>
			</div>
			</div>
		</div>
	);
};