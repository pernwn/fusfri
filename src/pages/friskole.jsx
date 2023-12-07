import WordPressFag from "../components/fag";
import { Stack, Typography } from '@mui/material';
import '../styles/rin.css'

export default function Friskole() {
    const postIDs = [28, 149];

    return( 
        <main>
            <Typography variant="h1">Hej</Typography>

            <Stack
                sx={{
                    padding: 50,
                    overflow: 'auto',
                    direction: 'row',
                    gap: 2, // Adds space between items
                }}
            >
                {postIDs.map(postID => (
                    <Stack
                        key={postID}
                        className={`post-${postID}`}
                        sx={{
                            borderRadius: 8, // Rounded corners
                            border: '1px solid #ccc', // Border for the boxes
                            flex: '0 0 auto', // Allow boxes to grow and shrink as needed
                            minWidth: 200, // Minimum width for each box
                            overflow: 'auto', // Enable overflow for content
                            p: 2, // Padding inside each box
                        }}
                    >
                        <WordPressFag postId={postID} />
                    </Stack>
                ))}
            </Stack>
          

            <Typography variant="body">Lorem ipsum dolor sit amet consectetur adipisicing elit. Error, earum! Exercitationem consectetur assumenda, ad aut blanditiis ipsum obcaecati voluptate praesentium fuga, sint repellendus unde. Eius praesentium dolorum deserunt voluptates assumenda. </Typography>
        </main>
    );
}
