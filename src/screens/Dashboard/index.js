import React, {useEffect, useState, useContext} from 'react';
import * as S from './styles';
import {HelpCircle} from 'react-native-feather';
import theme from '../../global/styles/theme';
import DailyTip from '../../components/DailyTip';
import {TouchableOpacity, Linking} from 'react-native';
import {GlobalContext} from '../../contexts/UserInfo';
import UseGetCurrentDate from '../../hooks/UseGetCurrentDate';
import AnimatedViewToRight from '../../components/AnimatedViewToRight';
import DailyTipShimmerEffect from '../../components/DailyTipShimmerEffect';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {postOpenAI} from '../../services/requests/openAI';

export default function Dashboard() {
  const [refreshing, setRefreshing] = useState(false);
  const {userInfo} = useContext(GlobalContext);
  const [stories, setStories] = useState();
  const [loading, setLoading] = useState(false);
  const userCategory = userInfo?.preferences_categories[0] || '';

  useEffect(() => {
    const {completeCurrentDate} = UseGetCurrentDate(userInfo.date_at_created);
    const request = {
      model: 'gpt-3.5-turbo',
      messages: [
        {
          role: 'user',
          content: `Crie um parágrafo de até 300 caracteres com um única sugestão de assunto que eu poderia abordar em minhas redes sociais hoje sobre ${userCategory.name}.`,
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
          `stories_${userInfo.email}_${completeCurrentDate}`,
          JSON.stringify(req),
        );
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    };

    const checkCurrentDate = async () => {
      const currentStories = await AsyncStorage.getItem(
        `stories_${userInfo.email}_${completeCurrentDate}`,
      );

      if (currentStories && currentStories !== null) {
        setStories(currentStories);
      } else {
        callOpenAI();
      }
    };
    checkCurrentDate();
    setRefreshing(false);
  }, [userCategory.name, userInfo.email, refreshing, userInfo.date_at_created]);

  return (
    <S.Container>
      <AnimatedViewToRight>
        <S.Header>
          <S.Header__userInfo>
            <S.Header__UserName>
              Olá, {userInfo && userInfo.name}
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

        {loading ? (
          <DailyTipShimmerEffect />
        ) : (
          <DailyTip dataContent={stories} userCategory={userCategory.name} />
        )}
      </AnimatedViewToRight>
    </S.Container>
  );
}
