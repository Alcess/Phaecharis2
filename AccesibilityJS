import React, { useState } from "react";
import { View, Text, Switch, StyleSheet, Image, TouchableOpacity } from "react-native";

export default function AccessibilityScreen() {
  const [textToSpeech, setTextToSpeech] = useState(true);
  const [colorblindMode, setColorblindMode] = useState(false);
  const [soundsVibrations, setSoundsVibrations] = useState(false);
  const [hearingAidCompatibility, setHearingAidCompatibility] = useState(false);
  const [splitScreenCompatibility, setSplitScreenCompatibility] = useState(false);

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity>
          <Text style={styles.backArrow}>←</Text>
        </TouchableOpacity>
        <Text style={styles.title}>User Accessibility</Text>
        <Image
          source={{ uri: "https://via.placeholder.com/50" }} // Replace with user's avatar image
          style={styles.avatar}
        />
      </View>

      {/* Accessibility Options */}
      <View style={styles.option}>
        <Text style={styles.label}>Text to Speech</Text>
        <Switch
          value={textToSpeech}
          onValueChange={(value) => setTextToSpeech(value)}
          thumbColor={textToSpeech ? "#FFA500" : "#f4f3f4"}
        />
      </View>

      <View style={styles.option}>
        <Text style={styles.label}>Colorblind Mode</Text>
        <Switch
          value={colorblindMode}
          onValueChange={(value) => setColorblindMode(value)}
        />
      </View>

      <View style={styles.option}>
        <Text style={styles.label}>Sounds and Vibrations</Text>
        <Switch
          value={soundsVibrations}
          onValueChange={(value) => setSoundsVibrations(value)}
        />
      </View>

      <View style={styles.option}>
        <Text style={styles.label}>Hearing Aid Compatibility</Text>
        <Switch
          value={hearingAidCompatibility}
          onValueChange={(value) => setHearingAidCompatibility(value)}
        />
      </View>

      <View style={styles.option}>
        <Text style={styles.label}>Split Screen Compatibility</Text>
        <Switch
          value={splitScreenCompatibility}
          onValueChange={(value) => setSplitScreenCompatibility(value)}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 20,
    paddingTop: 50,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
  },
  backArrow: {
    fontSize: 24,
    color: "#000",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  option: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
  },
  label: {
    fontSize: 16,
    color: "#333",
  },
});
