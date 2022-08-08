import { Box, Flex, Text, VStack } from 'native-base';
import React from 'react';
import FAIcon from 'react-native-vector-icons/FontAwesome';
import { customTheme } from 'src/theme';

type CreditCardProps = {
  isPressed?: boolean;
};

export const CreditCard = ({ isPressed }: CreditCardProps) => {
  return (
    <VStack>
      <Box
        borderWidth={2}
        borderRadius={4}
        borderColor={isPressed ? 'primary.500' : 'transparent'}
        minW={170}>
        <Flex
          borderWidth={2}
          borderRadius={4}
          borderColor={isPressed ? 'secondary.50' : 'transparent'}
          background={isPressed ? 'secondary.800' : 'secondary.50'}
          justifyContent="space-between">
          <Flex p={2} flexGrow={1} height={70}>
            <Text
              fontSize={12}
              fontWeight="bold"
              color={isPressed ? 'secondary.50' : 'secondary.800'}>
              Brex Card
            </Text>
            <Text
              fontSize={12}
              color={isPressed ? 'secondary.50' : 'secondary.800'}>
              $12.000 remaining
            </Text>
          </Flex>

          <Flex
            background={isPressed ? 'secondary.900' : 'secondary.200'}
            alignItems="flex-end"
            position="relative"
            height={5}>
            <Box
              width={20}
              height={4}
              background={
                isPressed
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
                color={customTheme.colors.secondary[50]}
              />
            </Box>
          </Flex>
        </Flex>
      </Box>
    </VStack>
  );
};
