
import {  Card, CardContent, CardActions, Typography, CardHeader, Avatar} from '@mui/material';
import { AppContext } from '../AppContext';
import { useContext } from 'react';
import { red } from '@mui/material/colors';

export const PageProjects = () => {
	const { data } = useContext(AppContext);
	return (
		<div className="main main-projects">
			<p>{data.pageProjects.paragraph}</p>
				<Card sx={{ maxWidth: 345 }}>
					<CardHeader
						avatar={
							<Avatar sx={{ bgcolor: red[500]}}>E</Avatar>
						}
						title="Event Planner"
						subheader="April 04, 2023"
						
					/>

					<CardContent>
					
						 <a href="https://event.ella-rotari.com/" target="blank"><Typography>https://event.ella-rotari.com/</Typography></a>

					
						<Typography variant='h3'>Event Planner</Typography>
						<Typography variant='h6'>Stack</Typography>
						
						<Typography> React(Vite), Auth0, Firebase, SendGrid, SWR, Stripe, Express, MongoDB, Mongoose.</Typography>
						<Typography variant='h6'>Features</Typography>
						
						<Typography>Real-Live Chat, Admins Dashboard to control the Data, Auth0, Online payment, etc.</Typography>
					</CardContent>
				</Card>
				<a href="https://chat-gpt-clone-mj6c.onrender.com/" target="blank">ChatGPT clone</a>
				<a href="https://glossary-marceljaworski.vercel.app/" target="blank">Web Developer Glossary</a>
				<a href="https://angular-online-shop.vercel.app/" target="blank">Angular online shop</a>
				<a href="https://bored-api-marceljaworski.vercel.app/" target="blank">Bored App API</a>
				<a href="https://stopwatch-jsx.netlify.app/" target="blank">Stopwatch</a>
				<a href="https://tic-tac-toe-marceljaworski.vercel.app/" target="blank">Angular tic-tac-toe game</a>
				<a href="https://jsxcalculator.netlify.app/" target="blank">React Calculator</a>
				<a href="https://marceljaworski.github.io/marceljaworski/" target="blank">My first personal website</a>
			
		</div>
	);
};