// Lavet af Victoria
// Søge komponent med styling

import { LinkBtn } from "./buttons";
import SearchIcon from '@mui/icons-material/Search';
import styled from "@emotion/styled";
import { InputBase, alpha } from "@mui/material";
import { useEffect, useState } from "react";

// Styling for søgefeltet.
const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.secondary.main, 0.15),
    '&:hover': {
        backgroundColor: alpha(theme.palette.secondary.main, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(1),
        width: 'auto',
    },
}));

// Styling for søgeikon-wrapper.
const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 1),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}));

// Styling for inputfeltet.
const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    width: '100%',
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        width:'28ch',
    },
}));

// SearchInput-komponenten, der håndterer visning af søgefeltet.
export default function SearchInput() {
    // Set scroll state and scroll event handler
    const [isScrolled, setScrolled] = useState(false);

    // Scroll event handler for at styre søgefeltets udseende ved scrolling.
    const handleScroll = () => window.scrollY > 150 ? setScrolled(true) : setScrolled(false);

    // Tilføjelse af scroll event listener ved komponentens montering og fjernelse ved afmontering.
    useEffect(() => {
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, []);

    // Returnerer JSX for søgefeltet og en knap til "Forældreintra".
    return (
        <div className="searchContainer">
            <Search className={`search-container ${isScrolled && 'search-scrolled'}`}>
                <SearchIconWrapper>
                    <SearchIcon />
                </SearchIconWrapper>
                <StyledInputBase
                    placeholder="Søg..."
                    inputProps={{ 'aria-label': 'search' }}
                />
            </Search>

            <LinkBtn name="Forældreintra" page="*" w="fit-content" className={`btn-container ${isScrolled && 'btn-scrolled'}`} />
        </div>
    )
}
