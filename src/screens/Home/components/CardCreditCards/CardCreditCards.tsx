import { Link } from '@react-navigation/native';
import { Box, HStack, ScrollView, Text, VStack } from 'native-base';
import React from 'react';
import IonIcon from 'react-native-vector-icons/Ionicons';
import { Card } from 'src/components';
import { creditCardsBuilder } from 'src/mocks';
import type { CreditCardType } from 'src/types';

import { CreditCard } from './components';

const CardHeader = () => (
  <Card.Header paddingBottom={0.1}>
    <HStack justifyContent="space-between" alignItems="center">
      <Text fontWeight="bold" fontSize={16}>
        Cards
      </Text>
      <Box>
        <Link to="/Cards">
          <Text fontWeight="bold" color="primary.300">
            View <IonIcon name="arrow-forward-outline" />
          </Text>
        </Link>
      </Box>
    </HStack>
  </Card.Header>
);

const CardContent = ({
  creditCards,
  selectedCreditCard,
  handleSelectCreditCard,
}: {
  creditCards: CreditCardType[];
  selectedCreditCard: CreditCardType;
  handleSelectCreditCard: (creditCard: CreditCardType) => void;
}) => (
  <Card.Content paddingBottom={0.1}>
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      overflow="visible">
      <HStack space={2}>
        {creditCards.map(({ id, name, creditRemaining, fourLastDigits }) => (
          <CreditCard
            name={name}
            creditRemaining={creditRemaining}
            fourLastDigits={fourLastDigits}
            isSelected={selectedCreditCard.id === id}
            id={id}
            key={id}
            onPress={handleSelectCreditCard}
          />
        ))}
      </HStack>
    </ScrollView>
  </Card.Content>
);

const CardFooter = ({
  fourLastDigits,
}: {
  fourLastDigits?: CreditCardType['fourLastDigits'];
}) => {
  const [creditCardLocked, setCreditCardLocked] = React.useState<boolean>(true);

  return (
    <Card.Footer>
      <VStack space={3}>
        {fourLastDigits ? (
          <>
            <HStack justifyContent="space-between">
              <Text fontWeight="bold" fontSize={16}>
                Brex Card
              </Text>
              <Text
                color="secondary.500"
                onPress={() => setCreditCardLocked(!creditCardLocked)}>
                Tap to {creditCardLocked ? 'unlock' : 'lock'}
                <IonIcon
                  size={16}
                  name={
                    creditCardLocked
                      ? 'lock-closed-outline'
                      : 'lock-open-outline'
                  }
                />
              </Text>
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
  const [selectedCreditCard, setSelectedCard] = React.useState<CreditCardType>(
    {} as CreditCardType,
  );

  const creditCards = React.useMemo(() => creditCardsBuilder(), []);

  const handleSelectCreditCard = (creditCard: CreditCardType) =>
    setSelectedCard({ ...creditCard });

  return (
    <Card hasDividers={false}>
      <CardHeader />

      <CardContent
        creditCards={creditCards}
        selectedCreditCard={selectedCreditCard}
        handleSelectCreditCard={handleSelectCreditCard}
      />

      <CardFooter fourLastDigits={selectedCreditCard.fourLastDigits} />
    </Card>
  );
};
