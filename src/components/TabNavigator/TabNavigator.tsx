import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import IonIcon from 'react-native-vector-icons/Ionicons';
import {
  CashScreen,
  CreditCardsScreen,
  HomeScreen,
  SettingsScreen,
} from 'src/screens';
import { customTheme } from 'src/theme';

type TabScreen = {
  component: React.ComponentType;
  name: string;
  icon: string;
  iconActive?: string;
};

const Tab = createBottomTabNavigator();
const tabScreens: TabScreen[] = [
  {
    component: HomeScreen,
    name: 'Home',
    icon: 'home-outline',
    iconActive: 'home',
  },
  {
    component: CashScreen,
    name: 'Cash',
    icon: 'logo-usd',
  },
  {
    component: CreditCardsScreen,
    name: 'Card',
    icon: 'card-outline',
    iconActive: 'card',
  },
  {
    component: SettingsScreen,
    name: 'Settings',
    icon: 'settings-outline',
    iconActive: 'settings',
  },
];

export const TabNavigator = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        {tabScreens.map(({ name, component, icon, iconActive }) => (
          <Tab.Screen
            key={name}
            name={name}
            component={component}
            options={{
              tabBarLabelStyle: { fontSize: 12 },
              tabBarActiveTintColor: customTheme.colors.secondary[900],
              tabBarIcon: ({ size, color, focused }) => (
                <IonIcon
                  name={focused && iconActive ? iconActive : icon}
                  size={size}
                  color={color}
                />
              ),
            }}
          />
        ))}
      </Tab.Navigator>
    </NavigationContainer>
  );
};
