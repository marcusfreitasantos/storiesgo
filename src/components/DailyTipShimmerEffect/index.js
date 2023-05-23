import React from 'react';
import * as S from './styles';
import ShimmerEffect from '../../../assets/images/shimmer.gif';
export default function DailyTipShimmerEffect() {
  return (
    <>
      <S.DailyTip__wrapper>
        <S.DailyTip__header>
          <S.DailyTip__title>
            <S.Image source={ShimmerEffect} resizeMode="cover" />
          </S.DailyTip__title>
        </S.DailyTip__header>

        <S.DailyTip__text>
          <S.ImageTips source={ShimmerEffect} resizeMode="cover" />
          <S.ImageTips source={ShimmerEffect} resizeMode="cover" />
          <S.ImageTips source={ShimmerEffect} resizeMode="cover" />
        </S.DailyTip__text>

        <S.Message>Estamos gerando ideias para você!</S.Message>
      </S.DailyTip__wrapper>
    </>
  );
}
