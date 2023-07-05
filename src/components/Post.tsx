import './Post.scss';

interface Post {
    title: string;
    description: string;
    steps: string[];
}
interface PostProps {
    post: Post;
}


export const Post = ({post}:PostProps) => {
    
    return (
        <article className="main main-post">
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