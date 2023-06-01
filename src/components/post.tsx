export const Post = ({post}) => {
    return (
        <article className="main">
            <h2>{post.title}</h2>
            <p>{post.description}</p>
            <ul>
                {post.steps.map((el: any, i: any)=> {
                    return <li key={i}><p>{el}</p></li>
                })}
            </ul>
        </article>
    )
}