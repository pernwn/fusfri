import WordPressFag from "../components/fag";
import { Typography } from '@mui/material';

export default function Friskole() {
    const postIDs = [28, 149];

    return( 
        <main>
            <Typography variant="h1">Hej</Typography>

            <div>
                {postIDs.map(postID => (
                    <WordPressFag key={postID} postId={postID} />
                ))}
            </div>

            <Typography variant="body">Lorem ipsum dolor sit amet consectetur adipisicing elit. Error, earum! Exercitationem consectetur assumenda, ad aut blanditiis ipsum obcaecati voluptate praesentium fuga, sint repellendus unde. Eius praesentium dolorum deserunt voluptates assumenda. </Typography>
        </main>
    );
}
