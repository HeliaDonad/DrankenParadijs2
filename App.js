// App.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ShoppingCartIcon from './screens/ShoppingCartIcon'; 
import AssortimentScreen from './screens/AssortimentScreen';
import ProductScreen from './screens/ProductScreen';
import ShoppingCartScreen from './screens/ShoppingCartScreen';
import { CartProvider } from './cartUtils';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <CartProvider>
      <NavigationContainer>
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
      </NavigationContainer>
    </CartProvider>
  );
};

export default App;
