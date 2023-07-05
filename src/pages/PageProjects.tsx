import './PageProjects.scss';
import { Typography } from '@mui/material';
import { AppContext } from '../AppContext';
import { useContext } from 'react';
import gpt from '../images/gpt.png';
import eventplanner from '../images/eventdesktop.png';
import glossary from '../images/glossary.png';
import angularshop from '../images/onlineshop.png';
import boredapp from '../images/boredapp.png';
import stopwatch from '../images/stopwatch.png';
import tictactoe from '../images/tictactoe.png';
import calculator from '../images/calculator.png';
import jonglier from '../images/jonglier.png';
import bootstrap from '../images/bootstrap.png';


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
			
			<Typography variant='h3' className='page-title'>{data.pageProjects.project}</Typography>
			<div className='main-projects'>
				<div className='card'>
					<img className='card-image' src={gpt} alt="chat gpt" />
					<Typography variant='h4' component="div">{data.pageProjects.projects[0].title}</Typography>
					<Typography variant='subtitle1'className='stack'>{data.pageProjects.projects[0].stack}</Typography>
					<Typography variant='body1'>{data.pageProjects.projects[0].features}</Typography>
					<a href={data.pageProjects.projects[0].link} target="blank"><button>{data.pageProjects.visit}</button></a>
				</div>
				<div className='card'>
					<img className='card-image' src={eventplanner} alt="" />
					<Typography variant='h4' component="div">{data.pageProjects.projects[1].title}</Typography>
					<Typography variant='subtitle1'className='stack'>{data.pageProjects.projects[1].stack}</Typography>
					<Typography variant='body1'>{data.pageProjects.projects[1].features}</Typography>
					<a href={data.pageProjects.projects[1].link} target="blank"><button>{data.pageProjects.visit}</button></a>
				</div>
				<div className='card'>
					<img className='card-image' src={glossary} alt="developer glossary" />
					<Typography variant='h4' component="div">{data.pageProjects.projects[2].title}</Typography>
					<Typography variant='subtitle1'className='stack'>{data.pageProjects.projects[2].stack}</Typography>
					<Typography variant='body1'>{data.pageProjects.projects[2].features}</Typography>
					<a href={data.pageProjects.projects[2].link} target="blank"><button>{data.pageProjects.visit}</button></a>
				</div>
				<div className='card'>
					<img className='card-image' src={angularshop} alt="online shop" />
					<Typography variant='h4' component="div">{data.pageProjects.projects[3].title}</Typography>
					<Typography variant='subtitle1'className='stack'>{data.pageProjects.projects[3].stack}</Typography>
					<Typography variant='body1'>{data.pageProjects.projects[3].features}</Typography>
					<a href={data.pageProjects.projects[3].link} target="blank"><button>{data.pageProjects.visit}</button></a>
				</div>
				<div className='card'>
					<img className='card-image' src={boredapp} alt="" />
					<Typography variant='h4' component="div">{data.pageProjects.projects[4].title}</Typography>
					<Typography variant='subtitle1'className='stack'>{data.pageProjects.projects[4].stack}</Typography>
					<Typography variant='body1'>{data.pageProjects.projects[4].features}</Typography>
					<a href={data.pageProjects.projects[4].link} target="blank"><button>{data.pageProjects.visit}</button></a>
				</div>
				<div className='card'>
					<img className='card-image' src={stopwatch} alt="" />
					<Typography variant='h4' component="div">{data.pageProjects.projects[5].title}</Typography>
					<Typography variant='subtitle1'className='stack'>{data.pageProjects.projects[5].stack}</Typography>
					<Typography variant='body1'>{data.pageProjects.projects[5].features}</Typography>
					<a href={data.pageProjects.projects[5].link} target="blank"><button>{data.pageProjects.visit}</button></a>
				</div>
				<div className='card'>
					<img className='card-image' src={tictactoe} alt="" />
					<Typography variant='h4' component="div">{data.pageProjects.projects[6].title}</Typography>
					<Typography variant='subtitle1'className='stack'>{data.pageProjects.projects[6].stack}</Typography>
					<Typography variant='body1'>{data.pageProjects.projects[6].features}</Typography>
					<a href={data.pageProjects.projects[6].link} target="blank"><button>{data.pageProjects.visit}</button></a>
				</div>
				<div className='card'>
					<img className='card-image' src={calculator} alt="calculator" />
					<Typography variant='h4' component="div">{data.pageProjects.projects[7].title}</Typography>
					<Typography variant='subtitle1'className='stack'>{data.pageProjects.projects[7].stack}</Typography>
					<Typography variant='body1'>{data.pageProjects.projects[7].features}</Typography>
					<a href={data.pageProjects.projects[7].link} target="blank"><button>{data.pageProjects.visit}</button></a>
				</div>
				<div className='card'>
					<img className='card-image' src={jonglier} alt="" />
					<Typography variant='h4' component="div">{data.pageProjects.projects[8].title}</Typography>
					<Typography variant='subtitle1'className='stack'>{data.pageProjects.projects[8].stack}</Typography>
					<Typography variant='body1'>{data.pageProjects.projects[8].features}</Typography>
					<a href={data.pageProjects.projects[8].link} target="blank"><button>{data.pageProjects.visit}</button></a>
				</div>
				<div className='card'>
					<img className='card-image' src={bootstrap} alt="" />
					<Typography variant='h4' component="div">{data.pageProjects.projects[9].title}</Typography>
					<Typography variant='subtitle1'className='stack'>{data.pageProjects.projects[9].stack}</Typography>
					<Typography variant='body1'>{data.pageProjects.projects[9].features}</Typography>
					<a href={data.pageProjects.projects[9].link} target="blank"><button>{data.pageProjects.visit}</button></a>
				</div>
			</div>
		</div>
	);
};