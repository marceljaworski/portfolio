import avatar from "../images/profil-bild.jpg";
// import github from "../images/github-142-svgrepo-com.svg";
import { AppContext } from '../AppContext';
import { useContext } from 'react';
import { Typography, Paper } from "@mui/material";

export const PageAbout = () => {
	const { data } = useContext(AppContext);
	return (
		<>
			<div className="main main-about">
				<header className="headerAbout">
					<Paper>
					<img src={avatar} alt="Avatar" className="avatar"></img>
					<div className="header-content">
						<Typography variant="h1"/>Full Stack Developer<Typography/>
						<h3>Full Stack Developer</h3>
						<div className="subtitle">
							<p>HTML | CSS | JavaScript | Node.js | MongoDB | SQL</p>
						</div>
						{/* <div className="contacts">
							<a href="https://github.com/marceljaworski" target="_blank" rel="noopener noreferrer">
            					<span className="icon">
            					  <img src={github} alt="GitHub" />
            					</span>
            					<span>GitHub</span>
          					</a>
						</div> */}
					</div>

					</Paper>
					

				</header>
				<article>
				
					{data.pageAbout.paragraph.map((el: any, i:any) => {
						return (
							// <p key={i}>{el}</p>
							<Paper elevation={3} >
								<Typography  sx={{p:1}} key={i}>{el}</Typography>
							</Paper>
							
						)
					})}
				</article>
			</div>
			
		</>
	);
};