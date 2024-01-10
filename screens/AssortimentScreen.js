// AssortimentScreen.js

import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, FlatList, TextInput, Platform } from 'react-native';

import AssortimentItem from '../components/AssortimentItem';

// Stap 1: Definieer het AssortimentScreen-component met de ontvangen props (navigation)
const AssortimentScreen = ({ navigation }) => {
  // Stap 2: Gebruik useState om de staat van artikels, searchTerm en filteredArtikels bij te houden
  const [artikels, setArtikel] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredArtikels, setFilteredArtikels] = useState([]);

  // Stap 3: Definieer de getProductArtikels-functie om artikels op te halen
  const getProductArtikels = async () => {
    try {
      // Stap 4: Bepaal de URL op basis van het besturingssysteem
      let url;
      if (Platform.OS === 'android') {
        url = "http://10.0.2.2:60049/api/assortiment/";
      } else {
        url = "http://drankenparadijs.ddev.site/api/assortiment/"
      }

      // Stap 5: Voer een fetch-request uit om de artikels op te halen
      const response = await fetch(url, {
        "method": "GET"
      });
      const json = await response.json();

      // Stap 6: Update de staat met de opgehaalde artikels
      setArtikel(json.items);
    } catch (error) {
      console.error(error);
    }
  }

  // Stap 7: Roep getProductArtikels aan bij het laden van het component met useEffect
  useEffect(() => {
    getProductArtikels();
  }, []);

  // Stap 8: Gebruik useEffect om de artikels te filteren op basis van de zoekterm
  useEffect(() => {
    const filteredProducts = artikels.filter((item) =>
      item.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredArtikels(filteredProducts);
  }, [artikels, searchTerm]);

  // Stap 9: Render het component met een tekst, zoekinvoer, en FlatList voor weergave van artikels
  return (
    <View style={styles.screen}>
      <Text style={styles.title}>Dranken</Text>
      <TextInput
        style={styles.searchInput}
        placeholder="Zoek op titel..."
        onChangeText={(text) => setSearchTerm(text)}
        value={searchTerm}
      />
      <FlatList
        style={styles.list}
        data={filteredArtikels}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => {
          // Stap 10: Pas de afbeeldings-URL aan voor Android
          if (Platform.OS === 'android') {
            item.assImg = item.assImg.replace('drankenparadijs.ddev.site', '10.0.2.2:60049');
          }

          // Stap 11: Render het AssortimentItem-component voor elk artikel
          return (
            <AssortimentItem
              id={item.id}
              title={item.title}
              price={item.price}
              banner={item.assImg}
              navigation={navigation}
              onSelectArtikel={(selectedId) => { navigation.navigate('Omschrijving', { id: selectedId }) }}
            />
          );
        }}
      />
    </View>
  );
}

// Stap 12: Definieer stijlen met StyleSheet.create
const styles = StyleSheet.create({
  screen: {
    padding: 24,
    backgroundColor: "#fcfcfc",
  },
  list: {
    height: "80%",
  },
  title: {
    fontSize: 24,
    color: "#6547e9",
    fontWeight: "bold",
    textTransform: "uppercase",
    marginBottom: 8,
    textAlign: "center"
  },
  searchInput: {
    height: 40,
    borderColor: '#6547e9',
    borderWidth: 1,
    marginBottom: 16,
    paddingLeft: 8,
    marginTop: 12,
    borderRadius: 8,
  },
});

// Stap 13: Exporteer het AssortimentScreen-component als standaard export
export default AssortimentScreen;
