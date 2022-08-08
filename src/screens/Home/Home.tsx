import { ScrollView, View, VStack } from 'native-base';
import React from 'react';

import { CardAvailableBalance, CardCreditCards, CardTasks } from './components';

export const HomeScreen = () => (
  <View backgroundColor="tertiary.50" px={4}>
    <ScrollView width="full">
      <VStack py={4}>
        <VStack space={3}>
          <CardTasks />
          <CardAvailableBalance />
          <CardCreditCards />
        </VStack>
      </VStack>
    </ScrollView>
  </View>
);
