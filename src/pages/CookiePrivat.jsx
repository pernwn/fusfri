import { Box, Container, Paper, Stack, Typography } from "@mui/material"
import { useEffect, useState } from "react";
import Content from "../components/content";




export default function CookiePrivat() {

    const postIDs = [210, 213];
    return (
        <Container component="main" sx={{display:"flex", alignItems:"center", flexDirection:"column", justifyContent:"space-between"}}>
            <Typography variant="h2" gutterBottom>Cookies- og Privatlivspolitik</Typography>
            <Stack spacing={8} sx={{height:"auto"}} direction={"row"}>
                {postIDs.map(postID => (
                    <Typography key={postID}>
                        <Content postId={postID} />
                    </Typography>
                ))}
            </Stack>

        </Container>
    )
}