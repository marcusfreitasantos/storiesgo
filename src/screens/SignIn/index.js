import React, {useContext, useState, useEffect} from 'react';
import * as S from './style';
import TextField from '../../components/TextField';
import Buttons from '../../components/Buttons';
import {Mail, Lock} from 'react-native-feather';
import theme from '../../global/styles/theme';
import {useNavigation} from '@react-navigation/native';
import {TouchableOpacity, Alert, ActivityIndicator} from 'react-native';
import {GlobalContext} from '../../contexts/UserInfo';
import {loginUser, getUserByEmail} from '../../services/requests/user';
import AsyncStorage from '@react-native-async-storage/async-storage';
import HeaderLogo from '../../components/HeaderLogo';
import AnimatedViewToUp from '../../components/AnimatedViewToUp';
import GetCurrentDate from '../../hooks/GetCurrentDate';

import {endConnection, getAvailablePurchases} from 'react-native-iap';

export default function SignIn() {
  const {setToken, setUserInfo} = useContext(GlobalContext);
  const navigation = useNavigation();
  const [loading, setLoading] = useState(false);

  const [userEmail, setUserEmail] = useState();
  const [userPassword, setUserPassword] = useState();

  const verifyUserSubscriptionStatus = (
    userCreationDate,
    subscriptionStatus,
  ) => {
    const {userTrialPeriod} = GetCurrentDate(userCreationDate);

    if (userTrialPeriod > 7 && !subscriptionStatus) {
      navigation.navigate('Purchase');
    } else {
      navigation.navigate('Dashboard');
    }
  };

  const storeData = async userObj => {
    try {
      await AsyncStorage.setItem('user', JSON.stringify(userObj));
    } catch (error) {
      console.log(error);
    }
  };

  const goToSignUp = () => {
    navigation.navigate('SignUp');
  };

  const logging = async (email, password) => {
    storeData({
      email,
      password,
    });
    setLoading(true);
    try {
      const login = await loginUser(email, password);
      const token = await login.AccessToken;
      setToken(token);

      if (login) {
        const userObj = await getUserByEmail(token, email);
        setUserInfo(userObj);

        const currentSubscription = await getAvailablePurchases();

        if (currentSubscription?.length) {
          verifyUserSubscriptionStatus(userObj.date_at_created, true);
          endConnection();
        } else {
          verifyUserSubscriptionStatus(userObj.date_at_created, false);
        }
      }
    } catch (err) {
      Alert.alert('Usuário ou senha incorretos.');
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  const getStoredData = async () => {
    try {
      const user = await AsyncStorage.getItem('user');
      if (user !== '{}') {
        logging(JSON.parse(user).email, JSON.parse(user).password);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getStoredData();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <S.Container>
      <HeaderLogo />

      {loading ? (
        <ActivityIndicator size="large" color={theme.colors.primary} />
      ) : (
        <AnimatedViewToUp>
          <S.FormWrapper>
            <S.FormTitle>Faça Login</S.FormTitle>

            <TextField
              placeholder="E-mail"
              value={userEmail}
              onChangeText={t => setUserEmail(t)}>
              <Mail stroke={theme.colors.primary} />
            </TextField>

            <TextField
              placeholder="Senha"
              value={userPassword}
              onChangeText={t => setUserPassword(t)}
              password={true}>
              <Lock stroke={theme.colors.primary} />
            </TextField>

            <S.ButtonWrapper>
              <Buttons onPress={() => logging(userEmail, userPassword)}>
                Entrar
              </Buttons>
            </S.ButtonWrapper>
          </S.FormWrapper>
        </AnimatedViewToUp>
      )}

      <TouchableOpacity
        onPress={() => goToSignUp()}
        disabled={loading ? true : false}>
        <S.primaryButtonLinkText>
          Não tem conta? Cadastre-se
        </S.primaryButtonLinkText>
      </TouchableOpacity>
    </S.Container>
  );
}
