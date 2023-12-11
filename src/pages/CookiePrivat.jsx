//{ Lavet af Victoria }



//import { Container, Stack, Typography } from "@mui/material"

import Content from "../components/content";

import '../styles/vic.css'

/*
import styled from "@emotion/styled";
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
*/
import { useEffect, useState } from "react";

/*
const Accordion = styled((props) => (
    <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
    border: `1px solid ${theme.palette.divider}`,
    '&:not(:last-child)': {
        borderBottom: 0,
    },
    '&:before': {
        display: 'none',
    },
}));

const AccordionSummary = styled((props) => (
    <MuiAccordionSummary
        expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem' }} />}
        {...props}
    />
))(({ theme }) => ({
    backgroundColor:
        theme.palette.mode === 'dark'
            ? 'rgba(255, 255, 255, .05)'
            : 'rgba(0, 0, 0, .03)',
    flexDirection: 'row-reverse',
    '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
        transform: 'rotate(90deg)',
    },
    '& .MuiAccordionSummary-content': {
        marginLeft: theme.spacing(1),
    },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
    padding: theme.spacing(2),
    borderTop: '1px solid rgba(0, 0, 0, .125)',
}));

*/
export default function CookiePrivat() {

    /*
        let postTxt = "";
        for(let i = 0; i < posts.length; i++){
            postTxt += posts[i];
        }
    */

    const [posts, setPosts] = useState([]);

    useEffect(() => {
        async function getData() {
            const url = "https://www.wordpress.vicw.dk/wp-json/wp/v2/cp/cookies";
            const response = await fetch(url);
            const data = await response.json();
            setPosts(data);

        }
        getData();
    }, []);


    if(!posts) {
        return <div>Loading...</div>
    }

    /*const [expanded, setExpanded] = useState('panel1');
    const handleChange = (panel) => (event, newExpanded) => {
        setExpanded(newExpanded ? panel : false);
    };*/

    return (
        <section>
            {posts.map(post => (
                <Content key={post.id} post={post} />
            ))}

        </section>

/*
        <Container component="main" sx={{ display: "flex", alignItems: "center", flexDirection: "column", justifyContent: "space-between", width: "100%" }}>
                 <Stack sx={{ padding: "10em" }} >
            <Typography variant="h2" gutterBottom>Cookies- og Privatlivspolitik</Typography>
            
      
                <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                    <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
                        <Typography>Privatlivspolitik</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Stack spacing={12} className="cp_content">
                            {posts.map(post => (
                          
                                    <Content key={post.id} post={post} />

                            ))}
                        </Stack>
                    </AccordionDetails>
                </Accordion>

                <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
                    <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
                        <Typography>Cookies</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Stack spacing={12} className="cp_content">
                            {posts.map(post => (
                                    <Content key={post.id} post={post} />

                            ))}
                        </Stack>
                    </AccordionDetails>
                </Accordion>
            </Stack>

            
                            </Container>*/







    )
}