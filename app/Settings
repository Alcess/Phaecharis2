import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Switch,
  ScrollView,
} from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";

export default function SettingsScreen() {
  const [darkMode, setDarkMode] = useState(false);
  const [notificationsEnabled, setNotificationsEnabled] = useState(false);

  const toggleDarkMode = () => setDarkMode((prev) => !prev);
  const toggleNotifications = () => setNotificationsEnabled((prev) => !prev);

  const containerStyle = [
    styles.container,
    { backgroundColor: darkMode ? "#333" : "#f9f9f9" },
  ];

  const textStyle = { color: darkMode ? "#fff" : "#333" };

  return (
    <ScrollView contentContainerStyle={containerStyle}>
      <View style={styles.headerContainer}>
        <Text style={[styles.header, textStyle]}>Settings</Text>
        <View style={styles.iconContainer}>
          <TouchableOpacity style={styles.icon}>
            <Icon name="notifications" size={24} color={darkMode ? "#fff" : "#333"} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.icon}>
            <Icon name="person" size={24} color={darkMode ? "#fff" : "#333"} />
          </TouchableOpacity>
        </View>
      </View>
      <SettingItem
        label="Notifications"
        isToggle
        value={notificationsEnabled}
        onToggle={toggleNotifications}
        textStyle={textStyle}
      />
      <SettingItem
        label="Dark Mode"
        isToggle
        value={darkMode}
        onToggle={toggleDarkMode}
        textStyle={textStyle}
      />
      <SettingItem label="Security" textStyle={textStyle} />
      <SettingItem label="User Accessibility" textStyle={textStyle} />
      <SettingItem label="Account Manager" textStyle={textStyle} />
      <SettingItem label="Privacy Policy" textStyle={textStyle} />
      <SettingItem label="Community Guidelines" textStyle={textStyle} />
      <SettingItem label="Support" textStyle={textStyle} />
    </ScrollView>
  );
}

function SettingItem({ label, isToggle = false, value, onToggle, textStyle }) {
  return (
    <View style={styles.settingItem}>
      <Text style={[styles.settingLabel, textStyle]}>{label}</Text>
      {isToggle ? (
        <Switch value={value} onValueChange={onToggle} />
      ) : (
        <Text style={[styles.arrow, textStyle]}>{">"}</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    alignItems: "center",
    justifyContent: "flex-start",
  },
  headerContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
  },
  header: {
    fontSize: 20,
    fontFamily: "Arial",
  },
  iconContainer: {
    flexDirection: "row",
  },
  icon: {
    marginLeft: 15,
  },
  settingItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 8,
    marginBottom: 10,
    width: "100%",
    borderWidth: 1,
    borderColor: "#ddd",
  },
  settingLabel: {
    fontSize: 16,
  },
  arrow: {
    fontSize: 16,
  },
});
