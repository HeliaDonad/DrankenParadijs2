// ProductScreen.js

// Stap 1: Importeer React, de benodigde componenten en hooks
import React, { useState, useEffect } from 'react';
import { StyleSheet, View, TouchableOpacity, Text } from 'react-native';
import { useCart } from '../cartUtils';

import Artikel from '../components/ProductArtikel';

// Stap 2: Definieer het ProductScreen-component met route en navigation props
const ProductScreen = ({ route, navigation }) => {
  // Stap 3: Haal het 'id' uit de route parameters
  const { id } = route.params;
  // Stap 4: Haal de addToCart-functie op uit de useCart-hook
  const { addToCart } = useCart();

  // Stap 5: Render het component met een View, Artikel-component, en twee TouchableOpacity-knoppen
  return (
    <View style={styles.screen}>
      {/* Stap 6: Render het Artikel-component met het opgehaalde 'id' */}
      <Artikel artikelId={id} />
      
      {/* Stap 7: Voeg een TouchableOpacity-knop toe voor het toevoegen aan het winkelmandje */}
      <TouchableOpacity
        style={styles.addbutton}
        onPress={() => {
          // Stap 8: Roep de addToCart-functie aan bij het indrukken van de knop
          addToCart();
        }}
      >
        <Text style={styles.buttonText2}>In winkelmandje</Text>
      </TouchableOpacity>

      {/* Stap 9: Voeg een TouchableOpacity-knop toe voor teruggaan naar het assortiment */}
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Ons assortiment')}
      >
        <Text style={styles.buttonText}>Terug naar dranken</Text>
      </TouchableOpacity>
    </View>
  );
}

// Stap 10: Definieer stijlen met StyleSheet.create
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

// Stap 11: Exporteer het ProductScreen-component als standaard export
export default ProductScreen;
