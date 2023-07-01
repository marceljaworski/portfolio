import './PageProjects.scss';
import { CardContent, Typography, CardHeader, Avatar} from '@mui/material';
import { AppContext } from '../AppContext';
import { useContext } from 'react';
import { orange } from '@mui/material/colors';

interface project {
	title: string,
	description: string,
	stack: string,
	features: string,
	link: string,
	date: string
}

export const PageProjects = () => {
	const { data } = useContext(AppContext);
	return (
		<div className="main main-projects">
			{/* <p>{data.pageProjects.paragraph}</p> */}
				{data.pageProjects.projects.map((item: project) =>
					<div className='card'>
					<CardHeader
						avatar={
							<Avatar sx={{ bgcolor: orange[500]}}>E</Avatar>
						}
						title={item.title}
						subheader={item.date}
						
					/>

					<CardContent>
					
						 <a href={item.link} target="blank"><Typography className='card-link'>{item.link}</Typography></a>

					
						<Typography variant='h4'>{item.title}</Typography>
						<Typography variant='h6'>Stack</Typography>
						
						<Typography>{item.stack}</Typography>
						<Typography variant='h6'>Features</Typography>
						
						<Typography>{item.features}</Typography>
					</CardContent>
				</div>
				)}
			
		</div>
	);
};