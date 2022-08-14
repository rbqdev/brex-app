import { VStack } from 'native-base';
import React from 'react';
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
    </VStack>
  );
};
