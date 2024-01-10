// FavoritesScreen.js

import React from 'react';
import { StyleSheet, Text, View, FlatList, Image } from 'react-native';
import { useFavorites } from '../FavoriteContext';

// Stap 1: Definieer het FavoritesScreen-component
const FavoritesScreen = () => {
  // Stap 2: Haal de favorieten op uit de useFavorites-hook
  const { favorites } = useFavorites();

  // Stap 3: Render het component met een tekst en een FlatList voor weergave van favorieten
  return (
    <View style={styles.screen}>
      {/* Stap 4: Voeg een tekst toe voor de favorieten */}
      <Text style={styles.title2}>Favorieten</Text>
      {/* Stap 5: Gebruik FlatList om de favorieten weer te geven */}
      <FlatList
        style={styles.list}
        data={favorites}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          // Stap 6: Render een assortimentItem voor elk favoriet item 
          <View style={styles.assortimentItem}>
            <View style={styles.bannerContainer}>
              {/* Stap 7: Voeg een afbeelding toe met de gegeven URI */}
              <Image style={styles.banner} source={{uri: item.banner}} />
            </View>
            {/* Stap 8: Voeg titel en prijs toe */}
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.price}>€{item.price}</Text>
            {/* Stap 9: Toon de afbeeldings-URL in de console voor controle */}
            {console.log("Image URL:", item.banner)}
          </View>
        )}
      />
    </View>
  );
};

// Stap 10: Definieer stijlen met StyleSheet.create
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

// Stap 11: Exporteer het FavoritesScreen-component als standaard export
export default FavoritesScreen;
