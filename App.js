import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import AssortimentScreen from './screens/AssortimentScreen';
import ProductScreen from './screens/ProductScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Ons assortiment" 
                options={{
                  title: "Ons assortiment",
                  headerStyle: {
                    backgroundColor:"#6547e9",
                  },
                  headerTintColor: '#fff',
                  textAlign: "center",
                  headerTitleStyle: {
                    fontWeight: 'bold',
                  },
                  headerTitleAlign: "center",
                }}
        component={AssortimentScreen} />
        <Stack.Screen name="Omschrijving" 
        options={{
          title: "Omschrijving",
          headerStyle: {
            backgroundColor:"#6547e9",
          },
          headerTintColor: '#fff',
          textAlign: "center",
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          headerTitleAlign: "center",
        }}
        component={ProductScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}