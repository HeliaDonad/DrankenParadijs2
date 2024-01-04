import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import AssortimentScreen from './screens/AssortimentScreen';
import ProductScreen from './screens/ProductScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Assortiment" component={AssortimentScreen} />
        <Stack.Screen name="Details" component={ProductScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}