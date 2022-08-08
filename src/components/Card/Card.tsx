import { Box, Divider, VStack } from 'native-base';
import React from 'react';

type CardProps = {
  children: JSX.Element | JSX.Element[] | null;
  bgColor?: string;
  hasDividers?: boolean;
};

export const Card = ({
  children,
  bgColor = 'white',
  hasDividers = true,
}: CardProps) => (
  <Box
    borderRadius="md"
    borderWidth={1}
    borderStyle="solid"
    borderColor="secondary.100"
    bgColor={bgColor}>
    <VStack divider={hasDividers ? <Divider bgColor="secondary.100" /> : <></>}>
      {children}
    </VStack>
  </Box>
);

const CardContents = ({
  children,
  paddingTop = 3,
  paddingBottom = 3,
}: { paddingTop?: number; paddingBottom?: number } & CardProps) => (
  <Box px={4} py={3} paddingBottom={paddingBottom} paddingTop={paddingTop}>
    {children}
  </Box>
);

Card.Header = CardContents;
Card.Content = CardContents;
Card.Footer = CardContents;
