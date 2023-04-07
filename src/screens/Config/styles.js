import styled, {css} from 'styled-components/native';
import {Dimensions} from 'react-native';

const screenWidth = Dimensions.get('window').width;

export const Container = styled.View`
  ${({theme}) => css`
    flex: 1;
    background-color: ${theme.colors.primary};
    justify-content: center;
    align-items: center;
  `}
`;

export const ScrollView = styled.ScrollView`
  width: ${screenWidth}px;
  padding: 20px;
`;

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

export const Avatar = styled.View`
  background-color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 60px;
  height: 60px;
  margin-right: 10px;
  border-radius: 50px;
  border: 3px solid #fff;
`;

export const LogoutBtn__wrapper = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
`;

export const LogoutBtn__text = styled.Text`
  ${({theme}) => css`
    font-family: ${theme.font.family.normal};
    color: ${theme.colors.white};
    font-size: 16px;
    margin-left: 10px;
  `}
`;
