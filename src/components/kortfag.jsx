//lavet af Rina

import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

export default function FagKort(props) {
    //Ved at bruge props kan vi overføre data eller egenskaber fra det, der kalder FagKort-komponenten, til FagKort-komponenten selv. 
    //Dette gør det muligt at tilpasse det generelle udseende og indhold i hvert kort.
    //Dette betyder at vi kan oprette flere kort med forskellige label, title, subheader, og image, uden at skulle skrive en separat komponent til hvert kort.


    return (
        <Stack direction="row">
            <Card className="compcard"
            sx={{textAlign:"left", p:".4em"}}
            >
                <CardHeader
                    title={props.title}
                />
                <CardMedia
                    component="img"
                    image={props.image}
                    sx={{
                        height: 200,
                        minWidth: 290,
                        borderRadius: "4%",
                        marginBottom: 1.5,
                 

                    }}
                >
                </CardMedia>
                <CardContent >
                    <Typography variant="body2" color="text.secondary"
                    >
                        {props.body}
                    </Typography>

                </CardContent>

            </Card>
        </Stack>
    )
}
