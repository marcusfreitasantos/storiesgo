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

export const primaryButtonLinkText = styled.Text`
  ${({theme}) => css`
    font-size: 16px;
    color: ${theme.colors.primaryDark};
    font-family: ${theme.font.family.bold};
    padding: 40px 0;
  `}
`;
