import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView, TextInput } from 'react-native';

const SettingsScreen = ({ navigation }) => {
  const [selectedEmoji, setSelectedEmoji] = useState('🍹'); // Standaard dranken emoji

  const saveSettings = () => {
    console.log('Gekozen emoji:', selectedEmoji);
    navigation.goBack();
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
    <Text style={styles.title2}>Instellingen</Text>
      <View style={styles.settingContainer}>
        <Text style={styles.label}>Kies een dranken emoji:</Text>
        <TextInput
          style={styles.emojiInput}
          value={selectedEmoji}
          onChangeText={(text) => setSelectedEmoji(text)}
        />
      </View>
      <TouchableOpacity
        style={styles.addbutton}
        onPress={saveSettings}
      >
        <Text style={styles.buttonText2}>Opslaan</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  settingContainer: {
    marginBottom: 16,
  },
  label: {
    fontSize: 16,
    marginBottom: 8,
  },
  emojiInput: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 4,
    padding: 8,
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
    marginTop: 20,
  },
  
  title2: {
    fontSize: 24,
    color: "#6547e9",
    fontWeight: "bold",
    textTransform: "uppercase",
    marginBottom: 40,
    textAlign: "center",
  },
});

export default SettingsScreen;
