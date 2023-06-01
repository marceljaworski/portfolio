
import './PageWelcome.scss';
import { Post } from '../components/post';
import data from '../content/data.json'

export const PageWelcome = () => {
	return (
		<>
            <section className="main-programer__text-container--escaped">
                      <p className="main-programer__text--escaped">
                      &lt;main class=&quot;main main-programer&quot;&gt;
                      &lt;section class=&quot;main-programer__text-container&quot;&gt;
                      &lt;h1 class=&quot;main-programer__title&quot;&gt;&lt;span class=&quot;element&quot;&gt;&amp;lt;h1 &lt;/span&gt;&lt;span class=&quot;class&quot;&gt;class=&lt;/span&gt;&lt;span class=&quot;wert&quot;&gt;&quot;main-about__title&quot;&lt;/span&gt;&lt;span class=&quot;element&quot;&gt;&amp;gt;&lt;/span&gt;Marcel Jaworski&lt;span class=&quot;element&quot;&gt;&amp;lt;/h1&amp;gt;&lt;/span&gt;&lt;/h1&gt;
                      </p>
            </section>
            <section className="main-programer__text-container">
                <h1 className="main-programer__title"><span className="element">&lt;h1 </span><span className="class">class=</span><span className="wert">"main-about__title"</span><span className="element">&gt;</span>Marcel Jaworski<span className="element">&lt;/h1&gt;</span></h1>
                <p className="main-programer__text"><span className="commentar">/*</span> Junior Full Stack Developer <span className="commentar">*/</span></p>
            </section>
            <section className="main-programer__text-container--escaped">
                <p className="main-programer__text--escaped">
                    &lt;p class=&quot;main-programer__text&quot;&gt;&lt;span class=&quot;commentar&quot;&gt;/*&lt;/span&gt; Junior Full Stack Developer &lt;span class=&quot;commentar&quot;&gt;*/&lt;/span&gt;&lt;/p&gt;
                    &lt;/section&gt;
                    &lt;div class=&quot;programer-icon__container&quot;&gt;
                    &lt;i class=&quot;fa-brands fa-html5&quot;&gt;&lt;/i&gt;
                    &lt;i class=&quot;fa-brands fa-css3-alt&quot;&gt;&lt;/i&gt;
                    &lt;i class=&quot;fa-brands fa-sass&quot;&gt;&lt;/i&gt;
                    &lt;i class=&quot;fa-brands fa-js&quot;&gt;&lt;/i&gt;
                    &lt;/div&gt;
                    &lt;/main&gt;
                </p>
            </section>
            {data.pageWelcome.posts.map((el: any, i: any) => {
						return (
                            <Post post={el} key={i}/>   
						)
					})}
		</>
	);
};