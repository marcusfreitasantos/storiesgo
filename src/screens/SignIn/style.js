import styled, {css} from 'styled-components/native';

export const Container = styled.View`
  ${({theme}) => css`
    background-color: ${theme.colors.white};
    flex: 1;
    justify-content: space-between;
    align-items: center;
  `}
`;

export const FormWrapper = styled.View`
  width: 80%;
  padding: 20px 0;
`;

export const FormTitle = styled.Text`
  ${({theme}) => css`
    font-size: 24px;
    color: ${theme.colors.primary};
    margin-bottom: 20px;
    font-family: ${theme.font.family.bold};
  `}
`;

export const ButtonWrapper = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const ButtonLink = styled.Text`
  ${({theme}) => css`
    font-size: 14px;
    color: ${theme.colors.grayDark};
    font-family: ${theme.font.family.normal};
  `}
`;

export const PrimaryButtonLinkText = styled.Text`
  ${({theme}) => css`
    font-size: 16px;
    color: ${theme.colors.primaryDark};
    font-family: ${theme.font.family.bold};
    padding: 8px 0;
  `}
`;

export const HelpButtonLinkText = styled.Text`
  ${({theme}) => css`
    font-size: 14px;
    color: ${theme.colors.gray};
    font-family: ${theme.font.family.normal};
    padding: 8px 0;
  `}
`;

export const ButtonsWrapper = styled.View`
  padding: 40px 0;
  justify-content: center;
  align-items: center;
`;
