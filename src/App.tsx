import { NativeBaseProvider } from 'native-base';
import React from 'react';
import SplashScreen from 'react-native-splash-screen';
import { TabNavigator } from 'src/components';

import { customTheme } from './theme';

const App = () => {
  React.useEffect(() => {
    SplashScreen.hide();
  });

  return (
    <NativeBaseProvider theme={customTheme}>
      <TabNavigator />
    </NativeBaseProvider>
  );
};

export default App;
