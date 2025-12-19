import React, { useState } from 'react';
import { View, Text, Switch, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';
import SettingsMenu from './SettingsMenu';

const SettingsScreen = ({ navigation }) => {
  const [notifications, setNotifications] = useState(true);
  const [darkMode, setDarkMode] = useState(false);
  const [autoPlay, setAutoPlay] = useState(true);

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Settings</Text>
      </View>

      <SettingsMenu navigation={navigation} />

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>App Preferences</Text>
        
        <View style={styles.settingItem}>
          <View style={styles.settingText}>
            <Text style={styles.settingTitle}>Push Notifications</Text>
            <Text style={styles.settingDescription}>Receive updates about new movies</Text>
          </View>
          <Switch
            value={notifications}
            onValueChange={setNotifications}
            trackColor={{ false: '#767577', true: '#81b0ff' }}
          />
        </View>

        <View style={styles.settingItem}>
          <View style={styles.settingText}>
            <Text style={styles.settingTitle}>Dark Mode</Text>
            <Text style={styles.settingDescription}>Use dark theme</Text>
          </View>
          <Switch
            value={darkMode}
            onValueChange={setDarkMode}
            trackColor={{ false: '#767577', true: '#81b0ff' }}
          />
        </View>

        <View style={styles.settingItem}>
          <View style={styles.settingText}>
            <Text style={styles.settingTitle}>Auto-play Trailers</Text>
            <Text style={styles.settingDescription}>Play trailers automatically</Text>
          </View>
          <Switch
            value={autoPlay}
            onValueChange={setAutoPlay}
            trackColor={{ false: '#767577', true: '#81b0ff' }}
          />
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Account</Text>
        
        <TouchableOpacity style={styles.accountItem}>
          <Text style={styles.accountText}>Change Password</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.accountItem}>
          <Text style={styles.accountText}>Privacy Settings</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.accountItem}>
          <Text style={styles.accountText}>Delete Account</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.saveButton}>
        <Text style={styles.saveButtonText}>Save Settings</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f5f5f5' },
  header: { backgroundColor: '#fff', padding: 20, alignItems: 'center' },
  headerTitle: { fontSize: 24, fontWeight: 'bold' },
  section: { backgroundColor: '#fff', marginTop: 20, padding: 15, borderRadius: 10, marginHorizontal: 15 },
  sectionTitle: { fontSize: 20, fontWeight: 'bold', marginBottom: 15, color: '#333' },
  settingItem: { 
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    alignItems: 'center', 
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0'
  },
  settingText: { flex: 1 },
  settingTitle: { fontSize: 16, fontWeight: '600', color: '#333' },
  settingDescription: { fontSize: 14, color: '#666', marginTop: 2 },
  accountItem: { paddingVertical: 15, borderBottomWidth: 1, borderBottomColor: '#f0f0f0' },
  accountText: { fontSize: 16, color: '#007AFF' },
  saveButton: { backgroundColor: '#007AFF', margin: 20, padding: 15, borderRadius: 8 },
  saveButtonText: { color: '#fff', textAlign: 'center', fontSize: 18, fontWeight: 'bold' }
});

export default SettingsScreen;
