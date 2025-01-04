import styled from 'styled-components/native';

export const ButtonSearch = styled.TouchableHighlight<{$width?: string }>`
    height: 55px;
    width: ${(props)=> props.$width};
    border-radius: 8px;
    align-items: center;
    justify-content: center;
    margin-left: auto;
`;
