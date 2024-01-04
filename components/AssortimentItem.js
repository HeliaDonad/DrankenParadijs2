import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';

const AssortimentItem = props => {
  return (
    <TouchableOpacity activeOpacity={0.5} onPress={() => props.onSelectArtikel(props.id)}>
      <View style={styles.assortimentItem}>
      <View style={styles.bannerContainer}>
        <Image
          style={styles.banner}
          source={{
            uri: props.banner
          }}
        />
        </View>
        <Text style={styles.title}>{props.title}</Text>
        <Text style={styles.price}>€{props.price}</Text>
      </View>
    </TouchableOpacity >

  );
}

const styles = StyleSheet.create({
  assortimentItem: {
    padding: 12,
    marginVertical: 8,
    backgroundColor: "#FFF",
    borderRadius: 10,
    shadowRadius: 1,
    shadowColor: "#000",
    shadowOffset: {
      width: 2,
      height: 2,
    },
    shadowOpacity: 0.2,
    elevation: 1, 
  },
  banner: {
    width: 200,
    height: 300,
  },

  bannerContainer: {
    alignItems: 'center', 
    marginBottom: 12,
  },

  title: {
    fontWeight: "bold",
    color: "#6547e9",
    fontSize: 16,
    marginTop: 12,
    marginBottom: 12,
    textTransform: "uppercase",
    textAlign: 'center',
  },

  price: {
    marginBottom: 12,
    textAlign: 'center',
    fontWeight: "bold",
    fontSize: 22,
  }
});
export default AssortimentItem;