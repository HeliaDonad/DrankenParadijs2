import React from 'react';
import { StyleSheet, Text, View, FlatList, TextInput, Platform } from 'react-native';
import { useCart } from '../cartUtils';

const ShoppingCartScreen = ({ navigation }) => {
  const { cartItemsCount } = useCart();

  // You can have additional logic to retrieve cart items here

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Winkelmandje</Text>
      <Text style={styles.cartItemCount}>Aantal items in winkelmandje: {cartItemsCount}</Text>
      {/* Additional logic to display cart items */}
      {/* For example, use FlatList to display cart items */}
      {/* Make sure to modify this part based on your cart data structure */}
      {/* Replace this with your actual logic to display cart items */}
      <FlatList
        data={/* Your cart items data */}
        keyExtractor={(item) => /* Unique key for each cart item */}
        renderItem={({ item }) => (
          <View style={styles.cartItem}>
            <Text>{item.title}</Text>
            <Text>{item.price}</Text>
            {/* Additional information you want to display */}
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: "#fcfcfc",
  },
  title: {
    fontSize: 24,
    color: "#6547e9",
    fontWeight: "bold",
    textTransform: "uppercase",
    marginBottom: 16,
  },
  cartItemCount: {
    fontSize: 16,
    marginBottom: 16,
  },
  cartItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
});

export default ShoppingCartScreen;
