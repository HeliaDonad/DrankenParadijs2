import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, FlatList, TextInput, Platform } from 'react-native';

import AssortimentItem from '../components/AssortimentItem';

const AssortimentScreen = ({ navigation }) => {
  const [artikels, setArtikel] = useState([]);

  const getProductArtikels = async () => {
    try {
      let url;
      if (Platform.OS == 'android') {
        url = "http://10.0.2.2:60049/api/assortiment/";
      }
      else {
        url = "http://drankenparadijs.ddev.site/api/assortiment/"
      }

      const response = await fetch(url, {
        "method": "GET"
      });
      const json = await response.json();
      //console.log(json.items);
      setArtikel(json.items);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    getProductArtikels();
  }, []);

  return (
    <View style={styles.screen}>
      <Text style={styles.title}>Ons Assortiment</Text>
      <FlatList
        style={styles.list}
        data={artikels}
        keyExtractor={item => item.id}//gebruik id als key voor de flatlist
        renderItem={({ item }) => {
          if (Platform.OS == 'android') {
            item.assImg = item.assImg.replace('drankenparadijs.ddev.site', '10.0.2.2:60049');
          }

          //console.log(item.assImg);
          return <AssortimentItem
            id={item.id}
            title={item.title}
            price={item.price}
            banner={item.assImg}
            navigation={navigation}
            onSelectArtikel={(selectedId) => { navigation.navigate('Omschrijving', { id: selectedId }) }}
          />
        }}
      />
    </View >
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
  }
});
export default AssortimentScreen;