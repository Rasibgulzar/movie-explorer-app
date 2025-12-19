import React from 'react';
import { View, Text, FlatList, Image, StyleSheet } from 'react-native';

const HomeScreen = () => {
  const movies = [
    { id: '1', title: 'Movie 1', year: '2023' },
    { id: '2', title: 'Movie 2', year: '2023' },
    { id: '3', title: 'Movie 3', year: '2022' },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image 
          source={{ uri: 'https://via.placeholder.com/50' }} 
          style={styles.logo} 
        />
        <Text style={styles.headerTitle}>Movie Explorer</Text>
      </View>
      
      <FlatList
        data={movies}
        renderItem={({ item }) => (
          <View style={styles.movieItem}>
            <Text style={styles.movieTitle}>{item.title}</Text>
            <Text style={styles.movieYear}>{item.year}</Text>
          </View>
        )}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f5f5f5' },
  header: { flexDirection: 'row', alignItems: 'center', padding: 15, backgroundColor: 'white' },
  logo: { width: 40, height: 40, marginRight: 10 },
  headerTitle: { fontSize: 20, fontWeight: 'bold' },
  movieItem: { backgroundColor: 'white', padding: 15, margin: 10, borderRadius: 5 },
  movieTitle: { fontSize: 18, fontWeight: '600' },
  movieYear: { color: '#666', marginTop: 5 }
});

export default HomeScreen;
