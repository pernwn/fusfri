import leg from "../assets/fusfri-billeder/fus-friskolen-leg-1280-06.jpeg"
import gaard from "../assets/fusfri-billeder/fus-friskolen-leg-1280-05.jpeg"
import gynge from "../assets/fusfri-billeder/fus-friskolen-leg-1280-01.jpeg"
import dreng from "../assets/fusfri-billeder/fusfri-vuggestu-leg-1280px_6.jpeg"
import basket from "../assets/fusfri-billeder/fus-friskolen-leg-1280-08.jpeg"
import corn from "../assets/fusfri-billeder/fus-friskolen-leg-1280-02.jpeg"
import { useEffect, useRef, useState } from "react"
import { CardProp, ScrollBtn } from "./buttons"
import { Box, Stack, Typography } from "@mui/material"

const cardList = [
    {
        id:1,
        img: {gaard},
        title: "Friskolen",
        cardTitle: "Det sker på friskolen...",
        body:"Fussingø-Egnens Friskole, et forældredrevet undervisningssted fra børnehaveklasse til og med 8. klasse, stræber efter at skabe et trygt bindeled mellem det lille familiære fællesskab og det større skole- og samfundsfællesskab.",
        href:"*"
    },
    {
        id:2,
        img: {leg},
        title: "Samarbejde",
        cardTitle: "Styrkende samarbejde i fællesskabet",
        body: "Vi tror på, at stærke relationer og samarbejde er grundlaget for et sundt fællesskab. Gennem forskellige initiativer og begivenheder fremmer vi positivt samarbejde mellem elever, forældre og skolepersonalet.",
        href: "*"
    },
    {
        id:3,
        img: {dreng},
        title: "Børnehaven",
        cardTitle: "Oplev glæden i vores børnehave",
        body: "Vores børnehave er et inspirerende miljø, hvor børnene udforsker verden omkring dem gennem leg, kreativitet og sociale aktiviteter. Vi vægter trivsel og læring i et trygt og sjovt miljø.",
        href: "*"
    },
    {
        id:4,
        img: {gynge},
        title: "Fritidsaktiviteter",
        cardTitle: "Sjove og lærerige fritidsaktiviteter",
        body: "Vores udvalg af fritidsaktiviteter giver børn og unge mulighed for at udforske deres interesser og udvikle nye færdigheder. Fra kunst og håndværk til sport og leg, er der altid noget spændende at deltage i efter skoletid.",
        href: "*"
    },
    {
        id:5,
        img: {basket},
        title: "Aktiviteter",
        cardTitle: "Spændende aktiviteter for alle",
        body: "Uanset om det er kulturelle arrangementer, sport, eller fællesskabsaktiviteter, tilbyder vi en bred vifte af spændende aktiviteter for alle aldersgrupper. Find noget, der passer til dine interesser og deltag i fællesskabet!",
        href: "*"
    },
    {
        id:6,
        img: {corn},
        title: "Naturværksted",
        cardTitle: "Udforsk naturen omkring os",
        body: "Vores naturværksted giver eleverne mulighed for at udforske og forstå den omkringliggende natur. Gennem udendørsaktiviteter, ekskursioner og praktiske projekter opfordrer vi til en dybere forbindelse med naturen og fremmer bæredygtige principper.",
        href: "*"
    },
]

export default function ScrollCardFunction(){
    const scrollableRef = useRef(null);
    const [isScrollVisible, setIsScrollVisible] = useState(false);

    useEffect(() => {
        checkScroll();
      }, []);

      const checkScroll = () => {
        if (
          scrollableRef &&
          scrollableRef.current &&
          scrollableRef.current.scrollWidth > scrollableRef.current.clientWidth
        ) {
          setIsScrollVisible(true);
        } else {
          setIsScrollVisible(false);
        }
      };

      const onScroll = (offset) => {
        if (scrollableRef) {
          scrollableRef.current.scrollLeft += offset;
        }
      };

      return (
        <Box sx={{ height: "70vh", width: "100%", textAlign: "center"}}>
            {/* TODO: arrow button - Sektion med forskellige kort med indhold om indblik i Fusfri's dagligdag */}
          <Typography variant="h3">Indblik i Fusfri&apos;s dagligdag</Typography>
          {/* Kort med information om Friskolen */}
          <Stack ref={scrollableRef} direction={"row"} spacing={4} sx={{ overflowX: "auto", width: "100%", p: "2% 4%", scrollbarColor: "transparent"}}>
              {cardList.map((content) => {
                return <CardProp item={content} key={content.id} />;
              })}

            {isScrollVisible ? <ScrollBtn onScroll={onScroll} /> : null}
          </Stack>
        </Box>
      );
    }



