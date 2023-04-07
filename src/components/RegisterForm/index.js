import React, {useState, useContext} from 'react';
import * as S from './styles';
import TextField from '../TextField';
import Buttons from '../Buttons';
import {putUser} from '../../services/requests/user';
import {GlobalContext} from '../../contexts/UserInfo';
import {ActivityIndicator, Alert} from 'react-native';
import theme from '../../global/styles/theme';

export default function RegisterForm(props) {
  const {token, userInfo} = useContext(GlobalContext);

  const [username, setUserName] = useState(props.name);
  const [userPassword, setUserPassword] = useState();
  const [loading, setLoading] = useState(false);

  const updateUserData = async () => {
    setLoading(true);
    try {
      await putUser(token, username, props.email, userPassword);
      userInfo.name = username;
      Alert.alert('Perfil Atualizado com sucesso!');
    } catch (err) {
      Alert.alert('Oops. Não foi possível realizar essa operação!');
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  return loading ? (
    <ActivityIndicator size="large" color={theme.colors.white} />
  ) : (
    <S.FormWrapper>
      <S.FormField__full>
        <TextField
          placeholder="Nome"
          value={username}
          onChangeText={t => setUserName(t)}
          editable={true}
        />
      </S.FormField__full>

      <S.FormField__full>
        <TextField
          placeholder="Nova Senha"
          value={userPassword}
          password={true}
          editable={true}
          onChangeText={t => setUserPassword(t)}
        />
      </S.FormField__full>

      <S.FormField__full>
        <TextField placeholder="E-mail" value={props.email} editable={false} />
      </S.FormField__full>

      <S.FormField__full>
        <TextField
          placeholder="Nome"
          value={`Segmento: ${props.preferences_categories[0].name}`}
          editable={false}
        />
      </S.FormField__full>

      <S.ButtonWrapper>
        <Buttons onPress={updateUserData}>Atualizar</Buttons>
      </S.ButtonWrapper>

      <S.BottomBoxMargin />
    </S.FormWrapper>
  );
}
