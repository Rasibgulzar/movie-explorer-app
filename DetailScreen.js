import React from 'react';
import { View, Text, Image, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';

const DetailScreen = ({ route, navigation }) => {
  const { movie } = route.params || {
    title: 'Avengers: Endgame',
    year: '2019',
    rating: '8.4',
    description: 'After the devastating events of Infinity War, the Avengers assemble once more to reverse Thanos actions.',
    image: 'https://via.placeholder.com/300x450'
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text style={styles.backButton}>← Back</Text>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Movie Details</Text>
      </View>

      <Image source={{ uri: movie.image }} style={styles.poster} />
      
      <View style={styles.content}>
        <Text style={styles.title}>{movie.title}</Text>
        
        <View style={styles.infoContainer}>
          <Text style={styles.info}>Year: {movie.year}</Text>
          <Text style={styles.info}>Rating: ⭐ {movie.rating}/10</Text>
        </View>
        
        <Text style={styles.sectionTitle}>Description</Text>
        <Text style={styles.description}>{movie.description}</Text>
        
        <Text style={styles.sectionTitle}>Cast</Text>
        <Text style={styles.cast}>Robert Downey Jr., Chris Evans, Scarlett Johansson</Text>
        
        <TouchableOpacity style={styles.favoriteButton}>
          <Text style={styles.favoriteButtonText}>Add to Favorites</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  header: { flexDirection: 'row', alignItems: 'center', padding: 15, backgroundColor: '#f8f8f8' },
  backButton: { fontSize: 18, color: '#007AFF', marginRight: 20 },
  headerTitle: { fontSize: 20, fontWeight: 'bold' },
  poster: { width: '100%', height: 450, resizeMode: 'cover' },
  content: { padding: 20 },
  title: { fontSize: 28, fontWeight: 'bold', marginBottom: 10 },
  infoContainer: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 20 },
  info: { fontSize: 16, color: '#666' },
  sectionTitle: { fontSize: 20, fontWeight: '600', marginTop: 20, marginBottom: 10 },
  description: { fontSize: 16, lineHeight: 24, color: '#333' },
  cast: { fontSize: 16, color: '#666' },
  favoriteButton: { backgroundColor: '#FF3B30', padding: 15, borderRadius: 8, marginTop: 30 },
  favoriteButtonText: { color: '#fff', textAlign: 'center', fontSize: 18, fontWeight: 'bold' }
});

export default DetailScreen;
