import React from 'react';
import * as S from './styles';

import StoriesGo from '../../../assets/images/logo.svg';
import bgprimary from '../../../assets/images/header-bg.jpg';

export default function HeaderLogo() {
  return (
    <S.Header source={bgprimary} resizeMode="cover">
      <StoriesGo width="40%" height={160} />
    </S.Header>
  );
}
