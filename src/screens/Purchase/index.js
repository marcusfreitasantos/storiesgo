import React, {useState, useEffect, useContext} from 'react';
import * as S from './styles';
import purchaseBG from '../../../assets/images/purchase-bg.jpg';
import {Award} from 'react-native-feather';
import theme from '../../global/styles/theme';
import PlanBox from '../../components/PlanBox';
import {Alert} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {GlobalContext} from '../../contexts/UserInfo';

import {
  getSubscriptionsPlan,
  purchaseNewSubscription,
} from '../../services/purchase';

import {
  purchaseUpdatedListener,
  purchaseErrorListener,
  endConnection,
} from 'react-native-iap';

export default function Purchase() {
  const {token, userInfo} = useContext(GlobalContext);
  const navigation = useNavigation();
  const iconSize = 30;
  const [btnActive, setBtnActive] = useState('sg_499_1a');
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function getProducts() {
      const subs = await getSubscriptionsPlan();
      setProducts(subs);
    }

    getProducts();

    const purchaseUpdate = purchaseUpdatedListener(async purchase => {
      if (purchase) {
        navigation.navigate('Dashboard');
      }
    });

    const purchaseError = purchaseErrorListener(error => {
      if (error.responseCode !== '2') {
        Alert.alert(
          error.code,
          'Compra cancelada, tente novamente.' + error.responseCode,
        );
      }
    });

    return () => {
      try {
        purchaseUpdate.remove();
      } catch (err) {
        console.log('purchaseUpdatedListener', err);
      }

      try {
        purchaseError.remove();
      } catch (err) {
        console.log('purchaseErrorListener', err);
      }

      try {
        endConnection();
      } catch (err) {
        console.log('end connection', err);
      }
    };
  }, [navigation, token, userInfo.email, userInfo.name, userInfo.password]);

  const newSubscription = (productID, offerToken) => {
    setBtnActive(productID);
    purchaseNewSubscription(productID, offerToken);
  };

  return (
    <S.Background source={purchaseBG} resizeMode="cover">
      <S.Container>
        <S.TextGroup>
          <S.Title>Eleve sua influência a um novo patamar!</S.Title>
          <S.Text>
            Assine agora e tenha ideias ilimitadas de conteúdo para suas
            postagens.
          </S.Text>
        </S.TextGroup>

        <S.Divisor />

        <S.Advantages__wrapper>
          <Award
            stroke={theme.colors.secondary}
            height={iconSize}
            width={iconSize}
          />
          <S.Advantages__text>
            Receba 3 dicas exclusivas de conteúdo todos os dias.
          </S.Advantages__text>
        </S.Advantages__wrapper>

        <S.Advantages__wrapper>
          <Award
            stroke={theme.colors.secondary}
            height={iconSize}
            width={iconSize}
          />
          <S.Advantages__text>
            Salve suas ideias e compartilhe em qualquer app de mensagens.
          </S.Advantages__text>
        </S.Advantages__wrapper>

        <S.Advantages__wrapper>
          <Award
            stroke={theme.colors.secondary}
            height={iconSize}
            width={iconSize}
          />
          <S.Advantages__text>
            Nunca mais fique sem ideias para suas postagens!
          </S.Advantages__text>
        </S.Advantages__wrapper>

        <S.Divisor />

        <S.Subscriptions__wrapper>
          <S.Subscriptions__title>
            Escolha um plano de pagamento
          </S.Subscriptions__title>

          <S.Subscriptions__subtitle>
            Cobrado no início de cada ciclo após o período de testes gratuito.
          </S.Subscriptions__subtitle>

          <S.Subscriptions__buttons>
            {products &&
              products.map(product => {
                return (
                  <PlanBox
                    key={product.productId}
                    currentPlan={
                      btnActive === product.productId ? 'active' : 'inactive'
                    }
                    planName={product.title}
                    onPress={() =>
                      newSubscription(
                        product.productId,
                        product.subscriptionOfferDetails[0].offerToken,
                      )
                    }
                  />
                );
              })}
          </S.Subscriptions__buttons>
        </S.Subscriptions__wrapper>

        <S.Disclaimer>
          Os planos são renovados automaticamente. Altere os planos ou cancele a
          qualquer momento.
        </S.Disclaimer>
      </S.Container>
    </S.Background>
  );
}
