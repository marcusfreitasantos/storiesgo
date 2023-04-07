import styled from 'styled-components/native';
import {css} from 'styled-components';

export const Plan__wrapper = styled.View`
  margin-bottom: 10px;
`;

export const Plan__boxActive = styled.TouchableOpacity`
  ${({theme}) => css`
    background: ${props =>
      props.current === 'active' ? theme.colors.white : 'rgba(0, 0, 0, 0)'};
    border: 2px solid ${theme.colors.white};
    padding: 20px 15px;
    border-radius: 5px;
    flex-direction: row;
    justify-content: space-between;
    margin-bottom: 5px;
  `}
`;

export const Plan__name_text = styled.Text`
  ${({theme}) => css`
    color: ${props =>
      props.current === 'active' ? theme.colors.primary : theme.colors.white};
    font-family: ${theme.font.family.bold};
    font-size: 14px;
    margin-left: 10px;
  `}
`;

export const Plan__button = styled.View`
  ${({theme}) => css`
    height: 20px;
    width: 20px;
    background-color: ${props =>
      props.current === 'active'
        ? theme.colors.secondary
        : "'rgba(0, 0, 0, 0)'"};
    border-radius: 50px;
    border: 2px solid ${theme.colors.grayLight};
  `}
`;

export const Plan__name = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Plan__price = styled.Text`
  ${({theme}) => css`
    color: ${props =>
      props.current === 'active' ? theme.colors.primary : theme.colors.white};
    font-family: ${theme.font.family.bold};
    font-size: 16px;
    margin-left: 10px;
  `}
`;

export const Plan__warning = styled.Text`
  ${({theme}) => css`
    color: ${theme.colors.white};
    font-family: ${theme.font.family.normal};
    font-size: 16px;
  `}
`;
