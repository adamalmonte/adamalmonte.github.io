import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { TABLET, DESKTOP, colors } from '../helpers/Theme';

const taglines = [
    "📍 Born and raised in Uptown NYC",
    "🇩🇴 Proud son of immigrants",
    "🧉 Makes a mean coquito around the holidays",
    "👟 Owns an extensive sneaker collection",
    "🎮 Avid gamer ever since Pokémon Yellow",
    "🧠 Apt learner",
    "💻 Family tech support since 2003",
    "🍜 Ramen enthusiast",
    "🍻 A friend to all craft beers, big or small",
    "📉 Should stay out of the stock market for a while...",
    "🤔 Incessantly curious",
    "🕺🏽 Impeccably stylish",
    "🤷🏽‍♂️ Still figuring it all out"
  ];

const Name = styled.h1`
    color: ${colors.primaryLight};
    font-family: 'Righteous', cursive;
    font-size: 24px;
    margin: 0;

    @media all and (min-width: ${TABLET}){
        font-size: 36px;
    }

    @media all and (min-width: ${DESKTOP}){
        font-size: 48px;
    }
`;

const Tagline = styled.span`
    background-color: #DCDCDC;
    border-radius: 30px;
    padding: 10px 20px;
`; // TODO

const getTaglineNumber = () => Math.floor(Math.random() * (taglines.length-1));

const Nav = ({}) => {
    // the randomizer was cute in theory but in practice you end up seeing the same one multiple times
    // might be better to just run thru them in order or randomize the whole list, loop thru, re-randomize
    const [selectedTagline, updateTagline] = useState("Skilled developer with an eye for design");

    useEffect(() => {
        const interval = setInterval(() => {
            updateTagline(taglines[getTaglineNumber()]);
        }, 5000);

        return () => clearInterval(interval);
    }, []);

    return (
        <header>
            <Name>Adam Almonte</Name>
            <Tagline>{selectedTagline}</Tagline>
        </header>
    );
};

export default Nav;