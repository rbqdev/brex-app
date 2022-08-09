import { Box, Flex, Pressable, Text, VStack } from 'native-base';
import React from 'react';
import FAIcon from 'react-native-vector-icons/FontAwesome';
import { CurrencyText } from 'src/components';
import { customTheme } from 'src/theme';
import type { CreditCardType } from 'src/types';

type CreditCardProps = CreditCardType & {
  isSelected?: boolean;
  onPress?: (creditCard: CreditCardType) => void | undefined;
};

export const CreditCard = ({
  id,
  name,
  creditRemaining,
  fourLastDigits,
  isSelected,
  onPress,
}: CreditCardProps) => {
  return (
    <Pressable
      onPress={() =>
        onPress && onPress({ id, name, creditRemaining, fourLastDigits })
      }>
      <VStack>
        <Box
          borderWidth={2}
          borderRadius={4}
          borderColor={isSelected ? 'primary.500' : 'transparent'}
          minW={170}>
          <Flex
            borderWidth={2}
            borderRadius={4}
            borderColor={isSelected ? 'secondary.50' : 'transparent'}
            background={isSelected ? 'secondary.800' : 'secondary.50'}
            justifyContent="space-between">
            <Flex p={2} flexGrow={1} height={70}>
              <Text
                fontSize={12}
                fontWeight="bold"
                color={isSelected ? 'secondary.50' : 'secondary.800'}>
                {name}
              </Text>
              <Text
                fontSize={12}
                color={isSelected ? 'secondary.50' : 'secondary.800'}>
                <CurrencyText value={creditRemaining} /> remaining
              </Text>
            </Flex>

            <Flex
              background={isSelected ? 'secondary.900' : 'secondary.200'}
              alignItems="flex-end"
              position="relative"
              height={5}>
              <Box
                width={20}
                height={4}
                background={
                  isSelected
                    ? customTheme.colors.secondary[900]
                    : customTheme.colors.secondary[200]
                }
                position="absolute"
                top={-12}
                right={0}
                borderTopLeftRadius={4}
              />
              <Box position="absolute" right={2} top={-7}>
                <FAIcon
                  name="cc-mastercard"
                  size={20}
                  color={
                    isSelected
                      ? customTheme.colors.secondary[50]
                      : customTheme.colors.secondary[50]
                  }
                />
              </Box>
            </Flex>
          </Flex>
        </Box>
      </VStack>
    </Pressable>
  );
};
