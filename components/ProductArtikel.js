// ProductArtikel.js

import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Image, ScrollView, Platform, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { useFavorites } from '../FavoriteContext';

// Stap 1: Definieer het ProductArtikel-component met de ontvangen props
const ProductArtikel = (props) => {
  // Stap 2: Haal addToFavorites, removeFromFavorites, en isFavorite op uit de useFavorites-hook
  const { addToFavorites, removeFromFavorites, isFavorite } = useFavorites();
  // Stap 3: Gebruik useState om artikelgegevens bij te houden
  const [artikel, setArtikel] = useState({});

  // Stap 4: Definieer de getArtikelData-functie om artikelgegevens op te halen
  const getArtikelData = async () => {
    try {
      // Stap 5: Bepaal de URL op basis van het besturingssysteem
      let url;
      if (Platform.OS === 'android') {
        url = "http://10.0.2.2:60049/api/assortiment/";
      } else {
        url = "http://drankenparadijs.ddev.site/api/assortiment/";
      }
      url += props.artikelId;

      // Stap 6: Voer een fetch-request uit om de artikelgegevens op te halen
      const response = await fetch(url, {
        "method": "GET"
      });
      const json = await response.json();

      // Stap 7: Pas de afbeeldings-URL aan voor Android
      if (Platform.OS === 'android') {
        json.assImg = json.assImg.replace('drankenparadijs.ddev.site', '10.0.2.2:60049');
      }

      // Stap 8: Update de staat met de opgehaalde artikelgegevens
      setArtikel(json);
    } catch (error) {
      console.error(error);
    }
  }

  // Stap 9: Roep getArtikelData aan bij het laden van het component met useEffect
  useEffect(() => {
    getArtikelData();
  }, []);

  // Stap 10: Definieer de toggleFavorite-functie om items toe te voegen/verwijderen uit favorieten
  const toggleFavorite = () => {
    if (isFavorite(props.artikelId)) {
      removeFromFavorites(props.artikelId);
    } else {
      addToFavorites({
        id: props.artikelId,
        title: artikel.title,
        banner: artikel.assImg,
        price: artikel.price,
      });
    }
  };

  // Stap 11: Render het component met ScrollView en weergave van artikelgegevens
  return (
    <ScrollView>
      {/* Stap 12: Voeg een favorietenknop toe met een hartpictogram */}
      <TouchableOpacity onPress={toggleFavorite} style={styles.favoriteButton}>
        <Icon name={isFavorite(props.artikelId) ? 'heart' : 'heart-outline'} size={48} color={isFavorite(props.artikelId) ? '#6547e9' : 'black'} />
      </TouchableOpacity>
      {/* Stap 13: Voeg een afbeelding toe met de gegeven URI */}
      <View style={styles.bannerImage}>
        <Image
          style={styles.image}
          source={{
            uri: artikel.assImg
          }}
        />
      </View>
      {/* Stap 14: Voeg titel, prijs, omschrijving en tekst toe */}
      <View style={styles.wrapper}>
        <Text style={styles.title}>{artikel.title}</Text>
        <Text style={styles.price}>€{artikel.price}</Text>
        <Text style={styles.h3}>Omschrijving:</Text>
        <Text style={styles.text}>{artikel.fullText}</Text>
      </View>
    </ScrollView>
  );
}

// Stap 15: Definieer stijlen met StyleSheet.create
const styles = StyleSheet.create({
  image: {
    width: 200,
    height: 300,
    marginTop: 24,
  },

  bannerImage: {
    alignItems: 'center',
    marginBottom: 12,
  },

  wrapper: {
    padding: 24
  },

  title: {
    fontSize: 24,
    color: "#6547e9",
    fontWeight: "bold",
    textTransform: "uppercase",
    marginBottom: 24,
    textAlign: 'center',
  },

  h3: {
    fontSize: 18,
    fontWeight: "bold",
    paddingBottom: 12,
    paddingTop: 12,
  },

  text: {
    lineHeight: 24,
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
    paddingBottom: 20,
  },
});

// Stap 16: Exporteer het ProductArtikel-component als standaard export
export default ProductArtikel;
