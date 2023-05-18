import React, {useState} from 'react';
import {FlatList} from 'react-native';
import segmentList from '../../mocks/segmentList';
import * as S from './styles';
import {Box} from 'react-native-feather';
import theme from '../../global/styles/theme';

export default function CategorySelect({onChange}) {
  const [menuActive, setMenuActive] = useState(false);
  const [currentCategory, setCurrentCategory] = useState();

  const handleChangeCategory = category => {
    setMenuActive(false);
    onChange(category.item);
    setCurrentCategory(category.item.name);
  };

  const categoriesList = segmentList.segments || [];

  return (
    <S.Dropdown__menuWrapper>
      <S.Dropdown__btn onPress={() => setMenuActive(!menuActive)}>
        <S.Icon>
          <Box width={24} color={theme.colors.primary} />
        </S.Icon>

        <S.Dropdown__btnText>
          {currentCategory ? currentCategory : 'Escolha um segmento'}{' '}
        </S.Dropdown__btnText>
      </S.Dropdown__btn>

      {menuActive && (
        <S.Dropdown__menu>
          {categoriesList && (
            <FlatList
              data={categoriesList}
              renderItem={item => (
                <S.Dropdown__item
                  key={item.slug}
                  onPress={() => handleChangeCategory(item)}>
                  <S.Dropdown__btnText>{item.item.name}</S.Dropdown__btnText>
                </S.Dropdown__item>
              )}
              keyExtractor={category => category.slug}
            />
          )}
        </S.Dropdown__menu>
      )}
    </S.Dropdown__menuWrapper>
  );
}
