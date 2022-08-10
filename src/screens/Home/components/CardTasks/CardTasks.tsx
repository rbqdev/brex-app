import { Box, HStack, Text, VStack } from 'native-base';
import React from 'react';
import { Card } from 'src/components';
import { tasksBuilder } from 'src/mocks/builders';
import type { TaskType } from 'src/types';

import { Task } from './components';

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

export const CardTasks = () => {
  const tasks = tasksBuilder();

  return (
    <Card>
      <Card.Header>
        <HStack justifyContent="space-between" alignItems="center">
          <Text fontWeight="bold" fontSize={16}>
            Tasks
          </Text>
          <Box background="primary.400" px={3} py={1} borderRadius={50}>
            <Text fontSize={12} color="primary.50" fontWeight="600">
              {tasks.length} tasks
            </Text>
          </Box>
        </HStack>
      </Card.Header>
      <Card.Content>
        <TaskList tasks={tasks} />
      </Card.Content>
    </Card>
  );
};
