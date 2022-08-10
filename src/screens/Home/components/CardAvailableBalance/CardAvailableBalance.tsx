import { Link } from '@react-navigation/native';
import { Box, Button, Flex, HStack, ScrollView, Text } from 'native-base';
import React from 'react';
import IonIcon from 'react-native-vector-icons/Ionicons';
import MCIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import { Card, CurrencyText } from 'src/components';
import { chance } from 'src/mocks';

const CardHeader = () => (
  <Card.Header paddingBottom={0.1}>
    <HStack justifyContent="space-between" alignItems="center">
      <Text fontWeight="bold" fontSize={16}>
        Available balance
      </Text>
      <Box>
        <Link to="/Wallet">
          <Text fontWeight="bold" color="primary.300">
            View <IonIcon name="arrow-forward-outline" />
          </Text>
        </Link>
      </Box>
    </HStack>
  </Card.Header>
);

const CardFooter = () => (
  <Card.Footer>
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      overflow="visible">
      <HStack space={2}>
        <Button
          variant="outline"
          borderRadius={6}
          startIcon={<MCIcon name="cash-plus" size={26} />}>
          <Flex flexDirection="row" alignItems="center">
            <Text fontSize={16} fontWeight="bold">
              Deposit check
            </Text>
          </Flex>
        </Button>
        <Button
          variant="outline"
          borderRadius={6}
          startIcon={<IonIcon name="arrow-forward-circle-outline" size={26} />}>
          <Flex flexDirection="row" alignItems="center">
            <Text fontSize={16} fontWeight="bold">
              Send payment
            </Text>
          </Flex>
        </Button>
      </HStack>
    </ScrollView>
  </Card.Footer>
);

export const CardAvailableBalance = () => {
  return (
    <Card hasDividers={false}>
      <CardHeader />

      <Card.Content paddingTop={1} paddingBottom={0.1}>
        <Text fontSize={32} fontWeight="bold">
          <CurrencyText value={chance.integer({ min: 1, max: 10000000 })} />
        </Text>
      </Card.Content>

      <CardFooter />
    </Card>
  );
};
