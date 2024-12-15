import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { screens, Redirect } from 'expo-router';

const workshopsData = [
  // Add workshop data here
  {
    id: '1',
    title: 'React Native Workshop',
    company: 'Facebook',
    location: 'Menlo Park, USA',
    date: '2023-11-01',
    type: 'Workshop',
    level: 'Beginner',
  },
  {
    id: '2',
    title: 'DevOps Workshop',
    company: 'Amazon',
    location: 'Seattle, USA',
    date: '2023-12-15',
    type: 'Workshop',
    level: 'Intermediate',
  },
  {
    id: '3',
    title: 'Data Science Workshop',
    company: 'Netflix',
    location: 'Los Gatos, USA',
    date: '2024-01-10',
    type: 'Workshop',
    level: 'Advanced',
  },
  {
    id: '4',
    title: 'Machine Learning Workshop',
    company: 'Google',
    location: 'Mountain View, USA',
    date: '2024-02-20',
    type: 'Workshop',
    level: 'Advanced',
  },
  {
    id: '5',
    title: 'Cloud Computing Workshop',
    company: 'Microsoft',
    location: 'Redmond, USA',
    date: '2024-03-05',
    type: 'Workshop',
    level: 'Intermediate',
  },
  {
    id: '6',
    title: 'Cybersecurity Workshop',
    company: 'IBM',
    location: 'Armonk, USA',
    date: '2024-04-15',
    type: 'Workshop',
    level: 'Beginner',
  },
];

const Workshopsexpand = () => {
  return (
    <View style={styles.container}>
      <FlatList
        data={workshopsData}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text style={styles.jobTitle}>{item.title}</Text>
            <Text style={styles.jobCompany}>
              {item.company} · {item.location}
            </Text>
            <Text style={styles.jobDate}>{item.date}</Text>
            <View style={styles.tagContainer}>
              <Text style={styles.jobTag}>{item.level}</Text>
              <Text style={styles.jobTag}>{item.type}</Text>
            </View>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#FAFAFA',
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
  jobTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  jobCompany: {
    fontSize: 14,
    color: '#666',
    marginVertical: 4,
  },
  jobDate: {
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
});

export default Workshopsexpand;