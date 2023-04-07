import styled, {css} from 'styled-components/native';

export const Button = styled.TouchableOpacity`
  ${({theme}) => css`
    background-color: ${theme.colors.secondary};
    border-radius: 50px;
    padding: 10px;
    margin-top: 5px;
    width: 100%;
    opacity: ${props => (props.disabled === true ? '0.5' : '1')};
  `}
`;

export const TextButton = styled.Text`
  ${({theme}) => css`
    color: ${theme.colors.white};
    text-align: center;
    font-size: 16px;
    text-transform: uppercase;
    font-family: ${theme.font.family.semibold};
  `}
`;
