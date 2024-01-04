import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, FlatList, TextInput, Platform } from 'react-native';

import AssortimentItem from '../components/AssortimentItem';

const AssortimentScreen = ({ navigation }) => {
  const [assortiment, setAssortiment] = useState([]);

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
      console.log(json.items);
      setAssortiment(json.items);
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
        data={assortiment}
        keyExtractor={item => item.id}//gebruik id als key voor de flatlist
        renderItem={({ item }) => {
          if (Platform.OS == 'android') {
            item.bannerImg = item.bannerImg.replace('drankenparadijs.ddev.site', '10.0.2.2:60628');
          }

          console.log(item.bannerImg);
          return <AssortimentItem
            id={item.id}
            title={item.title}
            intro={item.intro}
            banner={item.bannerImg}
            navigation={navigation}
            onSelectArticle={(selectedId) => { navigation.navigate('Details', { id: selectedId }) }}
          />
        }}
      />
    </View >
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 24,
    backgroundColor: "#F8F6F6",
  },
  list: {
    height: "90%",
  },
  title: {
    fontSize: 24,
    color: "#D24335",
    fontWeight: "bold",
    textTransform: "uppercase",
    marginBottom: 8,
    textAlign: "center"
  }
});
export default AssortimentScreen;