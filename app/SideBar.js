import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      {/* Header Section */}
      <View style={styles.header}>
        <Image
          source={{ uri: 'https://i.pravatar.cc/100' }} // Placeholder profile image
          style={styles.profileImage}
        />
        <View style={styles.userInfo}>
          <Text style={styles.username}>Lance Ferangco</Text>
          <Text style={styles.email}>loyallance@gmail.com</Text>
        </View>
      </View>

      {/* Menu Items */}
      <ScrollView style={styles.menu}>
        <MenuItem icon="👤" text="Profile" />
        <MenuItem icon="📄" text="Applications" />
        <MenuItem icon="🔔" text="Notifications" />
        <MenuItem icon="📞" text="Contact Us" />
        <MenuItem icon="⚙️" text="Settings" />
        <MenuItem icon="❓" text="Helps and FAQs" />
      </ScrollView>

      {/* Logout Button */}
      <TouchableOpacity style={styles.logoutButton}>
        <Text style={styles.logoutText}>Log Out</Text>
      </TouchableOpacity>
    </View>
  );
}

// Reusable Menu Item Component
const MenuItem = ({ icon, text }) => (
  <TouchableOpacity style={styles.menuItem}>
    <Text style={styles.menuIcon}>{icon}</Text>
    <Text style={styles.menuText}>{text}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    paddingHorizontal: 20,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 40,
    marginBottom: 30,
  },
  profileImage: {
    width: 70,
    height: 70,
    borderRadius: 35,
    marginRight: 15,
  },
  userInfo: {
    flexDirection: 'column',
  },
  username: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#2A2A2A',
  },
  email: {
    fontSize: 14,
    color: '#777',
  },
  menu: {
    flex: 1,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
  },
  menuIcon: {
    fontSize: 22,
    marginRight: 15,
  },
  menuText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
  },
  logoutButton: {
    backgroundColor: '#FFB84D',
    borderRadius: 8,
    paddingVertical: 12,
    alignItems: 'center',
    marginBottom: 20,
  },
  logoutText: {
    fontSize: 16,
    color: '#4C2A00',
    fontWeight: 'bold',
  },
});
