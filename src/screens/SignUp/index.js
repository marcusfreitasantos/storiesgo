import React, {useEffect} from 'react';
import * as S from './styles';
import TextField from '../../components/TextField';
import Buttons from '../../components/Buttons';
import {User, Mail, Lock} from 'react-native-feather';
import {useNavigation} from '@react-navigation/native';
import {Alert, TouchableOpacity, ActivityIndicator} from 'react-native';
import {useState} from 'react';
import theme from '../../global/styles/theme';
import {postUser} from '../../services/requests/user';
import CategorySelect from '../../components/CategorySelect';
import AnimatedViewToUp from '../../components/AnimatedViewToUp';
import HeaderLogo from '../../components/HeaderLogo';

export default function SignUp() {
  const navigation = useNavigation();

  const [userEmail, setUserEmail] = useState('');
  const [userPassword, setUserPassword] = useState('');
  const [userName, setUserName] = useState('');
  const [name, setName] = useState('');
  const [userCategory, setUserCategory] = useState('');
  const [buttonDisabled, setButtonDisabled] = useState(true);
  const [loading, setLoading] = useState(false);
  const profileType = 'customer';
  const currentPlan = 'trial';

  const goToSignIn = () => {
    navigation.navigate('SignIn');
  };

  const createUser = async e => {
    setLoading(true);
    try {
      const newUser = await postUser(
        userName,
        name,
        userEmail,
        userCategory,
        profileType,
        userPassword,
        currentPlan,
      );

      if (newUser.status === 200) {
        Alert.alert('Conta criada com sucesso');
      }
    } catch (err) {
      Alert.alert('Sua conta não foi criada', 'Error: ', err);
    } finally {
      setLoading(false);
      goToSignIn();
    }
  };

  const handleChangeName = e => {
    setName(e);
    setUserName(e.toLowerCase().replace(' ', ''));
  };

  const selectCategory = category => {
    setUserCategory({
      name: category.name,
      slug: category.slug,
    });
  };

  useEffect(() => {
    const validateForm = () => {
      if (
        name?.length >= 3 &&
        userEmail?.includes('@') &&
        userPassword?.length >= 3 &&
        userCategory !== ''
      ) {
        setButtonDisabled(false);
      } else {
        setButtonDisabled(true);
      }
    };
    validateForm();
  }, [name, userEmail, userCategory, userPassword]);

  return (
    <S.Container>
      <HeaderLogo />
      {loading ? (
        <ActivityIndicator size="large" color={theme.colors.primary} />
      ) : (
        <AnimatedViewToUp>
          <S.FormWrapper>
            <S.FormTitle>Crie sua conta</S.FormTitle>
            <TextField
              placeholder="Nome"
              value={name}
              onChangeText={e => handleChangeName(e)}>
              <User stroke={theme.colors.primary} />
            </TextField>

            <TextField
              placeholder="Email"
              value={userEmail}
              onChangeText={t => setUserEmail(t)}>
              <Mail stroke={theme.colors.primary} />
            </TextField>

            <CategorySelect onChange={selectCategory} />

            <TextField
              placeholder="Senha"
              value={userPassword}
              password={true}
              onChangeText={t => setUserPassword(t)}>
              <Lock stroke={theme.colors.primary} />
            </TextField>

            <S.ButtonWrapper>
              <Buttons disabled={buttonDisabled} onPress={() => createUser()}>
                Cadastrar
              </Buttons>
            </S.ButtonWrapper>
          </S.FormWrapper>
        </AnimatedViewToUp>
      )}

      <TouchableOpacity onPress={goToSignIn}>
        <S.primaryButtonLinkText>
          Já tem conta? Faça login
        </S.primaryButtonLinkText>
      </TouchableOpacity>
    </S.Container>
  );
}
