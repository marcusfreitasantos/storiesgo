import styled from 'styled-components/native';
import {Dimensions} from 'react-native';

const screenWidth = Dimensions.get('window').width;

export const Container = styled.View`
  width: ${screenWidth}px;
  padding: 20px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
