import avatar from "../images/profil-bild.jpg";
import data from "../content/data.json"
export const PageAbout = () => {
	return (
		<>
			<div className="paragraph">
				<img src={avatar} alt="Avatar" className="avatar"></img>
				{data.pageAbout.paragraph.map((el, i) => {
					return (
						<p>{el}</p>
					)
				})}
			</div>
			
		</>
	);
};