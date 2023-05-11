import React, {useState, useEffect, useContext} from 'react';
import * as S from './styles';
import {DollarSign} from 'react-native-feather';
import PlanBox from '../../components/PlanBox';
import {Alert} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {GlobalContext} from '../../contexts/UserInfo';
import ScreenHeader from '../../components/ScreenHeader';
import AnimatedViewToLeft from '../../components/AnimatedViewToLeft';

import {
  getSubscriptionsPlan,
  purchaseNewSubscription,
} from '../../services/purchase';

import {purchaseErrorListener, endConnection} from 'react-native-iap';

export default function Plans() {
  const {token, userInfo} = useContext(GlobalContext);
  const navigation = useNavigation();
  const [btnActive, setBtnActive] = useState('sg_499_1a');
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function getProducts() {
      const subs = await getSubscriptionsPlan();
      setProducts(subs);
    }

    getProducts();

    const purchaseError = purchaseErrorListener(error => {
      if (error.responseCode !== '2') {
        Alert.alert('Compra cancelada', 'Tente novamente.');
      }
    });

    return () => {
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

  const newSubscription = async (productID, offerToken) => {
    setBtnActive(productID);
    const purchaseResponse = await purchaseNewSubscription(
      productID,
      offerToken,
    );
    if (purchaseResponse[0]?.transactionReceipt) {
      Alert.alert('Assinatura Confirmada!', 'Seu app está liberado para uso.');
    }
  };

  return (
    <S.Container>
      <AnimatedViewToLeft>
        <ScreenHeader Icon={DollarSign} ScreenTitle={'Planos'} />
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
          qualquer momento nas configurações da sua loja.
        </S.Disclaimer>
      </AnimatedViewToLeft>
    </S.Container>
  );
}
