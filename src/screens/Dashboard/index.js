import React, {useEffect, useState, useContext} from 'react';
import * as S from './styles';
import {HelpCircle} from 'react-native-feather';
import theme from '../../global/styles/theme';
import DailyTip from '../../components/DailyTip';
import {TouchableOpacity, Linking} from 'react-native';
import UseGetCurrentDate from '../../hooks/UseGetCurrentDate';
import AnimatedViewToRight from '../../components/AnimatedViewToRight';
import DailyTipShimmerEffect from '../../components/DailyTipShimmerEffect';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {postOpenAI} from '../../services/requests/openAI';
import TextField from '../../components/TextField';
import Buttons from '../../components/Buttons';

export default function Dashboard() {
  const [refreshing, setRefreshing] = useState(false);
  const [stories, setStories] = useState();
  const [loading, setLoading] = useState(false);
  const [userCategory, setUserCategory] = useState('');
  const completeCurrentDate = UseGetCurrentDate();

  const request = {
    model: 'gpt-3.5-turbo',
    messages: [
      {
        role: 'user',
        content: `Crie um parágrafo de até 300 caracteres com um única sugestão de assunto que eu poderia abordar em minhas redes sociais hoje sobre ${userCategory}.`,
      },
    ],
    temperature: 0.7,
  };

  const callOpenAI = async () => {
    setLoading(true);
    try {
      const req = await postOpenAI(request);
      setStories(req);
      await AsyncStorage.setItem(
        `stories_${completeCurrentDate}`,
        JSON.stringify(req),
      );
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const getPreviousStories = async () => {
      const currentStories = await AsyncStorage.getItem(
        `stories_${completeCurrentDate}`,
      );

      if (currentStories && currentStories !== null) {
        setStories(currentStories);
      }
    };

    getPreviousStories();
  }, [completeCurrentDate]);

  return (
    <S.Container>
      <AnimatedViewToRight>
        <S.Header>
          <S.Header__userInfo>
            <S.Header__UserName>
              Use o campo abaixo para {'\n'}gerar o seu insight!
            </S.Header__UserName>
          </S.Header__userInfo>

          <TouchableOpacity
            title="marcusfreitasantos@gmail.com"
            onPress={() =>
              Linking.openURL(
                'mailto:marcusfreitasantos@gmail.com?subject=Preciso de Suporte com o aplicativo',
              )
            }>
            <HelpCircle
              width={30}
              height={30}
              stroke={theme.colors.primaryDark}
            />
          </TouchableOpacity>
        </S.Header>

        <S.FormWrapper>
          <TextField
            placeholder="Design, psicologia, medicina..."
            value={userCategory}
            onChangeText={t => setUserCategory(t)}
          />

          <S.ButtonWrapper>
            <Buttons onPress={callOpenAI}>Gerar insight</Buttons>
          </S.ButtonWrapper>
        </S.FormWrapper>

        {loading ? (
          <DailyTipShimmerEffect />
        ) : (
          <DailyTip dataContent={stories} />
        )}
      </AnimatedViewToRight>
    </S.Container>
  );
}
