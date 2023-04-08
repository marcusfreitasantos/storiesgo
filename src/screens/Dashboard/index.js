import React, {useEffect, useState, useContext} from 'react';
import * as S from './styles';
import {HelpCircle} from 'react-native-feather';
import theme from '../../global/styles/theme';
import DailyTip from '../../components/DailyTip';
import {TouchableOpacity, Linking, RefreshControl} from 'react-native';
import {GlobalContext} from '../../contexts/UserInfo';
import GetCurrentDate from '../../hooks/GetCurrentDate';
import AnimatedViewToRight from '../../components/AnimatedViewToRight';
import DailyTipShimmerEffect from '../../components/DailyTipShimmerEffect';
import {Container} from '../../global/styles/global';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {postOpenAI} from '../../services/requests/openAI';

export default function Dashboard() {
  const [refreshing, setRefreshing] = useState(false);
  const {userInfo} = useContext(GlobalContext);
  const [stories, setStories] = useState();
  const [loading, setLoading] = useState(false);
  const userCategory = userInfo?.preferences_categories[0] || '';

  useEffect(() => {
    const {completeCurrentDate} = GetCurrentDate(userInfo.date_at_created);
    const request = {
      model: 'text-davinci-003',
      prompt: `Me dê 3 novas sugestões de conteúdo para eu postar hoje nos stories do meu instagram sobre ${userCategory.name}. Separe cada uma em 1 parágrafo com uma quebra de linha entre eles.`,
      max_tokens: 1000,
      temperature: 1,
    };

    const callOpenAI = async () => {
      setLoading(true);
      try {
        console.log('openai');
        const req = await postOpenAI(request);
        console.log('req2', req);
        setStories(req);
        await AsyncStorage.setItem(
          `stories_${userInfo.email}_${completeCurrentDate}`,
          req,
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
        <S.ScrollView
          refreshControl={
            <RefreshControl
              refreshing={refreshing}
              onRefresh={() => setRefreshing(true)}
            />
          }>
          <S.Header>
            <Container>
              <S.Header__userInfo>
                <S.Header__UserName>
                  Olá, {userInfo && userInfo.name}
                </S.Header__UserName>
              </S.Header__userInfo>

              <TouchableOpacity
                title="support@example.com"
                onPress={() =>
                  Linking.openURL(
                    'mailto:support@example.com?subject=Preciso de Suporte com o aplicativo',
                  )
                }>
                <HelpCircle
                  width={30}
                  height={30}
                  stroke={theme.colors.primaryDark}
                />
              </TouchableOpacity>
            </Container>
          </S.Header>
        </S.ScrollView>
        <Container>
          {loading ? (
            <DailyTipShimmerEffect />
          ) : (
            <DailyTip data={stories} userCategory={userCategory.name} />
          )}
        </Container>
      </AnimatedViewToRight>
    </S.Container>
  );
}
