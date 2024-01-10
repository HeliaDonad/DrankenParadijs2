import React from 'react';
import { StyleSheet, Text, View, FlatList, Image } from 'react-native';
import { useFavorites } from '../FavoriteContext';

const FavoritesScreen = () => {
  const { favorites } = useFavorites();

  return (
    <View style={styles.screen}>
      <Text style={styles.title2}>Favorieten</Text>
      <FlatList
      style={styles.list}
        data={favorites}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
            <View style={styles.assortimentItem}>
            <View style={styles.bannerContainer}>
              <Image style={styles.banner} source={{uri: item.banner}}
              />
            </View>
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.price}>€{item.price}</Text>
            {console.log("Image URL:", item.banner)}
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    padding: 24,
    backgroundColor: "#fcfcfc",
  },

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

  list: {
    height: "95%",
  },

  title2: {
    fontSize: 24,
    color: "#6547e9",
    fontWeight: "bold",
    textTransform: "uppercase",
    marginBottom: 8,
    textAlign: "center",
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
  },
});

export default FavoritesScreen;
