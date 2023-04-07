import React from 'react';
import * as S from './styles';

export default ({children, onPress, disabled}) => {
  return (
    <S.Button onPress={onPress} disabled={disabled}>
      <S.TextButton>{children}</S.TextButton>
    </S.Button>
  );
};
