import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { screens, Redirect } from 'expo-router';

const moreJobsData = [
  // Add more job data here
  {
    id: '4',
    title: 'Python Developer',
    company: 'Microsoft',
    location: 'Seattle, USA',
    salary: '$25K/Mo',
    type: 'Full Time',
    level: 'Programming',
  },
  {
    id: '5',
    title: 'C++ Developer',
    company: 'Ubisoft',
    location: 'Montreuil, France',
    salary: '$25K/Mo',
    type: 'Full Time',
    level: 'Programming',
  },
  {
    id: '6',
    title: 'Javascript Developer',
    company: 'Google',
    location: 'California, USA',
    salary: '$25K/Mo',
    type: 'Full Time',
    level: 'Programming',
  },
  {
    id: '7',
    title: 'React Native Developer',
    company: 'Facebook',
    location: 'Menlo Park, USA',
    salary: '$30K/Mo',
    type: 'Full Time',
    level: 'Programming',
  },
  {
    id: '8',
    title: 'DevOps Engineer',
    company: 'Amazon',
    location: 'Seattle, USA',
    salary: '$28K/Mo',
    type: 'Full Time',
    level: 'Engineering',
  },
  {
    id: '9',
    title: 'Data Scientist',
    company: 'Netflix',
    location: 'Los Gatos, USA',
    salary: '$32K/Mo',
    type: 'Full Time',
    level: 'Data Science',
  },
  // Add more job data as needed
];

const MoreJobs = () => {
  return (
    <View style={styles.container}>
      <FlatList
        data={moreJobsData}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text style={styles.jobTitle}>{item.title}</Text>
            <Text style={styles.jobCompany}>
              {item.company} · {item.location}
            </Text>
            <Text style={styles.jobSalary}>{item.salary}</Text>
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
});

export default MoreJobs;