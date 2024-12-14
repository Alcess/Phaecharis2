import { View, Text, TextInput, FlatList, StyleSheet, Image, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import RecentJob from '../../components/RecentJob';
import FindYourJob from '../../components/FindYourJob';
import { icons } from '../../constants';

const jobsData = [
  // Combine jobs from RecentJob and FindYourJob
  {
    id: '1',
    title: 'Java Developer',
    company: 'GigaByte',
    location: 'Metro Manila, Philippines',
    salary: '$23k/Mo',
    type: 'Full Time',
    level: 'Programming',
    icon: Image.resolveAssetSource(icons.Gigabytelogo).uri,
  },
  {
    id: '2',
    title: 'C++ Developer',
    company: 'Google Inc.',
    location: 'California, USA',
    salary: '$30K/Mo',
    type: 'Full Time',
    level: 'Programming',
    icon: Image.resolveAssetSource(icons.Googlelogo).uri,
  },
  {
        id: '3',
        title: 'Data Analyst',
        company: 'GigaByte',
        location: 'Metro Manila, Philippines',
        salary: '$20K/Mo',
        type: 'Full Time',
        level: 'Senior Designer',
        icon: Image.resolveAssetSource(icons.Gigabytelogo).uri,
      },
  {
            id: '4',
            title: 'Product Designer',
            company: 'Google Inc.',
            location: 'California, USA',
            salary: '$30K/Mo',
            type: 'Full Time',
            level: 'Senior Designer',
            icon: Image.resolveAssetSource(icons.Googlelogo).uri,
  },
  {
      id: '5',
      title: 'IT Specialist',
      company: 'Apple Inc.',
      location: 'California, USA',
      salary: '$12K/Mo',
      type: 'Full Time',
      level: 'Junior Technician',
      icon: Image.resolveAssetSource(icons.Applelogo).uri,
    },
    {
          id: '6',
          title: 'Product Designer',
          company: 'Apple Inc.',
          location: 'California, USA',
          salary: '$33K/Mo',
          type: 'Full time',
          level: 'Senior Designer',
          icon: Image.resolveAssetSource(icons.Applelogo).uri,
        },
  // Add more job data as needed
];

const Search = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredJobs, setFilteredJobs] = useState(jobsData);

  const handleSearch = (query) => {
    setSearchQuery(query);
    if (query) {
      const filtered = jobsData.filter((job) =>
        job.title.toLowerCase().includes(query.toLowerCase())
      );
      setFilteredJobs(filtered);
    } else {
      setFilteredJobs(jobsData);
    }
  };

  const renderJobCard = ({ item }) => (
    <View style={styles.card}>
      <View style={styles.cardHeader}>
        <Image source={{ uri: item.icon }} style={styles.cardImage} />
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
        <TouchableOpacity style={styles.applyButton}>
          <Text style={styles.applyText}>Apply</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.searchInput}
        placeholder="Search for jobs..."
        value={searchQuery}
        onChangeText={handleSearch}
      />
      {filteredJobs.length === 0 ? (
        <Text style={styles.noResultsText}>
          Sorry, there are no results for "{searchQuery}"
        </Text>
      ) : (
        <FlatList
          data={filteredJobs}
          keyExtractor={(item) => item.id}
          renderItem={renderJobCard}
          contentContainerStyle={styles.flatListContainer}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#FAFAFA',
  },
  searchInput: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 8,
    marginBottom: 16,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 16,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 5,
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  cardImage: {
    width: 50,
    height: 50,
  },
  cardContent: {
    marginTop: 16,
  },
  jobTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  jobCompany: {
    fontSize: 14,
    color: '#666',
    marginVertical: 4,
  },
  jobSalary: {
    fontSize: 14,
    color: '#666',
    marginVertical: 4,
  },
  tagContainer: {
    flexDirection: 'row',
    marginVertical: 8,
  },
  jobTag: {
    backgroundColor: '#eee',
    borderRadius: 4,
    paddingHorizontal: 8,
    paddingVertical: 4,
    marginRight: 8,
  },
  applyButton: {
    backgroundColor: '#007BFF',
    borderRadius: 4,
    paddingVertical: 8,
    paddingHorizontal: 16,
    alignItems: 'center',
  },
  applyText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  flatListContainer: {
    paddingBottom: 16,
  },
});

export default Search;