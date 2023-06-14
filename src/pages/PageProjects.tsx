
import {  Card, CardContent, CardActions, Typography, CardHeader, Avatar} from '@mui/material';
import { AppContext } from '../AppContext';
import { JSXElementConstructor, ReactElement, ReactFragment, ReactPortal, useContext } from 'react';
import { red } from '@mui/material/colors';

// import Grid from '@mui/material/Grid';
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
			<p>{data.pageProjects.paragraph}</p>
				{data.pageProjects.projects.map((item: project) =>
					<Card sx={{ maxWidth: 345 }}>
					<CardHeader
						avatar={
							<Avatar sx={{ bgcolor: red[500]}}>E</Avatar>
						}
						title={item.title}
						subheader={item.date}
						
					/>

					<CardContent>
					
						 <a href={item.link} target="blank"><Typography>{item.link}</Typography></a>

					
						<Typography variant='h4'>{item.title}</Typography>
						<Typography variant='h6'>Stack</Typography>
						
						<Typography>{item.stack}</Typography>
						<Typography variant='h6'>Features</Typography>
						
						<Typography>{item.features}</Typography>
					</CardContent>
				</Card>
				)}
				
				
				<a href="https://angular-online-shop.vercel.app/" target="blank">Angular online shop</a>
				<a href="https://bored-api-marceljaworski.vercel.app/" target="blank">Bored App API</a>
				<a href="https://stopwatch-jsx.netlify.app/" target="blank">Stopwatch</a>
				<a href="https://tic-tac-toe-marceljaworski.vercel.app/" target="blank">Angular tic-tac-toe game</a>
				<a href="https://jsxcalculator.netlify.app/" target="blank">React Calculator</a>
				<a href="https://marceljaworski.github.io/marceljaworski/" target="blank">My first personal website</a>
			
		</div>
	);
};