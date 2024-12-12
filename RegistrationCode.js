import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View, TouchableOpacity, Picker } from 'react-native';

export default function App() {
  const [selectedOccupation, setSelectedOccupation] = useState('');

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Your Information</Text>
      <Text style={styles.subtitle}>Please put your Information here</Text>

      <Text style={styles.label}>Work Experiences</Text>
      <TextInput style={styles.input} placeholder="Enter your work experiences" placeholderTextColor="#C4C4C4" />

      <Text style={styles.label}>Skills</Text>
      <TextInput style={styles.input} placeholder="Enter your skills" placeholderTextColor="#C4C4C4" />

      <Text style={styles.label}>Educational Attainment</Text>
      <TextInput style={styles.input} placeholder="Enter your educational attainment" placeholderTextColor="#C4C4C4" />

      <Text style={styles.label}>Occupation</Text>
      <View style={styles.pickerContainer}>
        <Picker
          selectedValue={selectedOccupation}
          onValueChange={(itemValue) => setSelectedOccupation(itemValue)}
          style={styles.picker}
        >
          <Picker.Item label="Select your occupation" value="" />
          <Picker.Item label="Computer Scientist" value="Computer Scientist" />
          <Picker.Item label="Data Analyst" value="Data Analyst" />
          <Picker.Item label="Software Engineer" value="Software Engineer" />
        </Picker>
      </View>

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>NEXT</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 50,
    color: '#000000',
  },
  subtitle: {
    fontSize: 16,
    color: '#6C6C6C',
    marginVertical: 10,
    textAlign: 'center',
  },
  label: {
    alignSelf: 'flex-start',
    marginTop: 20,
    fontSize: 16,
    color: '#FF8C00',
  },
  input: {
    width: '100%',
    height: 50,
    borderWidth: 1,
    borderColor: '#E0E0E0',
    borderRadius: 8,
    paddingHorizontal: 15,
    backgroundColor: '#F5F5F5',
    fontSize: 16,
    color: '#000000',
    marginTop: 5,
  },
  pickerContainer: {
    width: '100%',
    borderWidth: 1,
    borderColor: '#E0E0E0',
    borderRadius: 8,
    backgroundColor: '#F5F5F5',
    marginTop: 5,
  },
  picker: {
    width: '100%',
    height: 50,
    color: '#000000',
  },
  button: {
    marginTop: 30,
    backgroundColor: '#FFB74D',
    borderRadius: 8,
    width: '100%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
