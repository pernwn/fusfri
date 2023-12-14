import { Box, Button, Checkbox, FormControlLabel, Grid, InputLabel, ListItemText, MenuItem, OutlinedInput, Select, TextField, useTheme } from "@mui/material";
import { useState } from "react";
import { toast } from "react-toastify";
import emailjs from "@emailjs/browser";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
    PaperProps: {
        style: {
            maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
            width: 250,
        },
    },
};

const instis = [
    'Friskole',
    'Børnehave',
    'Vuggestue',
];

function getStyles(insti, instiName, myTheme) {
    return {
        fontWeight:
            instiName.indexOf(insti) === -1
                ? myTheme.typography.fontWeightRegular
                : myTheme.typography.fontWeightMedium,
    };
}


const Form = () => {
    const myTheme = useTheme();
    const [instiName, setInstiName] = useState([])

    const [navn, setNavn] = useState('');
    const [email, setEmail] = useState('');
    const [tel, setTel] = useState('');
    const [besked, setBesked] = useState('');
    const [valg, setValg] = useState('');

    const handleSelect = (event) => {
        const {
            target: { value },
        } = event;

        setInstiName(
            typeof value == 'string' ? value.split(',') : value,
        )
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Opretter et objekt med formulardataene
        const formData = {
            navn, email, tel, besked, valg,
        };

        try {
            // Sender formulardataene til backend
            const response = await emailjs.send("service_s0rma4r", "template_tyq0pbv", formData, "Bd-JEsYHH89M9RpTm")

            if (response.ok) {
                // Formularen blev sendt succesfuldt
                console.log('Beskeden blev sendt!');
                // Tilføj eventuelle yderligere handlinger efter succes
            } else {
                // Håndter fejl ved formularafsendelse
                console.error('Fejl ved afsendelse af besked');
            }
        } catch (error) {
            console.error('Der opstod en fejl:', error);
        }

        toast.success("E-mailen er sendt", {
            position: "bottom-right",
            autoClose: 3000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
        });

    }



    return (
        <Box component="form" noValidate onSubmit={handleSubmit} sx={{ backgroundColor: myTheme => myTheme.palette.background.paper, p: 4, borderRadius: "1em" }}>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <TextField
                        autoComplete="given-name"
                        required
                        fullWidth
                        id="firstName"
                        label="Navn"
                        autoFocus
                        value={navn}
                        onChange={(e) => setNavn(e.target.value)}
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        required
                        fullWidth
                        id="email"
                        label="E-mail"
                        name="email"
                        autoComplete="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        required
                        fullWidth
                        name="phone-number"
                        label="Telefonnummer"
                        type="phone-number"
                        id="phone-number"
                        autoComplete="phonenumber"
                        value={tel}
                        onChange={(e) => setTel(e.target.value)}
                    />
                </Grid>

                <Grid item xs={12}>
                    <InputLabel id="demo-multiple-checkbox-label">Vælg ønsket institution(er)</InputLabel>
                    <Select
                        labelId="demo-multiple-checkbox-label"
                        id="demo-multiple-checkbox"
                        multiple
                        value={instiName}
                        onChange={handleSelect}
                        input={<OutlinedInput label="Tag" />}
                        renderValue={(selected) => selected.join(', ')}
                        MenuProps={MenuProps}
                        fullWidth

                    >
                        {instis.map((insti) => (
                            <MenuItem
                                key={insti}
                                value={insti && valg}
                                style={getStyles(insti, instiName, myTheme)}
                                onChange={(e) => setValg(e.target.value)}
                            >
                                <Checkbox checked={instiName.indexOf(insti) > -1} />
                                <ListItemText primary={insti} />
                            </MenuItem>
                        ))}
                    </Select>
                </Grid>

                <Grid item xs={12}>
                    <TextField
                        fullWidth
                        id="outlined-multiline-static"
                        label="Besked"
                        multiline
                        rows={4}
                        required
                        placeholder="Skriv din besked her eller kontakt os for en uforpligtende snak."
                        value={besked}
                        onChange={(e) => setBesked(e.target.value)}
                    />
                </Grid>

                <Grid item xs={12}>
                    <FormControlLabel
                        control={<Checkbox value="allowInformationStorage" color="secondary" />}
                        label="Hvis nødvendigt, accepterer jeg at Fusfri gemmer mine oplysninger til fremtidig brug."
                    />
                </Grid>

            </Grid>
            <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2, backgroundColor: myTheme => myTheme.palette.primary.main }}
            >
                Send
            </Button>

        </Box>

    )
}

export default Form 