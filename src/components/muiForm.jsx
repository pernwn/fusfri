// Lavet af Victoria

import { Box, Button, Checkbox, FormControlLabel, FormHelperText, Grid, InputLabel, ListItemText, MenuItem, OutlinedInput, Select, Snackbar, TextField, useTheme } from "@mui/material";
import { forwardRef, useState } from "react";
import emailjs from "@emailjs/browser";
import MuiAlert from '@mui/material/Alert';

// Konstanter til brug i Select-komponenten.
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

// Liste over institutioner og funktion til at styles valgte elementer i Select-komponenten.
const instis = ['Friskole', 'Børnehave', 'Vuggestue'];

function getStyles(insti, instiName, myTheme) {
    return {
        fontWeight:
            instiName.indexOf(insti) === -1
                ? myTheme.typography.fontWeightRegular
                : myTheme.typography.fontWeightMedium,
    };
}

const Alert = forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

// Form-komponenten, der håndterer formulardata og sender e-mail via emailjs.
const Form = () => {
    const myTheme = useTheme();
    const [instiName, setInstiName] = useState([]);
    const [successOpen, setSuccessOpen] = useState(false);
    const [errorOpen, setErrorOpen] = useState(false);
    const isSelectValid = instiName.length > 0;

    const [navn, setNavn] = useState('');
    const [email, setEmail] = useState('');
    const [tel, setTel] = useState('');
    const [besked, setBesked] = useState('');



    // Håndterer ændringer i valgte institutioner i Select-komponenten.
    const handleSelect = (event) => {
        const {
            target: { value },
        } = event;

        setInstiName(
            typeof value == 'string' ? value.split(',') : value,
        );
    }




    // Håndterer formularens indsendelse og sender e-mail via emailjs.
    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            // Opretter et objekt med formulardataene
            const formData = new FormData(e.target);

            // Definérer emailjs-template-id, user-id og eventuelt service-id
            const templateParams = {
                navn: formData.get('navn'),
                email: formData.get('email'),
                tel: formData.get('tel'),
                besked: formData.get('besked'),
            };

            // Kalder emailjs.send funktionen med service-id og template-id fra emailjs.com
            const response = await emailjs.send('service_mknss4q', 'template_epebzig', templateParams, 'S36HfJxUCK2S6UGOc');

            // Check if the email was sent successfully
            if (response.status === 200) {
                // Handlinger efter succesfuld afsendelse og viser bekræftelsesbesked
                setSuccessOpen(true);
                setErrorOpen(false);
            } else {
                // Behandle fejl, f.eks. vis en fejlbesked til brugeren
                throw new Error('Fejl ved afsendelse af besked');
            }
        } catch (error) {
            console.error('Error sending email:', error);
            // Behandle fejl, f.eks. vis en fejlbesked til brugeren
            setErrorOpen(true);
            setSuccessOpen(false);
        }
    };

    return (
        <>
            <Box component="form" onSubmit={(e) => handleSubmit(e)} sx={{ backgroundColor: myTheme => myTheme.palette.background.paper, p: 4, borderRadius: "1em" }}>
                <Grid container spacing={2}>
                    {/* Inputfelter til navn, e-mail, telefonnummer og besked. */}
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

                    {/* Select-komponenten for at vælge ønskede institution(er). */}
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
                            required

                        >
                            {/* Mapping over institutioner for at oprette MenuItem-komponenter. */}
                            {instis.map((insti) => (
                                <MenuItem

                                    key={insti}
                                    value={insti}
                                    style={getStyles(insti, instiName, myTheme)}
                                >
                                    <Checkbox checked={instiName.indexOf(insti) > -1} />
                                    <ListItemText primary={insti} />
                                </MenuItem>
                            ))}
                        </Select>
                        {!isSelectValid && (
                            <FormHelperText error>Vælg mindst én institution</FormHelperText>
                        )}
                    </Grid>

                    {/* Multilinetekstfelt til besked. */}
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

                    {/* Checkbox til accept af opbevaring af oplysninger. */}
                    <Grid item xs={12}>
                        <FormControlLabel required
                            control={
                                <Checkbox value="allowInformationStorage" color="secondary" />}
                            label="Hvis nødvendigt, accepterer jeg at Fusfri gemmer mine oplysninger til fremtidig brug."
                        />
                    </Grid>

                </Grid>

                {/* Knappen til at sende formularen. */}
                <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{ mt: 3, mb: 2, backgroundColor: myTheme => myTheme.palette.primary.main }}
                >
                    Send
                </Button>
            </Box>
            {/* Snackbar for success */}
            <Snackbar open={successOpen} autoHideDuration={2000} onClose={() => setSuccessOpen(false)} >
                <Alert sx={{ width: '100%' }} severity="success">Beskeden er sendt!</Alert>
            </Snackbar>

            {/* Snackbar for error */}
            <Snackbar open={errorOpen} autoHideDuration={2000} onClose={() => setErrorOpen(false)} >
                <Alert sx={{ width: '100%' }} severity="error">Fejl ved afsendelse af besked</Alert>
            </Snackbar>
        </>
    );
}

export default Form;
