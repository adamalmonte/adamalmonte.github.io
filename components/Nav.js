import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { TABLET, DESKTOP, colors } from '../helpers/Theme';

const taglines = [
    "📍 Born and raised in Uptown NYC",
    "🇩🇴 Proud son of immigrants",
    "🧉 Makes a mean coquito around the holidays",
    "👟 Owns an extensive sneaker collection",
    "🎮 Avid gamer since Pokémon Yellow",
    "🧠 Apt learner",
    "💻 Mom's tech support since 2003",
    "🍜 Ramen enthusiast",
    "🍻 A friend to craft beers big and small",
    "📉 Should stay out of the stock market for a while...",
    "🤔 Incessantly curious",
    "🕺🏽 Impeccably stylish",
    // "🤷🏽‍♂️ Still figuring it all out"
  ];

const Header = styled.header`
  padding: 10px;
`;

const Name = styled.h1`
    color: ${colors.primaryLight};
    font-family: 'Righteous', cursive;
    font-size: 24px;
    margin: 0;

    @media all and (min-width: ${TABLET}px){
        font-size: 36px;
    }

    @media all and (min-width: ${DESKTOP}px){
        font-size: 48px;
    }
`;

const Tagline = styled.span`
    background-color: #DCDCDC;
    border-radius: 30px;
    display: inline-block;
    margin-top: 5px;
    padding: 10px 20px;

    @media (max-width: ${TABLET-1}px) {
        display: none;
    } 
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
        <Header>
            <Name>Adam Almonte</Name>
            <Tagline>{selectedTagline}</Tagline>
        </Header>
    );
};

export default Nav;