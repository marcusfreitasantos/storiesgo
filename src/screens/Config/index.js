import React, {useContext} from 'react';
import {BackHandler} from 'react-native';
import * as S from './styles';
import RegisterForm from '../../components/RegisterForm';
import {User, CornerDownLeft} from 'react-native-feather';
import theme from '../../global/styles/theme';
import {GlobalContext} from '../../contexts/UserInfo';
import AnimatedViewToLeft from '../../components/AnimatedViewToLeft';
import ScreenHeader from '../../components/ScreenHeader';
import {View} from 'react-native';

export default function Config() {
  const {userInfo} = useContext(GlobalContext);

  const Logout = async () => {
    BackHandler.exitApp();
  };

  return (
    <S.Container>
      <AnimatedViewToLeft>
        <S.ScrollView
          contentContainerStyle={{
            flexGrow: 1,
            justifyContent: 'space-between',
          }}>
          <View>
            <ScreenHeader Icon={User} ScreenTitle={'Perfil'} />
            <RegisterForm {...userInfo} />
          </View>

          <S.LogoutBtn__wrapper>
            <CornerDownLeft
              width={24}
              height={24}
              stroke={theme.colors.white}
            />
            <S.LogoutBtn__text onPress={Logout}>
              Sair do aplicativo
            </S.LogoutBtn__text>
          </S.LogoutBtn__wrapper>
        </S.ScrollView>
      </AnimatedViewToLeft>
    </S.Container>
  );
}
