import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Button } from 'react-native';

import Article from '../components/ProductArtikel';

const ArticleScreen = ({ route, navigation }) => {
  const { id } = route.params;

  return (
    <View style={styles.screen}>
      <Article artikelId={id} />
      <Button
        title="back to news"
        onPress={() => navigation.navigate('News')}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: "#F8F6F6",
  }
});
export default ArticleScreen;