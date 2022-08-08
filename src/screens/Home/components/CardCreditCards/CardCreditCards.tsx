import { Box, Button, HStack, Text, VStack } from 'native-base';
import { ScrollView } from 'native-base';
import React from 'react';
import IonIcon from 'react-native-vector-icons/Ionicons';
import { Card } from 'src/components';

import type { CreditCardData } from './components';
import { CreditCard } from './components';

const CardHeader = () => (
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
);

const CardContent = ({
  selectedCard,
  handleSelectCard,
}: {
  selectedCard: CreditCardData;
  handleSelectCard: (creditCardData: CreditCardData) => void;
}) => (
  <Card.Content paddingBottom={0.1}>
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      overflow="visible">
      <HStack space={2}>
        {[...new Array(4)].map((_, index) => (
          <CreditCard
            name="Brex Card"
            creditRemaining="$12.000"
            fourLastDigits="5555"
            isSelected={selectedCard.id === index}
            id={index}
            key={index}
            onPress={handleSelectCard}
          />
        ))}
      </HStack>
    </ScrollView>
  </Card.Content>
);

const CardFooter = ({
  fourLastDigits,
}: {
  fourLastDigits?: CreditCardData['fourLastDigits'];
}) => {
  return (
    <Card.Footer>
      <VStack space={3}>
        {fourLastDigits ? (
          <>
            <HStack justifyContent="space-between">
              <Text fontWeight="bold" fontSize={16}>
                Brex Card
              </Text>
              <Text color="secondary.500">Tap to unlock</Text>
            </HStack>
            <HStack justifyContent="space-between">
              <Text fontWeight="bold">Number</Text>
              <Text>•••• •••• •••• {fourLastDigits}</Text>
            </HStack>
            <HStack justifyContent="space-between">
              <Text fontWeight="bold">CVV</Text>
              <Text>•••</Text>
            </HStack>
            <HStack justifyContent="space-between">
              <Text fontWeight="bold">Exp</Text>
              <Text>••/••</Text>
            </HStack>
          </>
        ) : null}
      </VStack>
    </Card.Footer>
  );
};

export const CardCreditCards = () => {
  const [selectedCard, setSelectedCard] = React.useState<CreditCardData>(
    {} as CreditCardData,
  );

  const handleSelectCard = (creditCardData: CreditCardData) =>
    setSelectedCard({ ...creditCardData });

  return (
    <Card hasDividers={false}>
      <CardHeader />

      <CardContent
        selectedCard={selectedCard}
        handleSelectCard={handleSelectCard}
      />

      <CardFooter fourLastDigits={selectedCard.fourLastDigits} />
    </Card>
  );
};
