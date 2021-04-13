import styled from 'styled-components';
import { colors } from '../helpers/Theme';

const FooterCopy = styled.span`
    // color: ${colors.primaryLight};
    // font-family: 'Righteous', cursive;
    font-size: 18px;
    margin: 0;
    letter-spacing: -0.5px;
`;

const Footer = ({}) => {
    return (
        <footer>
            <FooterCopy>&copy; Adam Almonte {new Date().getFullYear()}</FooterCopy>
        </footer>
    );
};

export default Footer;