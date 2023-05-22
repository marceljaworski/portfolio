import avatar from "../images/profil-bild.jpg";
// import github from "../images/github-142-svgrepo-com.svg";
import data from "../content/data.json";
export const PageAbout = () => {
	return (
		<>
			<div className="paragraph">
				<header className="headerAbout">
					<img src={avatar} alt="Avatar" className="avatar"></img>
					<div className="header-content">
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
					

				</header>
				{data.pageAbout.paragraph.map((el, i) => {
					return (
						<p key={i}>{el}</p>
					)
				})}
			</div>
			
		</>
	);
};