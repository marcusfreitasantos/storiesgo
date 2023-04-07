import styled, {css} from 'styled-components/native';

export const Header = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 20px 0;
`;

export const Header__userInfo = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const Header__ScreenTitle = styled.Text`
  ${({theme}) => css`
    font-family: ${theme.font.family.bold};
    color: ${theme.colors.white};
    font-size: 18px;
    margin-left: 10px;
  `}
`;
