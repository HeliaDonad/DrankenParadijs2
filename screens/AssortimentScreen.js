import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, FlatList, TextInput, Platform } from 'react-native';

import AssortimentItem from '../components/AssortimentItem';

const AssortimentScreen = ({ navigation }) => {
  const [artikels, setArtikel] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredArtikels, setFilteredArtikels] = useState([]);

  const getProductArtikels = async () => {
    try {
      let url;
      if (Platform.OS === 'android') {
        url = "http://10.0.2.2:60049/api/assortiment/";
      } else {
        url = "http://drankenparadijs.ddev.site/api/assortiment/"
      }

      const response = await fetch(url, {
        "method": "GET"
      });
      const json = await response.json();
      setArtikel(json.items);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    getProductArtikels();
  }, []);

  useEffect(() => {
    const filteredProducts = artikels.filter((item) =>
      item.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredArtikels(filteredProducts);
  }, [artikels, searchTerm]);

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
          if (Platform.OS === 'android') {
            item.assImg = item.assImg.replace('drankenparadijs.ddev.site', '10.0.2.2:60049');
          }

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

const styles = StyleSheet.create({
  screen: {
    padding: 24,
    backgroundColor: "#fcfcfc",
  },
  list: {
    height: "90%",
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

export default AssortimentScreen;
