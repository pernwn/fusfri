//{ Lavet af Victoria }


import '../App.css'


import parse from 'html-react-parser'


//TODO: Skal finde ud af bedre måde at hente individuelle – tjek acf og cpt implementering på notion TODO:!!

export default function Content({post}){

    return(
        <article>
            <h2>{parse(post.title.rendered)}</h2>
            {parse(post.content.rendered)}
        
        </article>
    )
}


