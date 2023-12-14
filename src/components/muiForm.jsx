import { Box, Button, Checkbox, FormControl, FormControlLabel, Grid, InputLabel, ListItemText, MenuItem, OutlinedInput, Select, TextField, useTheme } from "@mui/material";
import { useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

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


export default function Form() {
    const myTheme = useTheme();
    const [instiName, setInstiName] = useState([])

    const [formData, setFormData] = useState({
        Navn: "",
        Email: "",
        Mobilnummer: 0,
        Besked: "",
    })

    const handleSelect = (event) => {
        const {
            target: { value },
        } = event;

        setInstiName(
            typeof value == 'string' ? value.split(',') : value,
        )
    }


    const handleChange = (event) => {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value,
        })
    }


    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);

        console.log({
            email: data.get('email'),
            password: data.get('password'),
        });

        toast.success("Emailen er sendt", {
            position: "bottom-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
        });

    }



    return (
        <Box component="form" noValidate onSubmit={handleSubmit} sx={{backgroundColor: myTheme => myTheme.palette.background.paper, p:5, borderRadius: "1em" }}>
            <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                    <TextField
                        autoComplete="given-name"
                        name="firstName"
                        required
                        fullWidth
                        id="firstName"
                        label="Fornavn"
                        autoFocus
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        required
                        fullWidth
                        id="family-name"
                        label="Efternavn"
                        name="family-name"
                        autoComplete="family-name"
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
                    />
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
                                value={insti}
                                style={getStyles(insti, instiName, myTheme)}
                            >
                                <Checkbox checked={instiName.indexOf(insti) > -1} />
                                <ListItemText primary={insti} />
                            </MenuItem>
                        ))}
                    </Select>
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