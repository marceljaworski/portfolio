import data from "../content/data.json";

export const PageProjects = () => {
	return (
		<div className="main-projects">
			<p>{data.pageProjects.paragraph}</p>
			<ul>
				<li><a href="https://event.ella-rotari.com/" target="blank">Event Planner</a></li>
				<li><a href="https://chat-gpt-clone-mj6c.onrender.com/" target="blank">ChatGPT clone</a></li>
				<li><a href="https://glossary-marceljaworski.vercel.app/" target="blank">Web Developer Glossary</a></li>
				<li><a href="https://angular-online-shop.vercel.app/" target="blank">Angular online shop</a></li>
				<li><a href="https://bored-api-marceljaworski.vercel.app/" target="blank">Bored App API</a></li>
				<li><a href="https://stopwatch-jsx.netlify.app/" target="blank">Stopwatch</a></li>
				<li><a href="https://tic-tac-toe-marceljaworski.vercel.app/" target="blank">Angular tic-tac-toe game</a></li>
				<li><a href="https://jsxcalculator.netlify.app/" target="blank">React Calculator</a></li>
				<li><a href="https://marceljaworski.de/" target="blank">My Personal Web-seite</a></li>
			</ul>
		</div>
	);
};