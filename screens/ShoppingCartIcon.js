// ShoppingCartIcon.js

// Stap 1: Importeer React en de benodigde componenten en hooks
import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import { useCart } from '../cartUtils';

// Stap 2: Definieer het ShoppingCartIcon-component
const ShoppingCartIcon = () => {
  // Stap 3: Haal cartItemsCount en navigation op uit de useCart-hook en useNavigation-hook
  const { cartItemsCount } = useCart();
  const navigation = useNavigation();

  // Stap 4: Render het component met een TouchableOpacity en een cirkel voor het winkelmandje-icoon
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate('Winkelmandje')}
      style={styles.container}>
      {/* Stap 5: Voeg een cirkel toe voor het aantal items in het winkelmandje */}
      <View style={styles.cirkel}>
        <Text style={styles.nummer}>{cartItemsCount}</Text>
      </View>
      {/* Stap 6: Voeg het winkelmandje-icoon toe met Ionicons */}
      <Icon name="cart" size={30} color="white" />
    </TouchableOpacity>
  );
};

// Stap 7: Definieer stijlen met een JavaScript-object
const styles = {
  container: {
    padding: 10,
    margin: 10,
  },
  cirkel: {
    position: 'absolute',
    height: 30,
    width: 30,
    borderRadius: 15,
    backgroundColor: 'rgba(95,197,123,0.8)',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 2000,
  },
  nummer: {
    color: 'white',
    fontWeight: 'bold',
  },
};

// Stap 8: Exporteer het ShoppingCartIcon-component als standaard export
export default ShoppingCartIcon;
