import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';

const AssortimentItem = props => {
  console.log('props:', props);
  console.log('assImg:', props.assImg);
  return (
    <TouchableOpacity activeOpacity={0.5} onPress={() => props.onSelectArtikel(props.id)}>
      <View style={styles.assortimentItem}>
        <Image
          style={styles.banner}
          source={{
            uri: props.assImg
          }}
        />
        <Text style={styles.title}>{props.title}</Text>
        <Text style={styles.price}>{props.price}</Text>
      </View>
    </TouchableOpacity >

  );
}

const styles = StyleSheet.create({
  assortimentItem: {
    padding: 12,
    marginVertical: 8,
    backgroundColor: "#fff",
    borderRadius: 5,
    shadowRadius: 1,
    shadowColor: "#000",
    shadowOffset: {
      width: 2,
      height: 2,
    },
    shadowOpacity: 0.1,
  },
  banner: {
    height: 200
  },
  title: {
    fontWeight: "bold",
    color: "#6547e9",
    fontSize: 16,
    marginTop: 12,
    marginBottom: 12,
    textTransform: "uppercase"
  },

  price: {
    marginBottom: 8
  }
});
export default AssortimentItem;