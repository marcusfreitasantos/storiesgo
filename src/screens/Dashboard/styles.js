import styled, {css} from 'styled-components/native';
import {Dimensions} from 'react-native';

const screenWidth = Dimensions.get('window').width;

export const Container = styled.View`
  ${({theme}) => css`
    flex: 1;
    background-color: ${theme.colors.white};
  `}
`;

export const ScrollView = styled.ScrollView`
  width: ${screenWidth}px;
`;

export const Header = styled.View`
  ${({theme}) => css`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    background-color: ${theme.colors.primary};
  `}
`;

export const Header__userInfo = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const Header__UserName = styled.Text`
  ${({theme}) => css`
    font-family: ${theme.font.family.bold};
    color: ${theme.colors.white};
    font-size: 20px;
  `}
`;

export const Avatar = styled.View`
  ${({theme}) => css`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50px;
    height: 50px;
    margin-right: 10px;
    border-radius: 50px;
    border: 3px solid ${theme.colors.white};
    overflow: hidden;
  `}
`;

export const ButtonsGroup = styled.View`
  align-items: center;
  justify-content: center;
  width: 100%;
`;
