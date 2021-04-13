import styled from 'styled-components';
import { HEADER_HEIGHT } from '../../helpers/Theme';

const StyledMain = styled.main`
    min-height: calc(100vh - ${HEADER_HEIGHT});

    p {
        letter-spacing: -0.5px;
    }
`;

const MainContent = ({ children }) => (
    <StyledMain>
        {children}
    </StyledMain>
);

export default MainContent;