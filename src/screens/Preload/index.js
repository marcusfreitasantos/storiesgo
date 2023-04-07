import React, {useEffect} from 'react';
import * as S from './styles';
import {useNavigation} from '@react-navigation/native';
import HeaderLogo from '../../components/HeaderLogo';
import NetInfo from '@react-native-community/netinfo';
import {Alert, BackHandler} from 'react-native';

export default function Preload() {
  const navigation = useNavigation();

  useEffect(() => {
    const checkInternet = () => {
      NetInfo.fetch().then(networkState => {
        if (!networkState.isConnected) {
          showAlert();
        } else {
          navigation.navigate('SignIn');
        }
      });
    };

    const showAlert = () =>
      Alert.alert(
        'Falha na conexão',
        'Verifique sua conexão e tente novamente.',
        [
          {
            text: 'Atualizar',
            onPress: () => checkInternet(),
            style: 'default',
          },
          {
            text: 'Sair do aplicativo',
            onPress: () => BackHandler.exitApp(),
            style: 'cancel',
          },
        ],
      );

    checkInternet();
  }, [navigation]);

  return (
    <S.Container>
      <HeaderLogo />
      <S.LoadingIcon size="large" color="#fff" />
    </S.Container>
  );
}
