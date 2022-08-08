import { Box, HStack, Text } from 'native-base';
import React from 'react';
import { Card } from 'src/components';

import { TaskList } from './components';

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
              4 tasks
            </Text>
          </Box>
        </HStack>
      </Card.Header>
      <Card.Content>
        <TaskList />
      </Card.Content>
    </Card>
  );
};
