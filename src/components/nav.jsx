import { ButtonGroup } from "@mui/material";
import { OutlinedBtn } from "./buttons";

export default function Nav() {
    return (
        <header>
            <nav>
                <ButtonGroup>
                    <OutlinedBtn name="home" page="/" />
                    <OutlinedBtn name="Friskole" page="/friskole" />
                </ButtonGroup>
            </nav>
        </header>
    )

}