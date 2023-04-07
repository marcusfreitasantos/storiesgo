import styled, {css} from 'styled-components/native';

export const InputArea = styled.View`
  ${({theme}) => css`
    background-color: ${theme.colors.grayLight};
    padding: 0 15px;
    width: 100%;
    flex-direction: row;
    align-items: center;
    border-radius: 5px;
    margin: 5px 0;
  `}
`;

export const TextInput = styled.TextInput`
  ${({theme}) => css`
    margin-left: 15px;
    color: ${theme.colors.grayDark};
    width: 100%;
    opacity: ${props => (props.editable ? '1' : '0.5')};
  `}
`;

export const Icon = styled.View`
  max-width: 10%;
`;

export const EyeIcon = styled.TouchableOpacity`
  position: absolute;
  right: 15px;
`;
