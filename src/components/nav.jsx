import { ButtonGroup } from "@mui/material";
import { FilledBtn, OutlinedBtn } from "./buttons";

export default function Nav() {
    return (
        <header>
            <nav>
                <ButtonGroup>
                    <FilledBtn name="Hjem" page="/" />
                    <FilledBtn name="Friskole" page="/friskole" />
                </ButtonGroup>
            </nav>
        </header>
    )

}