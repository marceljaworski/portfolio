import './PageProjects.scss';
import { Typography } from '@mui/material';
import { AppContext } from '../AppContext';
import { useContext } from 'react';
import boredapp from '../images/profil-bild.jpg';


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
		<div className="main main-projects">
			{/* <p>{data.pageProjects.paragraph}</p> */}
				{/* {data.pageProjects.projects.map((item: project) => */}
				<div className='card'>
					<img className='card-image' src={boredapp} alt="" />

					
					<Typography variant='h4' component="div">{data.pageProjects.projects[0].title}</Typography>
					
						
					<Typography variant='subtitle1'className='stack'>{data.pageProjects.projects[0].stack}</Typography>
						
					<Typography variant='body1'>{data.pageProjects.projects[0].features}</Typography>
					<a href={data.pageProjects.projects[0].link} target="blank"><button>Visit</button></a>
				
				</div>
				{/* )} */}
			
		</div>
	);
};