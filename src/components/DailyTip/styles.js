import styled, {css} from 'styled-components/native';

export const DailyTip__title = styled.Text`
  ${({theme}) => css`
    font-size: 16px;
    color: ${theme.colors.primary};
    font-family: ${theme.font.family.bold};
  `}
`;

export const DailyTip__wrapper = styled.View`
  width: 100%;
`;

export const DailyTip__header = styled.View`
  ${({theme}) => css`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 20px 0;
    border-bottom-width: 1px;
    border-color: ${theme.colors.grayLight};
  `}
`;

export const DailyTip__text = styled.Text`
  ${({theme}) => css`
    font-size: 14px;
    color: ${theme.colors.gray};
    padding: 20px;
    background-color: ${theme.colors.white};
    border-radius: 10px;
    margin: 10px 0;
  `}
`;

export const DailyTip__dates = styled.View`
  margin-top: 20px;
`;

export const DailyTip__datesTitle = styled.Text`
  ${({theme}) => css`
    font-family: ${theme.font.family.bold};
    color: ${theme.colors.white};
    font-size: 16px;
  `}
`;

export const DailyTip__datesDay = styled.Text`
  ${({theme}) => css`
    margin: 5px 0;
    padding: 15px;
    background: white;
    border-radius: 5px;
    color: ${theme.colors.gray};
  `}
`;

export const BottomBoxMargin = styled.View`
  height: 100px;
`;
