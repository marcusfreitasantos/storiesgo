import styled, {css} from 'styled-components/native';

export const Dropdown__menuWrapper = styled.View`
  position: relative;
  margin: 5px 0;
`;

export const Dropdown__btn = styled.TouchableOpacity`
  ${({theme}) => css`
    background-color: ${theme.colors.grayLight};
    padding: 15px;
    display: flex;
    flex-direction: row;
    align-items: center;
    border-radius: 5px;
  `}
`;

export const Dropdown__menu = styled.View`
  ${({theme}) => css`
    width: 100%;
    height: 100px;
    position: absolute;
    top: 60px;
    left: 0;
    z-index: 300;
    background-color: ${theme.colors.white};
  `}
`;

export const Dropdown__btnText = styled.Text`
  ${({theme}) => css`
    margin-left: 15px;
    color: ${theme.colors.gray};
  `}
`;

export const Dropdown__item = styled.TouchableOpacity`
  ${({theme}) => css`
    border-top-width: 1px;
    border-color: ${theme.colors.grayLight};
    padding: 5px 0;
  `}
`;

export const Icon = styled.View``;
