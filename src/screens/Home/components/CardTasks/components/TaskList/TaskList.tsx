import { Button, HStack, Text, VStack } from 'native-base';
import React from 'react';
import IonIcon from 'react-native-vector-icons/Ionicons';

export const Task = () => (
  <HStack space={4} alignItems="center" flexGrow={1}>
    <IonIcon name="logo-usd" size={20} />

    <HStack justifyContent="space-between" flexGrow={1}>
      <VStack>
        <Text fontSize={16} fontWeight="bold">
          Testes
        </Text>
        <Text fontSize={14} color="secondary.500">
          Testes
        </Text>
      </VStack>

      <VStack>
        <Text fontSize={16} fontWeight="bold">
          $996.53
        </Text>
        <Button
          variant="unstyled"
          p={0}
          fontSize={12}
          justifyContent="flex-end">
          <Text fontSize={14} fontWeight="bold" color="primary.300">
            Add
          </Text>
        </Button>
      </VStack>
    </HStack>
  </HStack>
);

export const TaskList = () => {
  return (
    <VStack space={2}>
      {[...new Array(4)].map(index => (
        <Task key={index} />
      ))}
    </VStack>
  );
};
