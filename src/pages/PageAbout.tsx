import avatar from "../images/profil-bild.jpg";
// import github from "../images/github-142-svgrepo-com.svg";
import { AppContext } from '../AppContext';
import { useContext } from 'react';
import { Typography } from "@mui/material";

export const PageAbout = () => {
	const { data } = useContext(AppContext);
	return (
		<>
			<div className="main main-about">
				<header className="headerAbout">
				
					<img src={avatar} alt="Avatar" className="avatar"></img>
					<div className="header-content">
						
						<Typography variant="h5">Full Stack Developer</Typography>
						<div className="subtitle">
							<p>HTML | CSS | JavaScript | Node.js | MongoDB | MySQL</p>
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
				</header>
				<article>
					<Typography variant="h3">About</Typography>
				
					{data.pageAbout.paragraph.map((el: any, i:any) => {
						return (
							<>
								<p key={i}>{el}</p>
							</>
							
						)
					})}
				

				</article>
			</div>
			
		</>
	);
};