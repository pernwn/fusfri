// Lavet af Victoria
// En side med Cookies- og Privatlivspolitik.


import { Container, Stack, Typography } from "@mui/material"
import Content from "../components/content";
import '../styles/vic.css'
import styled from "@emotion/styled";
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import { useState } from "react";

// Styling for custom Accordion-komponenter ved brug af styled fra emotion og MuiAccordion fra Material-UI.
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

// CookiePrivat-komponenten, der indeholder indhold fra Cookies- og Privatlivspolitik.
export default function CookiePrivat() {
    const [expanded, setExpanded] = useState('panel1');
    const privat = [294]; //privatlivspolitik
    const cookie = [295]; //cookies
    const url = "cp"; 

    // Funktion til at håndtere ændringer i accordion-paneller.
    const handleChange = (panel) => (event, newExpanded) => {
        setExpanded(newExpanded ? panel : false);
    };

    return (
        <Container component="main" sx={{ display: "flex", alignItems: "center", flexDirection: "column", justifyContent: "space-between", width: "100%" }}>
            <Stack sx={{ padding: "10em" }}>
                <Typography variant="h2" gutterBottom>Cookies- og Privatlivspolitik</Typography>
                
                {/* Accordion-komponent for Privatlivspolitik */}
                <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                    <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
                        <Typography variant="h5">Privatlivspolitik</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Stack spacing={12} className="cp_content">
                            {privat.map(postID => (
                                <Typography key={postID}>
                                    <Content site={url} postId={postID} />
                                </Typography>
                            ))}
                        </Stack>
                    </AccordionDetails>
                </Accordion>
                
                {/* Accordion-komponent for Cookies */}
                <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
                    <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
                        <Typography variant="h5">Cookies</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Stack spacing={12} className="cp_content">
                            {cookie.map(postID => (
                                <Typography key={postID}>
                                    <Content site={url} postId={postID} />
                                </Typography>
                            ))}
                        </Stack>
                    </AccordionDetails>
                </Accordion>
            </Stack>
        </Container>
    )
}
