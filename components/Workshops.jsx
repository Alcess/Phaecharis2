import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  TouchableOpacity,
  Alert
} from 'react-native';
import { icons } from '../constants';
import { images } from '../constants';

const HomeScreen = () => {
  // Sample Data
  const jobListings = [
    {
      id: '1',
      title: 'C++ Workshop',
      company: 'Google Inc.',
      location: 'California, USA',
      salary: '',
      type: 'Workshop',
      level: 'Programming',
      icon: Image.resolveAssetSource(icons.Googlelogo).uri,
    },
    {
      id: '2',
      title: 'Java Workshop',
      company: 'GigaByte',
      location: 'Metro Manila, Philippines',
      salary: '',
      type: 'Workshop',
      level: 'Programming',
      icon: Image.resolveAssetSource(icons.Gigabytelogo).uri,
    },
    {
      id: '3',
      title: 'Web Development Workshop',
      company: 'Google Inc.',
      location: 'California, USA',
      salary: '',
      type: 'Workshop',
      level: 'Programming',
      icon: Image.resolveAssetSource(icons.Googlelogo).uri,
    },
  ];

  // Function to handle "Apply" button
       const handleApply = (jobTitle) => {
        Alert.alert('Application Started', `You have applied for ${jobTitle}`);
        // Navigate to application screen if needed
        // navigation.navigate('ApplicationScreen', { jobTitle });
      };

  // Render job cards
  const WorkshopCards = ({ item }) => (
    <View style={styles.card}>
        <View style={styles.cardHeader}>
            <Image source={{ uri: item.icon }} style={styles.cardImage} />
              <TouchableOpacity>
                <Image source={icons.bookmark} />
            </TouchableOpacity>
        </View>
      <View style={styles.cardContent}>
        <Text style={styles.jobTitle}>{item.title}</Text>
        <Text style={styles.jobCompany}>
          {item.company} · {item.location}
        </Text>
        <Text style={styles.jobSalary}>{item.salary}</Text>
        <View style={styles.tagContainer}>
          <Text style={styles.jobTag}>{item.level}</Text>
          <Text style={styles.jobTag}>{item.type}</Text>
        </View>
        <TouchableOpacity style={styles.applyButton} onPress={() => handleApply(item.title)}>
            <Text style={styles.applyText}>Apply</Text>
          </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>

      <FlatList
        data={jobListings}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item.id}
        renderItem={WorkshopCards}
        contentContainerStyle={styles.flatListContainer}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9f9f9',
    padding: 16,
  },
  greeting: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  section: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  seeMore: {
    fontSize: 14,
    color: '#007bff',
  },
  flatListContainer: {
    paddingVertical: 8,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 12,
    marginRight: 16,
    padding: 16,
    width: 280,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  cardImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginBottom: 8,
  },
  cardContent: {
    flex: 1,
  },
  jobTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  jobCompany: {
    fontSize: 14,
    color: '#6c757d',
    marginBottom: 8,
  },
  jobSalary: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#28a745',
    marginBottom: 8,
  },
  tagContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: 8,
  },
  jobTag: {
    fontSize: 12,
    color: '#fff',
    backgroundColor: '#007bff',
    borderRadius: 8,
    paddingHorizontal: 8,
    paddingVertical: 4,
    marginRight: 4,
    marginBottom: 4,
  },
  applyButton: {
    backgroundColor: '#ff7f50',
    borderRadius: 8,
    paddingVertical: 8,
    alignItems: 'center',
  },
  applyText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default HomeScreen;