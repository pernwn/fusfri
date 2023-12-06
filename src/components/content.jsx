
import parse from "html-react-parser";
import '../App.css'



export default function Content({ post }) {
    let image = "https://www.wordpress.vicw.dk/wp-json/wp/v2/posts";

    if (post._embedded && post._embedded["wp:featuredmedia"]) {
        image = post._embedded["wp:featuredmedia"][0].source_url;
    }

    return (
        <article>
            
            <span className="titel">{parse(post.title.rendered)}</span>
            {parse(post.content.rendered)}

          
        </article>
    );

    /*  <img src={image} alt={post.title.rendered}/> */
}