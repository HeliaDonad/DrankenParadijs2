import React, { useState, useEffect } from 'react';
import { StyleSheet, View, TouchableOpacity, Text } from 'react-native';

import Artikel from '../components/ProductArtikel';

const ArtikelScreen = ({ route, navigation }) => {
  const { id } = route.params;

  return (
    <View style={styles.screen}>
      <Artikel artikelId={id} />
      
      <TouchableOpacity
        style={styles.addbutton}
        onPress={() => {
          // Voeg hier de logica toe om het item aan het winkelmandje toe te voegen
        }}
      >
        <Text style={styles.buttonText2}>In winkelmandje</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Assortiment')}
      >
        <Text style={styles.buttonText}>Terug naar dranken</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: "#fcfcfc",
  },

  button: {
    backgroundColor: "#6547e9",
    padding: 10,
    marginTop: 10,
  },

  buttonText: {
    color: "#fff",
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 16,
  },

  buttonText2: {
    color: "#6547e9",
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 24,
  },

  addbutton: {
    padding: 10,
    borderRadius: 8,
    borderWidth: 2,
    borderColor: '#6547e9',
    margin: 16,
  },
});

export default ArtikelScreen;
