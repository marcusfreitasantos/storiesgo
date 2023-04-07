import styled, {css} from 'styled-components/native';
import {Dimensions} from 'react-native';

const screenWidth = Dimensions.get('window').width;

export const Background = styled.ImageBackground`
  width: 100%;
  display: flex;
  flex: 1;
`;

export const Container = styled.View`
  width: ${screenWidth}px;
  padding: 20px;
  flex-direction: column;
  justify-content: space-between;
`;

export const TextGroup = styled.View`
  width: 100%;
`;

export const Title = styled.Text`
  ${({theme}) => css`
    color: ${theme.colors.white};
    font-family: ${theme.font.family.bold};
    font-size: 30px;
    line-height: 30px;
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
