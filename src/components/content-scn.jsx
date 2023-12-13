//{ Lavet af Victoria }


import { Typography } from '@mui/material'



import parse from 'html-react-parser'



//TODO: Skal finde ud af bedre måde at hente individuelle – tjek acf og cpt implementering på notion TODO:!!

export default function ContentScn({ post }) {
    
        return(
        
            <article>
                <Typography variant='h3' gutterBottom>{parse(post.title.rendered)}</Typography>
                {parse(post.content.rendered)}
            
            </article>
    
            
        )

}




