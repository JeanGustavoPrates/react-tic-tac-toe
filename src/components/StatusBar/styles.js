import styled from 'styled-components'

const StyledStatusBar = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    height: 50px;
    width: 100%;
    padding: 1em;

    span {
        font-size: 25px;
        color: white;
        font-weight: 300;
        text-transform: uppercase;
    }
`;

export default StyledStatusBar;