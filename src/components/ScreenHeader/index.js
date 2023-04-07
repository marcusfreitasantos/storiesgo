import React from 'react';
import * as S from './styles';
import theme from '../../global/styles/theme';

export default function ScreenHeader({Icon, ScreenTitle}) {
  return (
    <S.Header>
      <S.Header__userInfo>
        <Icon width={40} height={40} stroke={theme.colors.white} />
        <S.Header__ScreenTitle>{ScreenTitle}</S.Header__ScreenTitle>
      </S.Header__userInfo>
    </S.Header>
  );
}
