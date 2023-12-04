
import parse from "html-react-parser";

export default function Content({post}){
    let image = "https://www.wordpress.vicw.dk/wp-json/wp/v2/posts";

    if (post._embedded && post._embedded["wp:featuredmedia"]) {
        image = post._embedded["wp:featuredmedia"][0].source_url;
    }

    return (
        <article>

            <h2>{parse(post.title.rendered)}</h2>
            {parse(post.content.rendered)}
            <img src={image} alt={post.title.rendered} />
            
        </article>
    );
}