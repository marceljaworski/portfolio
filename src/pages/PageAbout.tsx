import avatar from '../images/profil-bild.jpg';
import './PageAbout.scss';

// import github from "../images/github-142-svgrepo-com.svg";
import { AppContext } from '../AppContext';
import { useContext } from 'react';
import { Typography } from "@mui/material";

export const PageAbout = () => {
	const { data } = useContext(AppContext);

	return (
		<div className="main main-about">
			
			<header className="headerAbout">
			
				<img src={avatar} alt="Avatar" className="avatar"></img>
				<div className="header-content">
					
					<Typography variant="h5">{data.pageAbout.developer}</Typography>
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
					<Typography className='page-title' variant="h3">{data.pageAbout.about}</Typography>
				</div>
			</header>
			<article>
				{data.pageAbout.paragraph.map((el: any, i:any) => {
					return (
						<>
							<p className="about-text"key={i}>{el}</p><br/>
						</>
						
					)
				})}
			</article>
		</div>
	);
};