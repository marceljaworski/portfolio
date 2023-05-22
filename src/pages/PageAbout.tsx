import avatar from "../images/profil-bild.jpg";
import data from "../content/data.json"
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