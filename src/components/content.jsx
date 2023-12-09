
import parse from "html-react-parser";
import '../App.css'
import { Paper, Stack, Typography } from "@mui/material";
import { useEffect, useState } from "react";




export const Content = ({post}) => {
    let image = "https://www.wordpress.vicw.dk/wp-json/wp/v2/posts";

    if (post._embedded && post._embedded["wp:featuredmedia"]) {
        image = post._embedded["wp:featuredmedia"][0].source_url;
    }

    return (
        <article>
            <span>{parse(post.title.rendered)}</span>
            {parse(post.content.rendered)}

            <span>{post.acf.kontakt ? <Typography variant="h1">{post.acf.kontakt}</Typography> : <h1>Nothing</h1>}</span>
        </article>
    );

    /*  <img src={image} alt={post.title.rendered}/> */
}

export const HeroContent = (props, {postId}) => {

    const [posts, setPosts] = useState(null);

    useEffect(() => {
        const getPosts = async () => {
            try {
                const response = await fetch(`https://www.wordpress.vicw.dk/wp-json/wp/v2/posts/${postId}?_embed`);
                if (!response.ok) {
                    throw new Error('Network response was not ok.');
                }
                const data = await response.json();
                setPosts(data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        getPosts();
    }, [postId]);

    return (
        <Stack>
            {posts && (
                <Paper>
                    <Typography variant="h2" name={posts.title.rendered} key={postId}></Typography>
                </Paper>
            )}

        </Stack>
    )
}

