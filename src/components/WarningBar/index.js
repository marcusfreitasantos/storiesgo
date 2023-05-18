import React, {useContext} from 'react';
import {GlobalContext} from '../../contexts/UserInfo';
import * as S from './styles';
import {useNavigation} from '@react-navigation/native';

export default function WarningBar() {
  const navigation = useNavigation();
  const {trialPeriod} = useContext(GlobalContext);

  return (
    <S.WarningBar__wrappper>
      <S.WarningBar__text>
        Seu período de testes acaba em {7 - trialPeriod} dias.
      </S.WarningBar__text>
      <S.WarningBar__btn onPress={() => navigation.navigate('Plans')}>
        <S.WarningBar__btnText>Assine Agora!</S.WarningBar__btnText>
      </S.WarningBar__btn>
    </S.WarningBar__wrappper>
  );
}
