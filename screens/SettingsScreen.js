// SettingsScreen.js

// Stap 1: Importeer React en de benodigde componenten en hooks
import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView, TextInput } from 'react-native';

// Stap 2: Definieer het SettingsScreen-component met navigation prop
const SettingsScreen = ({ navigation }) => {
  // Stap 3: Stel een state in voor de geselecteerde emoji
  const [selectedEmoji, setSelectedEmoji] = useState('🍹'); // Standaard dranken emoji

  // Stap 4: Functie om instellingen op te slaan
  const saveSettings = () => {
    console.log('Gekozen emoji:', selectedEmoji);
    navigation.goBack();
  };

  // Stap 5: Render het component met een ScrollView, Text, TextInput en TouchableOpacity-knop
  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Stap 6: Voeg een tekst toe voor de instellingen */}
      <Text style={styles.title2}>Instellingen</Text>
      <View style={styles.settingContainer}>
        {/* Stap 7: Voeg een label toe voor het kiezen van een emoji */}
        <Text style={styles.label}>Kies een dranken emoji:</Text>
        {/* Stap 8: Voeg een TextInput toe voor het invoeren van de emoji */}
        <TextInput
          style={styles.emojiInput}
          value={selectedEmoji}
          onChangeText={(text) => setSelectedEmoji(text)}
        />
      </View>
      {/* Stap 9: Voeg een TouchableOpacity-knop toe voor het opslaan van de instellingen */}
      <TouchableOpacity
        style={styles.addbutton}
        onPress={saveSettings}
      >
        <Text style={styles.buttonText2}>Opslaan</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

// Stap 10: Definieer stijlen met StyleSheet.create
const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  title2: {
    fontSize: 24,
    color: "#6547e9",
    fontWeight: "bold",
    textTransform: "uppercase",
    marginBottom: 40,
    textAlign: "center",
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
});

// Stap 11: Exporteer het SettingsScreen-component als standaard export
export default SettingsScreen;
