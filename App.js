import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'; // Zorg ervoor dat je het juiste pictogrammenpakket importeert

import AssortimentScreen from './screens/AssortimentScreen';
import FavoritesScreen from './screens/FavoritesScreen';
import SettingsScreen from './screens/SettingsScreen';
import ProductScreen from './screens/ProductScreen';
import ShoppingCartScreen from './screens/ShoppingCartScreen';
import ShoppingCartIcon from './screens/ShoppingCartIcon';
import { CartProvider } from './cartUtils';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const AssortimentStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: '#6547e9',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
        headerTitleAlign: 'center',
      }}
    >
      <Stack.Screen
        name="Ons assortiment"
        component={AssortimentScreen}
        options={{
          title: 'Ons assortiment',
          headerRight: () => <ShoppingCartIcon />,
        }}
      />
      <Stack.Screen
        name="Omschrijving"
        component={ProductScreen}
        options={{
          title: 'Omschrijving',
          headerRight: () => <ShoppingCartIcon />,
        }}
      />
      <Stack.Screen
        name="Winkelmandje"
        component={ShoppingCartScreen}
        options={{
          title: 'Winkelmandje',
          headerRight: () => <ShoppingCartIcon />,
        }}
      />
    </Stack.Navigator>
  );
};

const App = () => {
  return (
    <CartProvider>
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarIcon: ({ color, size }) => {
              let iconName;

              if (route.name === 'Assortiment') {
                iconName = 'home';
              } else if (route.name === 'Favorites') {
                iconName = 'heart-outline';
              } else if (route.name === 'Settings') {
                iconName = 'cog';
              }

              return <Icon name={iconName} size={size} color={color} />;
            },
          })}
          tabBarOptions={{
            activeTintColor: '#6547e9',
            inactiveTintColor: 'gray',
          }}
        >
          <Tab.Screen name="Assortiment" component={AssortimentStack} />
          <Tab.Screen name="Favorites" component={FavoritesScreen} />
          <Tab.Screen name="Settings" component={SettingsScreen} />
        </Tab.Navigator>
      </NavigationContainer>
    </CartProvider>
  );
};

export default App;
