import { Box, HStack, Text } from 'native-base';
import React from 'react';
import { Card } from 'src/components';
import { tasksBuilder } from 'src/mocks/builders';

import { TaskList } from './components';

const tasks = tasksBuilder({ length: Math.floor(Math.random() * 5) });

export const CardTasks = () => {
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
