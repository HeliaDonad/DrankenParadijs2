import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Button } from 'react-native';

import Artikel from '../components/ProductArtikel';

const ArtikelScreen = ({ route, navigation }) => {
  const { id } = route.params;

  return (
    <View style={styles.screen}>
      <Artikel artikelId={id} />
      <Button
        title="Terug naar dranken"
        onPress={() => navigation.navigate('Assortiment')}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: "#6547e9",
  }
});
export default ArtikelScreen;