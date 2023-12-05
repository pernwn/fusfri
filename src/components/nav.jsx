import { ButtonGroup } from "@mui/material";
import { FilledBtn, OutlinedBtn } from "./buttons";

export default function Nav() {
    return (
        <header>
            <nav>
                <ButtonGroup>
                    <FilledBtn name="Hjem" page="/" />
                    <FilledBtn name="Information" page="/information" />
                    <FilledBtn name="Om Fusfri" page="/omFus" />
                    <FilledBtn name="Kontakt" page="/kontakt" />

                    <OutlinedBtn name="Friskole" page="/friskole" />
                </ButtonGroup>
            </nav>
        </header>
    )

}