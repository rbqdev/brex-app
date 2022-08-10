import {
  Actionsheet,
  Button,
  HStack,
  Text,
  useDisclose,
  VStack,
} from 'native-base';
import React from 'react';
import IonIcon from 'react-native-vector-icons/Ionicons';
import { CurrencyText } from 'src/components';
import { customTheme } from 'src/theme';
import type { TaskType } from 'src/types';

export const Task = ({
  title,
  description,
  amount,
  iconName = 'logo-usd',
}: TaskType) => {
  const { isOpen, onOpen, onClose } = useDisclose();

  return (
    <HStack space={4} alignItems="center" flexGrow={1}>
      <IonIcon name={iconName} size={20} />

      <HStack justifyContent="space-between" flexGrow={1}>
        <VStack>
          <Text
            fontSize={16}
            fontWeight="bold"
            maxW={200}
            ellipsizeMode="tail"
            numberOfLines={1}>
            {title}
          </Text>
          <Text
            fontSize={14}
            color="secondary.500"
            maxW={200}
            ellipsizeMode="tail"
            numberOfLines={1}>
            {description}
          </Text>
        </VStack>

        <VStack>
          <Text fontSize={16} fontWeight="bold">
            <CurrencyText value={amount} />
          </Text>
          <Button
            variant="ghost"
            p={0}
            fontSize={12}
            justifyContent="flex-end"
            onPress={onOpen}>
            <Text fontSize={14} fontWeight="bold" color="primary.300">
              Add
            </Text>
          </Button>

          <Actionsheet isOpen={isOpen} onClose={onClose}>
            <Actionsheet.Content>
              <Text fontSize={16} fontWeight="bold">
                {title}
              </Text>
              <Actionsheet.Item>
                <HStack alignItems="center" space={2}>
                  <Text fontSize={16}>Edit</Text>
                  <IonIcon name="create-outline" size={16} />
                </HStack>
              </Actionsheet.Item>
              <Actionsheet.Item>
                <HStack alignItems="center" space={2}>
                  <Text fontSize={16} color="danger.500">
                    Delete
                  </Text>
                  <IonIcon
                    name="trash-outline"
                    size={16}
                    color={customTheme.colors.danger[500]}
                  />
                </HStack>
              </Actionsheet.Item>
            </Actionsheet.Content>
          </Actionsheet>
        </VStack>
      </HStack>
    </HStack>
  );
};
