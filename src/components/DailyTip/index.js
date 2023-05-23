import React from 'react';
import * as S from './styles';
import {TouchableOpacity, FlatList, StyleSheet} from 'react-native';
import {Copy} from 'react-native-feather';
import theme from '../../global/styles/theme';
import Clipboard from '@react-native-clipboard/clipboard';
import DropShadow from 'react-native-drop-shadow';
import {Container} from '../../global/styles/global';

export default function DailyTip({dataContent, userCategory}) {
  const stories = dataContent?.replace('\n\n', '').split('\n\n') || [];

  const copyData = () => {
    Clipboard.setString(dataContent);
  };

  const styles = StyleSheet.create({
    shadowProp: {
      shadowColor: theme.colors.gray,
      shadowOffset: {width: 0, height: 5},
      shadowOpacity: 0.2,
      shadowRadius: 2,
    },
  });

  return (
    <Container>
      <S.DailyTip__wrapper>
        <S.DailyTip__header>
          <S.DailyTip__title>
            Dicas do Dia | {userCategory && userCategory}
          </S.DailyTip__title>

          {stories && (
            <TouchableOpacity onPress={copyData}>
              <Copy stroke={theme.colors.gray} />
            </TouchableOpacity>
          )}
        </S.DailyTip__header>
      </S.DailyTip__wrapper>

      {stories && (
        <FlatList
          style={{marginBottom: 350}}
          data={stories}
          renderItem={({item}) => (
            <DropShadow style={styles.shadowProp}>
              <S.DailyTip__text>{item}</S.DailyTip__text>
            </DropShadow>
          )}
          keyExtractor={(item, index) => item + index}
          ListEmptyComponent={() => (
            <DropShadow style={styles.shadowProp}>
              <S.DailyTip__text>Sem novas dicas!</S.DailyTip__text>
            </DropShadow>
          )}
        />
      )}
    </Container>
  );
}
