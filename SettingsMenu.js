import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const SettingsMenu = ({ navigation }) => {
  const menuItems = [
    { id: '1', title: 'Profile', icon: '👤', screen: 'Profile' },
    { id: '2', title: 'Notifications', icon: '🔔', screen: 'Notifications' },
    { id: '3', title: 'Privacy', icon: '🔒', screen: 'Privacy' },
    { id: '4', title: 'Help & Support', icon: '❓', screen: 'Support' },
    { id: '5', title: 'About', icon: 'ℹ️', screen: 'About' },
    { id: '6', title: 'Logout', icon: '🚪', screen: 'Logout' }
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Settings Menu</Text>
      
      {menuItems.map((item) => (
        <TouchableOpacity 
          key={item.id} 
          style={styles.menuItem}
          onPress={() => navigation.navigate(item.screen)}
        >
          <Text style={styles.icon}>{item.icon}</Text>
          <Text style={styles.menuText}>{item.title}</Text>
          <Text style={styles.arrow}>›</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: { backgroundColor: '#fff', padding: 20, borderRadius: 10, margin: 15 },
  title: { fontSize: 22, fontWeight: 'bold', marginBottom: 20, color: '#333' },
  menuItem: { 
    flexDirection: 'row', 
    alignItems: 'center', 
    paddingVertical: 15, 
    borderBottomWidth: 1, 
    borderBottomColor: '#f0f0f0' 
  },
  icon: { fontSize: 24, marginRight: 15, width: 30 },
  menuText: { fontSize: 18, flex: 1, color: '#333' },
  arrow: { fontSize: 24, color: '#999' }
});

export default SettingsMenu;
