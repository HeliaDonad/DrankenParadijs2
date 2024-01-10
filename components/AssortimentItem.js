// AssortimentItem.js

import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { useFavorites } from '../FavoriteContext';

// Stap 1: Definieer het AssortimentItem-component met de ontvangen props
const AssortimentItem = (props) => {
  // Stap 2: Haal addToFavorites, removeFromFavorites, en isFavorite op uit de useFavorites-hook
  const { addToFavorites, removeFromFavorites, isFavorite } = useFavorites();

  // Stap 3: Definieer de toggleFavorite-functie om items toe te voegen/verwijderen uit favorieten
  const toggleFavorite = () => {
    if (isFavorite(props.id)) {
      removeFromFavorites(props.id);
    } else {
      addToFavorites({
        id: props.id,
        title: props.title,
        banner: props.banner,
        price: props.price,
      });
    }
  };

  // Stap 4: Render het component met TouchableOpacity en het assortimentItem-view
  return (
    <TouchableOpacity activeOpacity={0.5} onPress={() => props.onSelectArtikel(props.id)}>
      <View style={styles.assortimentItem}>
        {/* Stap 5: Voeg een banner toe met de gegeven URI */}
        <View style={styles.bannerContainer}>
          <Image
            style={styles.banner}
            source={{
              uri: props.banner,
            }}
          />
        </View>
        {/* Stap 6: Voeg titel en prijs toe */}
        <Text style={styles.title}>{props.title}</Text>
        <Text style={styles.price}>€{props.price}</Text>
        {/* Stap 7: Voeg een favorietenknop toe met een hartpictogram */}
        <TouchableOpacity onPress={toggleFavorite} style={styles.favoriteButton}>
          <Icon name={isFavorite(props.id) ? 'heart' : 'heart-outline'} size={32} color={isFavorite(props.id) ? '#6547e9' : 'black'} />
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
};

// Stap 8: Definieer stijlen met StyleSheet.create
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
  },
  favoriteButton: {
    position: 'absolute',
    top: 22,
    right: 22,
  },
});

// Stap 9: Exporteer het AssortimentItem-component als standaard export
export default AssortimentItem;
