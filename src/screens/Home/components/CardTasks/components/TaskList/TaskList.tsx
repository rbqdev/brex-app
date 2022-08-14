import { Text, VStack } from 'native-base';
import React from 'react';
import IonIcon from 'react-native-vector-icons/Ionicons';
import { customTheme } from 'src/theme';
import type { TaskType } from 'src/types';

import { Task } from '../Task';

export const TaskList = ({ tasks }: { tasks: TaskType[] }) => {
  return (
    <VStack space={2}>
      {tasks.map(({ id, title, description, amount, iconName }) => (
        <Task
          key={id}
          id={id}
          title={title}
          description={description}
          amount={amount}
          iconName={iconName}
        />
      ))}

      {tasks.length === 0 ? (
        <VStack alignItems="center" justifyContent="center">
          <IonIcon
            name="information-circle-outline"
            size={24}
            color={customTheme.colors.secondary[600]}
          />
          <Text textAlign="center" fontWeight="bold" color="secondary.600">
            You don't have any task registered
          </Text>
        </VStack>
      ) : null}
    </VStack>
  );
};
