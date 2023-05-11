import {getSubscriptions, requestSubscription} from 'react-native-iap';
import {Platform} from 'react-native';

const productsIds = Platform.select({
  android: ['sg_499_1m', 'sg_499_1a'],
});
export const getSubscriptionsPlan = async () => {
  const subs = getSubscriptions({skus: productsIds}).then(res => {
    return res;
  });

  return subs;
};

export const purchaseNewSubscription = async (sku, offerToken) => {
  try {
    const purchaseResponse = await requestSubscription({
      sku,
      ...(offerToken && {subscriptionOffers: [{sku, offerToken}]}),
    });
    return purchaseResponse;
  } catch (err) {
    console.log('erro na compra', err.message);
    return err;
  }
};
