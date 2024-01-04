import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Image, ScrollView, Platform } from 'react-native';

const ProductArtikel = props => {
  const [artikel, setArtikel] = useState({});
  // console.log(props.artikelId);
  const getArtikelData = async () => {
    try {
      //127.0.0.1 -> surft naar dit toestel
      //10.0.2.2 -> surft naar host toestel

      let url;
      if (Platform.OS == 'android') {
        //ddev describe om port number te weten te komen

        url = "http://10.0.2.2:60049/api/assortiment/";
      }
      else {
        url = "http://drankenparadijs.ddev.site/api/assortiment/";
      }
      url += props.artikelId;
      const response = await fetch(url, {
        "method": "GET"
      });
      const json = await response.json();
      console.log(json.assImg);
      if (Platform.OS == 'android') {
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

  return (
    <ScrollView>
      <Image
        style={styles.image}
        source={{
          uri: artikel.assImg
        }}
      />
      <View style={styles.wrapper}>
        <Text style={styles.title}>{artikel.title}</Text>
        <Text style={styles.body}>{artikel.fullText}</Text>
      </View>
    </ScrollView >
  );
}

const styles = StyleSheet.create({
  image: {
    height: 150,
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
  },
  body: {
    lineHeight: 24

  }
});
export default ProductArtikel;