import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Image, ScrollView, Platform } from 'react-native';


const NewsArticle = props => {
  const [article, setArticle] = useState({});
  // console.log(props.articleId);
  const getArticleData = async () => {
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
      url += props.articleId;
      const response = await fetch(url, {
        "method": "GET"
      });
      const json = await response.json();
      console.log(json.headerImg);
      if (Platform.OS == 'android') {
        json.headerImg = json.headerImg.replace('drankenparadijs.ddev.site', '10.0.2.2:60049');
      }
      setArticle(json);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    getArticleData();
  }, []);

  return (
    <ScrollView>
      <Image
        style={styles.image}
        source={{
          uri: article.headerImg
        }}
      />
      <View style={styles.wrapper}>
        <Text style={styles.title}>{article.title}</Text>
        <Text style={styles.body}>{article.fullText}</Text>
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
    color: "#D24335",
    fontWeight: "bold",
    textTransform: "uppercase",
    marginBottom: 24,
  },
  body: {
    lineHeight: 24

  }
});
export default NewsArticle;