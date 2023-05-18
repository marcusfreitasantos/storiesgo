import styled, {css} from 'styled-components/native';
import {Dimensions} from 'react-native';

const screenWidth = Dimensions.get('window').width;

export const Container = styled.View`
  ${({theme}) => css`
    width: ${screenWidth}px;
    padding: 20px;
    flex-direction: column;
    justify-content: space-between;
    background-color: ${theme.colors.primary};
    flex: 1;
  `}
`;

export const TextGroup = styled.View`
  width: 100%;
`;

export const Title = styled.Text`
  ${({theme}) => css`
    color: ${theme.colors.white};
    font-family: ${theme.font.family.bold};
    padding-top: 16px;
    font-size: 24px;
    line-height: 24px;
  `}
`;

export const Text = styled.Text`
  ${({theme}) => css`
    color: ${theme.colors.white};
    font-family: ${theme.font.family.normal};
    font-size: 16px;
  `}
`;

export const Divisor = styled.View`
  ${({theme}) => css`
    background: ${theme.colors.white};
    height: 1px;
    width: 100%;
    margin: 10px 0;
  `}
`;

export const Advantages__wrapper = styled.View`
  flex-direction: row;
  align-items: center;
  margin: 15px 0;
`;

export const Advantages__text = styled.Text`
  ${({theme}) => css`
    color: ${theme.colors.white};
    font-family: ${theme.font.family.semibold};
    font-size: 16px;
    flex: 1;
  `}
`;

export const Subscriptions__wrapper = styled.View``;

export const Subscriptions__title = styled.Text`
  ${({theme}) => css`
    color: ${theme.colors.white};
    font-family: ${theme.font.family.bold};
    font-size: 20px;
    text-align: center;
  `}
`;

export const Subscriptions__subtitle = styled.Text`
  ${({theme}) => css`
    color: ${theme.colors.white};
    font-family: ${theme.font.family.normal};
    font-size: 16px;
    text-align: center;
  `}
`;

export const Subscriptions__buttons = styled.View`
  margin-top: 10px;
`;

export const Disclaimer = styled.Text`
  ${({theme}) => css`
    color: ${theme.colors.white};
    font-family: ${theme.font.family.normal};
    font-size: 14px;
    text-align: center;
  `}
`;

export const LogoutBtn__wrapper = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  margin-top: 40px;
`;

export const LogoutBtn__text = styled.Text`
  ${({theme}) => css`
    font-family: ${theme.font.family.normal};
    color: ${theme.colors.white};
    font-size: 16px;
    margin-left: 10px;
  `}
`;
