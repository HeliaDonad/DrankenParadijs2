import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Image, ScrollView, Platform, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const ProductArtikel = props => {
  const [artikel, setArtikel] = useState({});
  const [isFavorite, setIsFavorite] = useState(false);

  const getArtikelData = async () => {
    try {
      let url;
      if (Platform.OS === 'android') {
        url = "http://10.0.2.2:60049/api/assortiment/";
      } else {
        url = "http://drankenparadijs.ddev.site/api/assortiment/";
      }
      url += props.artikelId;
      const response = await fetch(url, {
        "method": "GET"
      });
      const json = await response.json();
      if (Platform.OS === 'android') {
        json.assImg = json.assImg.replace('drankenparadijs.ddev.site', '10.0.2.2:60049');
      }
      setArtikel(json);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    getArtikelData();
  }, []);

  const toggleFavorite = () => {
    setIsFavorite(!isFavorite);
  };

  return (
    <ScrollView>
        <TouchableOpacity onPress={toggleFavorite} style={styles.favoriteButton}>
          <Icon name={isFavorite ? 'heart' : 'heart-outline'} size={48} color={isFavorite ? '#6547e9' : 'black'} />
        </TouchableOpacity>
      <View style={styles.bannerImage}>
        <Image
          style={styles.image}
          source={{
            uri: artikel.assImg
          }}
        />
      </View>
      <View style={styles.wrapper}>
        <Text style={styles.title}>{artikel.title}</Text>
        <Text style={styles.price}>€{artikel.price}</Text>
        <Text style={styles.h3}>Omschrijving:</Text>
        <Text style={styles.text}>{artikel.fullText}</Text>
      </View>
    </ScrollView>
  );
}

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

export default ProductArtikel;
