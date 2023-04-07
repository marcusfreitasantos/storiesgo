import styled, {css} from 'styled-components/native';

export const FormWrapper = styled.View`
  display: flex;
  flex-direction: column;
`;

export const FormField__full = styled.View`
  width: 100%;
`;

export const FormGroup = styled.View`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
`;

export const FormField__half = styled.View`
  width: 49%;
`;

export const BottomBoxMargin = styled.View`
  height: 100px;
`;

export const ButtonWrapper = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

export const ButtonLink = styled.Text`
  ${({theme}) => css`
    font-size: 14px;
    color: ${theme.colors.white};
    font-family: ${theme.font.family.normal};
  `}
`;
