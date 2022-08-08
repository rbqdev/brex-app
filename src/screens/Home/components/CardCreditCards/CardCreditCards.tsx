import { Box, Button, HStack, Text, VStack } from 'native-base';
import { ScrollView } from 'native-base';
import React from 'react';
import IonIcon from 'react-native-vector-icons/Ionicons';
import { Card } from 'src/components';

import { CreditCard } from './components';

export const CardCreditCards = () => {
  return (
    <Card hasDividers={false}>
      <Card.Header paddingBottom={0.1}>
        <HStack justifyContent="space-between" alignItems="center">
          <Text fontWeight="bold" fontSize={16}>
            Cards
          </Text>
          <Box>
            <Button
              variant="unstyled"
              p={0}
              fontSize={12}
              justifyContent="flex-end">
              <Text fontWeight="bold" color="primary.300">
                View <IonIcon name="arrow-forward-outline" />
              </Text>
            </Button>
          </Box>
        </HStack>
      </Card.Header>

      <Card.Content paddingBottom={0.1}>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          overflow="visible">
          <HStack space={2}>
            {[...new Array(4)].map(index => (
              <CreditCard key={index} />
            ))}
          </HStack>
        </ScrollView>
      </Card.Content>

      <Card.Footer>
        <VStack space={3}>
          <HStack justifyContent="space-between">
            <Text fontWeight="bold" fontSize={16}>
              Brex Card
            </Text>
            <Text color="secondary.500">Tap to unlock</Text>
          </HStack>
          <HStack justifyContent="space-between">
            <Text fontWeight="bold">Number</Text>
            <Text>•••• •••• •••• 5555</Text>
          </HStack>
          <HStack justifyContent="space-between">
            <Text fontWeight="bold">CVV</Text>
            <Text>•••</Text>
          </HStack>
          <HStack justifyContent="space-between">
            <Text fontWeight="bold">Exp</Text>
            <Text>••/••</Text>
          </HStack>
        </VStack>
      </Card.Footer>
    </Card>
  );
};
