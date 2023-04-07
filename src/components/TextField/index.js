import React, {useState} from 'react';
import * as S from './styles';
import theme from '../../global/styles/theme';
import {Eye, EyeOff} from 'react-native-feather';

export default ({
  placeholder,
  children,
  value,
  onChangeText,
  password = false,
  editable = true,
}) => {
  const [userPassword, showUserPassword] = useState(password);

  return (
    <S.InputArea>
      <S.Icon>{children}</S.Icon>
      <S.TextInput
        placeholderTextColor={theme.colors.gray}
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
        secureTextEntry={userPassword}
        editable={editable}
      />
      {password && (
        <S.EyeIcon onPress={() => showUserPassword(!userPassword)}>
          {userPassword ? (
            <Eye width={24} height={24} stroke={theme.colors.primary} />
          ) : (
            <EyeOff width={24} height={24} stroke={theme.colors.primary} />
          )}
        </S.EyeIcon>
      )}
    </S.InputArea>
  );
};
