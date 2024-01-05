import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';

const ShoppingCartIcon = () => {
  const cartItemsCount = 0; 
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      onPress={() => navigation.navigate('Winkelmandje')}
      style={styles.container}>
      <View style={styles.cirkel}>
        <Text style={styles.nummer}>{cartItemsCount}</Text>
      </View>
      <Icon name="cart" size={30} color="white" />
    </TouchableOpacity>
  );
};

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

export default ShoppingCartIcon;
