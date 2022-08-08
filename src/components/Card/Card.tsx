import { Box, Divider, VStack } from 'native-base';
import React from 'react';

type CardProps = {
  children: JSX.Element | JSX.Element[];
  bgColor?: string;
};

export const Card = ({ children, bgColor = 'white' }: CardProps) => (
  <Box
    borderRadius="md"
    borderWidth={1}
    borderStyle="solid"
    borderColor="secondary.100"
    bgColor={bgColor}>
    <VStack divider={<Divider bgColor="secondary.100" />}>{children}</VStack>
  </Box>
);

const CardContents = ({ children }: CardProps) => (
  <Box px={4} py={3}>
    {children}
  </Box>
);

Card.Header = CardContents;
Card.Content = CardContents;
Card.Footer = CardContents;
