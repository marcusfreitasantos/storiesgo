import styled, {css} from 'styled-components/native';

export const DailyTip__title = styled.View`
  width: 100%;
`;

export const DailyTip__wrapper = styled.View`
  ${({theme}) => css`
    background-color: ${theme.colors.white};
    border-radius: 10px;
    margin: 10px 0;
    width: 100%;
  `}
`;

export const DailyTip__header = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`;

export const DailyTip__text = styled.View`
  ${({theme}) => css`
    margin-top: 10px;
    padding: 20px 0;
    border-top-width: 1px;
    border-color: ${theme.colors.grayLight};
  `}
`;

export const Image = styled.ImageBackground`
  height: 40px;
  width: 100%;
`;

export const ImageTips = styled.ImageBackground`
  height: 10px;
  margin: 5px 0;
  width: 100%;
`;
