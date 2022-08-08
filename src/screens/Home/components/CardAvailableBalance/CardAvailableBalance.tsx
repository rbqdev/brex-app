import { Box, Button, Flex, HStack, Text } from 'native-base';
import { ScrollView } from 'native-base';
import React from 'react';
import IonIcon from 'react-native-vector-icons/Ionicons';
import MCIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import { Card } from 'src/components';

export const CardAvailableBalance = () => {
  return (
    <Card hasDividers={false}>
      <Card.Header paddingBottom={0.1}>
        <HStack justifyContent="space-between" alignItems="center">
          <Text fontWeight="bold" fontSize={16}>
            Available balance
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

      <Card.Content paddingTop={1} paddingBottom={0.1}>
        <Text fontSize={32} fontWeight="bold">
          $25,234.19
        </Text>
      </Card.Content>

      <Card.Footer>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          overflow="visible">
          <HStack space={2}>
            <Button
              variant="outline"
              startIcon={<MCIcon name="cash-plus" size={26} />}>
              <Flex flexDirection="row" alignItems="center">
                <Text fontSize={16} fontWeight="bold">
                  Deposit check
                </Text>
              </Flex>
            </Button>
            <Button
              variant="outline"
              startIcon={
                <IonIcon name="arrow-forward-circle-outline" size={26} />
              }>
              <Flex flexDirection="row" alignItems="center">
                <Text fontSize={16} fontWeight="bold">
                  Send payment
                </Text>
              </Flex>
            </Button>
          </HStack>
        </ScrollView>
      </Card.Footer>
    </Card>
  );
};
