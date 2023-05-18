import styled, {css} from 'styled-components/native';

export const WarningBar__wrappper = styled.View`
  ${({theme}) => css`
    flex-direction: row;
    justify-content: center;
    padding: 8px;
    background-color: ${theme.colors.primaryDark};
  `}
`;

export const WarningBar__text = styled.Text`
  ${({theme}) => css`
    color: ${theme.colors.grayLight};
    margin-right: 8px;
    font-size: 12px;
  `}
`;

export const WarningBar__btn = styled.TouchableOpacity`
  ${({theme}) => css`
    color: ${theme.colors.secondary};
  `}
`;

export const WarningBar__btnText = styled.Text`
  ${({theme}) => css`
    color: ${theme.colors.secondary};
    text-transform: uppercase;
    font-family: ${theme.font.family.bold};
    font-size: 12px;
  `}
`;
